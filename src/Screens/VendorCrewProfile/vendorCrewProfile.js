import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../../Components/Common/header';
import {COLORS, FONTS} from '../../BusinessLogics/Constants';
import * as SVGS from '../../Ui/Assets/Svgs/index';
import * as Images from '../../Ui/Assets/Images/index';
import {useNavigation} from '@react-navigation/native';
import {
  FONT_SIZE,
  HEIGHT_BASE_RATIO,
  truncateText,
  WIDTH_BASE_RATIO,
} from '../../BusinessLogics/Utils/helpers';
import {GeneralStyles} from '../../Components/Global/generalStyles';
import {styles} from '../FindWork/jobCard';
import CustomButton from '../../Components/Common/customButton';
import {FontFamily} from '../../Components/Global/generalFonts';
import httpRequest from '../../BusinessLogics/Requests/axios';
import {useSelector} from 'react-redux';
import FastImage from 'react-native-fast-image';

const VendorCrewProfile = ({route}) => {
  const {profileData} = route.params;
  const [profile, setProfile] = useState('');
  const navigation = useNavigation();
  const state = useSelector(state => state.auth);
  console.log('pfp', {...profile});
  useEffect(() => {
    VendorCrewProfileApi();
  }, []);
  const VendorCrewProfileApi = async () => {
    try {
      const response = await httpRequest.get(
        `/utils/public_vendor_crew_profile?id=${profileData?.id}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (response?.status === 200) {
        setProfile(response?.data?.data);
        console.log(response?.data?.data);
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data?.status);
      }
    }
  };
  const createChatRoom = async () => {
    try {
      const data = JSON.stringify({
        members: [state.id, profile?.id],
        type: 'DM',
      });
      const response = await httpRequest.post('/chat/chats', data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: state.token,
        },
      });
      if (response.status == 200) {
        console.log('room', response.data.roomId);
        navigation.navigate('MessageScreen', {
          data: {
            roomId: response.data.roomId,
            member: [{...profile}, {}],
          },
        });
      }
    } catch (e) {
      if (e.response) {
        console.log(e.response.data);
      }
    }
  };

  return (
    <>
      <Header
        backgroundColor={COLORS.WHITE}
        leftIcon={SVGS.ArrowLeft}
        rightIcon={SVGS.Message}
        middleIcon={SVGS.Elewa}
        style={{
          marginTop: HEIGHT_BASE_RATIO(40),
          marginBottom: HEIGHT_BASE_RATIO(15),
        }}
        onPressLeftIcon={() => {
          navigation.goBack();
        }}
        onPressRightIcon={() => {
          navigation.navigate('Messages');
        }}
        onPressMiddleIcon={() => {
          navigation.navigate('Home');
        }}
      />
      <View
        style={[
          GeneralStyles.container,
          GeneralStyles.generalPadding,
          {paddingTop: HEIGHT_BASE_RATIO(25)},
        ]}>
        <View
          style={{
            width: '100%',
            paddingHorizontal: WIDTH_BASE_RATIO(15),
            paddingVertical: HEIGHT_BASE_RATIO(23),
            borderRadius: 8,
            borderWidth: 1,
            borderColor: COLORS.PRIMARY,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            {profile?.profile_picture?.cdn_link ? (
              <FastImage
                source={{
                  uri: profile?.profile_picture?.cdn_link,
                }}
                style={{
                  width: WIDTH_BASE_RATIO(60),
                  height: HEIGHT_BASE_RATIO(65),
                  borderRadius: 50,
                  marginRight: WIDTH_BASE_RATIO(2.5),
                }}
                resizeMode="cover"
              />
            ) : (
              <SVGS.Profile />
            )}
            <View
              style={{
                justifyContent: 'space-between',
                marginLeft: WIDTH_BASE_RATIO(12),
              }}>
              <Text
                style={{
                  ...FONTS.TTMedium_16_Black,
                  fontFamily: FontFamily.SemiBold,
                  color: COLORS.BLACK,
                  letterSpacing: 0.09,
                }}>
                {/* {jobDetails?.vendor?.company_name} */}
                {profile?.first_name}
              </Text>
              <View
                style={[
                  styles.infoItem,
                  {marginLeft: 0, marginTop: HEIGHT_BASE_RATIO(8)},
                ]}>
                <SVGS.PostLocation />
                <Text style={[styles.infoText]}>
                  {/* {jobDetails?.city}, {jobDetails?.country} */}
                  {truncateText(profile?.country, 10) +
                    ',' +
                    truncateText(profile?.city, 10)}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              marginTop: HEIGHT_BASE_RATIO(15),
              height: HEIGHT_BASE_RATIO(30),
              backgroundColor: COLORS.LIGHT_GRAY,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              maxWidth: WIDTH_BASE_RATIO(190),
            }}>
            <Text
              style={{
                ...FONTS.TTMedium_14_Black,
                color: COLORS.ParagrapghText,
                letterSpacing: 0.05,
              }}>
              {/* {jobDetails?.description} */}
              {profile?.occupation}
            </Text>
          </View>
          <View>
            <Text
              style={{
                ...FONTS.TTNormal_14_Black,
                fontFamily: FontFamily.SemiBold,
                marginTop: HEIGHT_BASE_RATIO(25),
              }}>
              About
            </Text>
            <Text
              style={{
                ...FONTS.TTSmall_12_Black,
                color: COLORS.ParagrapghText,
                marginTop: HEIGHT_BASE_RATIO(10),
                letterSpacing: 0.05,
              }}>
              {profile?.about}
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <CustomButton
              backgroundColor={COLORS.WHITE}
              width={WIDTH_BASE_RATIO(150)}
              height={HEIGHT_BASE_RATIO(48)}
              borderRadius={6}
              boderColor={COLORS.PRIMARY}
              shadowStyle={{
                shadowColor: COLORS.LIGHT_GRAY,
                shadowOffset: {width: 0, height: 12},
                shadowOpacity: 0.96,
                shadowRadius: 3,
                elevation: 15,
              }}
              display={state?.role === 'crew' ? 'none' : 'flex'}
              marginTop={HEIGHT_BASE_RATIO(20)}
              text={'Message'}
              onPress={() => {
                createChatRoom();
              }}
              textStyle={{
                ...FONTS.ButtonText,
                color: COLORS.PRIMARY,
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default VendorCrewProfile;
