import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import * as SVGS from '../../Ui/Assets/Svgs';
import {useNavigation} from '@react-navigation/native';
import {COLORS, FONTS} from '../../BusinessLogics/Constants';
import {
  FONT_SIZE,
  HEIGHT_BASE_RATIO,
  WIDTH_BASE_RATIO,
} from '../../BusinessLogics/Utils/helpers';
import Header from '../../Components/Common/header';
import {styles} from '../FindWork/jobCard';
import {GeneralStyles} from '../../Components/Global/generalStyles';
import CustomButton from '../../Components/Common/customButton';
import {FontFamily} from '../../Components/Global/generalFonts';

const Contract = () => {
  const navigation = useNavigation();

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
      <View style={[GeneralStyles.container, GeneralStyles.generalPadding]}>
        <View
          style={{
            width: '100%',
            borderColor: COLORS.PRIMARY,
            borderWidth: 1,
            borderRadius: 8,
            marginTop: HEIGHT_BASE_RATIO(20),
            paddingHorizontal: WIDTH_BASE_RATIO(20),
            paddingVertical: HEIGHT_BASE_RATIO(20),
          }}>
          <View style={{justifyContent: 'space-between'}}>
            <View style={styles.cardHeader}>
              <Text style={styles.title}>
                Design and Digital Marketing Specialist
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: HEIGHT_BASE_RATIO(5),
              }}>
              <Text
                style={{
                  ...styles.company,
                  fontFamily: FontFamily.Medium,
                }}>
                Client:{' '}
              </Text>
              <Text
                style={{
                  ...styles.company,
                  fontFamily: FontFamily.Medium,
                  color: COLORS.BLACK,
                }}>
                Netflix ENT
              </Text>
              <Text
                style={{
                  ...styles.company,
                  fontFamily: FontFamily.Medium,
                }}>
                {'  '}(Jul 13, 2022 - Present)
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: HEIGHT_BASE_RATIO(30),
                justifyContent: 'space-between',
              }}>
              <View>
                <Text
                  style={{
                    ...FONTS.TTNormal_14_Black,
                    fontFamily: FontFamily.Medium,
                  }}>
                  Total Budget
                </Text>
                <Text
                  style={{
                    ...FONTS.TTNormal_14_Black,
                    fontFamily: FontFamily.SemiBold,
                    color: COLORS.GRAY_3,
                    marginTop: HEIGHT_BASE_RATIO(6),
                  }}>
                  $31,420.83
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    ...FONTS.TTNormal_14_Black,
                    fontFamily: FontFamily.Medium,
                  }}>
                  In Escrow
                </Text>
                <Text
                  style={{
                    ...FONTS.TTNormal_14_Black,
                    fontFamily: FontFamily.SemiBold,
                    color: COLORS.GRAY_3,
                    marginTop: HEIGHT_BASE_RATIO(6),
                  }}>
                  $25.00 /hr
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: HEIGHT_BASE_RATIO(25),
                justifyContent: 'space-between',
              }}>
              <View>
                <Text
                  style={{
                    ...FONTS.TTNormal_14_Black,
                    fontFamily: FontFamily.Medium,
                  }}>
                  Paid
                </Text>
                <Text
                  style={{
                    ...FONTS.TTNormal_14_Black,
                    fontFamily: FontFamily.SemiBold,
                    color: COLORS.GRAY_3,
                    marginTop: HEIGHT_BASE_RATIO(6),
                  }}>
                  1,257 hours
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    ...FONTS.TTNormal_14_Black,
                    fontFamily: FontFamily.Medium,
                  }}>
                  Remaining
                </Text>
                <Text
                  style={{
                    ...FONTS.TTNormal_14_Black,
                    fontFamily: FontFamily.SemiBold,
                    color: COLORS.GRAY_3,
                    marginTop: HEIGHT_BASE_RATIO(6),
                  }}>
                  $15,500
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              ...GeneralStyles.line,
              width: '100%',
              backgroundColor: COLORS.Gray,
              marginTop: HEIGHT_BASE_RATIO(30),
            }}></View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: HEIGHT_BASE_RATIO(25),
            }}>
            <Text
              style={{
                ...FONTS.TTMedium_16_Black,
                fontFamily: FontFamily.SemiBold,
                color: COLORS.PRIMARY,
              }}>
              Total Earning
            </Text>
            <Text
              style={{
                ...FONTS.TTMedium_16_Black,
                fontFamily: FontFamily.SemiBold,
                color: COLORS.BLACK,
              }}>
              $15,500
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: HEIGHT_BASE_RATIO(30),
            }}>
            <CustomButton
              backgroundColor={COLORS.PRIMARY}
              width={WIDTH_BASE_RATIO(151)}
              height={HEIGHT_BASE_RATIO(38)}
              borderRadius={4.5}
              boderColor={COLORS.PRIMARY}
              shadowStyle={{
                shadowColor: COLORS.PRIMARY,
                shadowOffset: {width: 0, height: 12},
                shadowOpacity: 0.96,
                shadowRadius: 3,
                elevation: 10,
              }}
              text={'Request Payment'}
              textStyle={{
                ...FONTS.ButtonText,
                color: COLORS.WHITE,
                fontSize: FONT_SIZE(12),
              }}
            />
            <CustomButton
              backgroundColor={COLORS.WHITE}
              width={WIDTH_BASE_RATIO(151)}
              height={HEIGHT_BASE_RATIO(38)}
              borderRadius={4.5}
              boderColor={COLORS.PRIMARY}
              shadowStyle={{
                shadowColor: COLORS.GRAY_3,
                shadowOffset: {width: 0, height: 12},
                shadowOpacity: 0.96,
                shadowRadius: 3,
                elevation: 15,
              }}
              onPress={()=>{
                navigation.navigate('EndContract')
              }}
              text={'End Contract'}
              textStyle={{
                ...FONTS.ButtonText,
                color: COLORS.PRIMARY,
                fontSize: FONT_SIZE(12),
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default Contract;
