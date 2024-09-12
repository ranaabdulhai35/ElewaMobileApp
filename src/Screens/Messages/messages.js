import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  ScrollView,
  TouchableOpacityBase,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header3 from '../../Components/Common/header3';
import {COLORS, FONTS} from '../../BusinessLogics/Constants';
import * as SVGS from '../../Ui/Assets/Svgs/index';
import * as Images from '../../Ui/Assets/Images/index';

import {GeneralStyles} from '../../Components/Global/generalStyles';
import {
  HEIGHT_BASE_RATIO,
  WIDTH_BASE_RATIO,
} from '../../BusinessLogics/Utils/helpers';

const Messages = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = React.useState('All');
  const messages = [1, 2, 3, 4, 5];
  const invites = [1, 2, 3, 4];
  return (
    <>
      <Header3
        Color={COLORS.WHITE}
        Arrow={SVGS.ArrowLeft}
        secondIcon={SVGS.MessageIcon}
        Screen={'Messages'}
      />
      <View
        style={{
          height: HEIGHT_BASE_RATIO(60),
          backgroundColor: COLORS.LIGHTEST_GRAY,
          justifyContent: 'center',
          paddingHorizontal: WIDTH_BASE_RATIO(20),
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'baseline',
          }}>
          <Pressable
            onPress={() => {
              setSelected('All');
            }}
            style={{alignItems: 'center'}}>
            <Text
              style={{
                ...FONTS.TTMedium_16_Black,
                color: selected === 'All' ? COLORS.BLACK : COLORS.GRAY_3,
              }}>
              All
            </Text>
            {selected === 'All' && (
              <View
                style={{
                  width: WIDTH_BASE_RATIO(20),
                  height: HEIGHT_BASE_RATIO(1),
                  backgroundColor: COLORS.BLACK,
                  marginTop: HEIGHT_BASE_RATIO(10),
                }}></View>
            )}
          </Pressable>
        </View>
      </View>
      <View
        style={[
          GeneralStyles.container,
          {backgroundColor: COLORS.LIGHTEST_GRAY},
        ]}>
        <ScrollView
          contentContainerStyle={{
            backgroundColor: COLORS.WHITE,
            ...GeneralStyles.generalPadding,
          }}
          scrollEnabled={true}>
          {selected === 'All' &&
            messages.map(() => {
              return (
                <TouchableOpacity
                  style={{
                    flexDirection: 'column',
                    marginTop: HEIGHT_BASE_RATIO(25),
                    backgroundColor: COLORS.WHITE,
                  }}
                  onPress={() => {
                    navigation.navigate('MessageScreen');
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={Images.MessagePfp}
                      style={{
                        width: WIDTH_BASE_RATIO(39),
                        height: HEIGHT_BASE_RATIO(39),
                      }}
                      resizeMode="contain"
                    />
                    <View
                      style={{
                        flexDirection: 'column',
                        marginLeft: WIDTH_BASE_RATIO(8),
                      }}>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{...FONTS.TTMedium_16_Black}}>
                          Yash Jha
                        </Text>
                        <Text
                          style={{
                            marginLeft: 5,
                            ...FONTS.TTSmall_12_Black,
                            color: COLORS.TXT_COLOR,
                          }}>
                          Sep 14, 2023
                        </Text>
                      </View>
                      <Text
                        style={{
                          ...FONTS.TTNormal_14_Black,
                          color: COLORS.TXT_COLOR,
                          marginTop: HEIGHT_BASE_RATIO(2.5),
                        }}>
                        Hi sexy
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      ...GeneralStyles.line,
                      width: '100%',
                      marginTop: HEIGHT_BASE_RATIO(18),
                      backgroundColor: COLORS.LIGHT_GRAY,
                    }}></View>
                </TouchableOpacity>
              );
            })}
        </ScrollView>
        <TouchableOpacity
          style={{
            width: WIDTH_BASE_RATIO(45.6),
            height: HEIGHT_BASE_RATIO(47.97),
            backgroundColor: COLORS.ADD_BTN_BG,
            borderRadius: HEIGHT_BASE_RATIO(45.67) / 1.5,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            right: 0,
            bottom: HEIGHT_BASE_RATIO(100),
            marginRight: WIDTH_BASE_RATIO(20),
          }}>
          <SVGS.Add />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Messages;
