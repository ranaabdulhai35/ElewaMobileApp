import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header4 from '../../Components/Common/header4';
import {COLORS, FONTS} from '../../BusinessLogics/Constants';
import * as SVGS from '../../Ui/Assets/Svgs/index';
import * as Images from '../../Ui/Assets/Images/index';
import {GeneralStyles} from '../../Components/Global/generalStyles';
import {WIDTH_BASE_RATIO} from '../../BusinessLogics/Utils/helpers';
import {HEIGHT_BASE_RATIO} from '../../Components/Utils/helpers';
import CustomInputTitle from '../../Components/Common/customInputTitle';
import httpRequest from '../../BusinessLogics/Requests/axios';
import {useSelector} from 'react-redux';
import moment from 'moment';
import {formatDate} from '../../Components/Utils/dateFormat';
import {launchImageLibrary} from 'react-native-image-picker';

const MessageScreen = ({route}) => {
  const {data} = route.params;
  const state = useSelector(state => state.auth);
  const [messages, setMessage] = useState([]);
  const [addMessage, setAddMessage] = useState('');
  const [socket, setSocket] = useState(null);
  const [showOptions, setShowOptions] = useState(false);
  const [loader, setLoader] = useState(false);
  const [selectImage, setSelectImage] = useState();
  const [selectVideo, setSelectVIdeo] = useState();

  console.log('id', state);
  useEffect(() => {
    getMessages();
    const ws = new WebSocket(
      `wss://elwa-be.atsol.io/ws/users/${state.id}/chat/`,
    );

    ws.onopen = () => {
      console.log('WebSocket connection opened');
    };

    ws.onmessage = event => {
      console.log('Received message:', event.data);
    };

    ws.onerror = error => {
      console.error('WebSocket error:', error);
    };

    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };

    setSocket(ws);

    return () => {
      if (ws) {
        ws.close();
      }
    };
  }, []);

  const getMessages = async () => {
    setLoader(true);
    try {
      const response = await httpRequest(
        `/chat/chats/${data?.roomId}/messages`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${state.token}`,
          },
        },
      );
      if (response?.status === 200) {
        setMessage(response.data.data.data);
      }
    } catch (error) {
      if (error.response) {
        console.log('error.response.data', error.response.data);
      }
    } finally {
      setLoader(false);
    }
  };

  const sendMessage = async () => {
    if (
      socket &&
      socket.readyState === WebSocket.OPEN &&
      addMessage.trim() !== ''
    ) {
      const timestamp = formatDate(new Date());
      const messagePayload = {
        action: 'message',
        roomId: data?.roomId,
        message: addMessage,
        user: state.id,
        timestamp,
      };
      socket.send(JSON.stringify(messagePayload));
      setMessage(prevMessages => [messagePayload, ...prevMessages]);
      setAddMessage('');
    } else {
      console.error('WebSocket is not open or message is empty');
    }
  };

  const renderMessages = ({item}) => {
    return state.id === item.user ? (
      <View
        style={{
          flexDirection: 'row',
          width: WIDTH_BASE_RATIO(250),
          alignItems: 'baseline',
          backgroundColor: COLORS.PRIMARY,
          borderRadius: 6,
          paddingHorizontal: WIDTH_BASE_RATIO(15),
          paddingVertical: HEIGHT_BASE_RATIO(18),
          marginTop: HEIGHT_BASE_RATIO(20),
          marginVertical: HEIGHT_BASE_RATIO(5),
          alignSelf: 'flex-end',
        }}>
        <Text
          style={[
            GeneralStyles.Paragraph,
            {
              width: WIDTH_BASE_RATIO(160),
              textAlign: 'left',
              marginTop: 0,
              color: COLORS.WHITE,
            },
          ]}>
          {item?.message}
        </Text>
        <Text style={{...FONTS.TTSmall_12_Black, color: COLORS.WHITE}}>
          {moment(item?.timestamp).format('MMM Do YY')}
        </Text>
      </View>
    ) : (
      <View
        style={{
          flexDirection: 'row',
          width: WIDTH_BASE_RATIO(250),
          alignItems: 'baseline',
          backgroundColor: COLORS.ADD_BTN_BG,
          borderRadius: 6,
          paddingHorizontal: WIDTH_BASE_RATIO(15),
          paddingVertical: HEIGHT_BASE_RATIO(18),
          marginVertical: HEIGHT_BASE_RATIO(5),
        }}>
        <Text
          style={[
            GeneralStyles.Paragraph,
            {
              width: WIDTH_BASE_RATIO(160),
              textAlign: 'left',
              marginTop: 0,
              color: COLORS.BLACK,
            },
          ]}>
          {item?.message}
        </Text>
        <Text style={{...FONTS.TTSmall_12_Black}}>
          {moment(item?.timestamp).format('MMM Do YY')}
        </Text>
      </View>
    );
  };
  const imagePicker = () => {
    let options = {storageOptions: {path: 'image'}};
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled the picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        console.log('Video URI: ', response.assets[0].uri);
        setSelectImage(response.assets[0].uri);
      }
    });
  };
  const handleSelectVideo = () => {
    let options = {
      mediaType: 'video',
      includeBase64: false,
      selectionLimit: 1,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled the picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        console.log('Video URI: ', response.assets[0].uri);
        setSelectVIdeo(response.assets[0].uri);
      }
    });
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1, backgroundColor: COLORS.LIGHTEST_GRAY}}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Header4
        Color={COLORS.WHITE}
        Arrow={SVGS.ArrowLeft}
        secondIcon={SVGS.Info}
        name={[data?.member[0]?.first_name, ' ', data?.member[0]?.last_name]}
        lastSeen={'Last seen 24hr ago'}
        image={data?.member[0]?.profile_picture?.cdn_link}
      />

      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.LIGHTEST_GRAY,
          marginBottom: HEIGHT_BASE_RATIO(15),
          marginHorizontal: WIDTH_BASE_RATIO(10),
        }}>
        {loader ? (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: HEIGHT_BASE_RATIO(120),
            }}>
            <ActivityIndicator size={'small'} />
          </View>
        ) : (
          <FlatList
            data={messages}
            renderItem={renderMessages}
            keyExtractor={item => item.id}
            inverted={true} // If you want the chat to scroll from bottom to top
          />
        )}
      </View>
      <View
        style={{
          width: '100%',
          height: HEIGHT_BASE_RATIO(80),
          backgroundColor: COLORS.WHITE,
          shadowColor: 'lightgray',
          shadowOffset: {width: 0, height: -25},
          shadowOpacity: 0.7,
          shadowRadius: 5,
          zIndex: 1,
          elevation: 5,
          // position: 'absolute',
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        {showOptions && (
          <View
            style={{
              width: WIDTH_BASE_RATIO(120),
              height: HEIGHT_BASE_RATIO(50),
              backgroundColor: COLORS.CARD_BG,
              borderRadius: 5,
              position: 'absolute',
              zIndex: 1,
              bottom: HEIGHT_BASE_RATIO(70),
              left: WIDTH_BASE_RATIO(10),
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: WIDTH_BASE_RATIO(15),
            }}>
            <TouchableOpacity
              onPress={() => {
                imagePicker();
                setShowOptions(false);
              }}>
              <Text style={{...FONTS.NormalText, color: COLORS.BLACK}}>
                Picture
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handleSelectVideo();
                setShowOptions(false);
              }}>
              <Text style={{...FONTS.NormalText, color: COLORS.BLACK}}>
                Video
              </Text>
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity
          style={{
            width: WIDTH_BASE_RATIO(37.6),
            height: HEIGHT_BASE_RATIO(39),
            backgroundColor: COLORS.TXT_INPUT_BG,
            borderRadius: HEIGHT_BASE_RATIO(39) / 1.5,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: WIDTH_BASE_RATIO(10),
          }}
          onPress={() => setShowOptions(!showOptions)}>
          <SVGS.Add width={20} height={20} />
        </TouchableOpacity>
        <CustomInputTitle
          value={addMessage}
          onChangeText={text => setAddMessage(text)}
          placeholder={'Type message here...'}
          returnKeyType={'done'}
          backgroundColor={COLORS.TXT_INPUT_BG}
          borderColor={COLORS.TXT_INPUT_BG}
          placeholderColor={COLORS.BLACK}
          width={WIDTH_BASE_RATIO(302)}
          height={HEIGHT_BASE_RATIO(48)}
          borderRadius={6}
          borderWidth={1.5}
          SVGright={SVGS.Send}
          onPressSVG={() => sendMessage()}
          noIcon={true}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default MessageScreen;
