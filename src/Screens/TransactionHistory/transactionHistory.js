import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import Header from '../../Components/Common/header';
import {COLORS, FONTS} from '../../BusinessLogics/Constants';
import * as SVGS from '../../Ui/Assets/Svgs';
import {
  FONT_SIZE,
  HEIGHT_BASE_RATIO,
  WIDTH_BASE_RATIO,
} from '../../BusinessLogics/Utils/helpers';
import {useNavigation} from '@react-navigation/native';
import {GeneralStyles} from '../../Components/Global/generalStyles';
import {FontFamily} from '../../Components/Global/generalFonts';

const TransactionHistory = () => {
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
        <Text
          style={{
            ...FONTS.TTLarge_24_Black,
            fontSize: FONT_SIZE(20),
            color: COLORS.PRIMARY,
            letterSpacing: 0.15,
            marginTop: HEIGHT_BASE_RATIO(10),
          }}>
          TransactionHistory
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: HEIGHT_BASE_RATIO(30),
          }}>
          <TouchableOpacity
            style={{
              width: WIDTH_BASE_RATIO(208),
              height: HEIGHT_BASE_RATIO(45),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 6,
              borderWidth: 1,
              borderColor: COLORS.BORDER,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                ...FONTS.TTNormal_14_Black,
                marginRight: WIDTH_BASE_RATIO(25),
              }}>
              4/31/2013 - 8/20/2023
            </Text>
            <SVGS.ArrowBottomBlack />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: WIDTH_BASE_RATIO(135),
              height: HEIGHT_BASE_RATIO(45),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 6,
              borderWidth: 1,
              borderColor: COLORS.BORDER,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                ...FONTS.TTNormal_14_Black,
                marginRight: WIDTH_BASE_RATIO(25),
              }}>
              Clients
            </Text>
            <SVGS.ArrowBottomBlack />
          </TouchableOpacity>
        </View>
        <ScrollView style={{marginTop: HEIGHT_BASE_RATIO(30)}}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  ...FONTS.TTNormal_14_Black,
                  color: COLORS.Gray,
                  fontFamily: FontFamily.Bold,
                }}>
                Dec 28, 2018
              </Text>
              <Text
                style={{
                  ...FONTS.TTNormal_14_Black,
                  color: COLORS.PRIMARY,
                  fontFamily: FontFamily.Medium,
                  borderBottomColor: COLORS.PRIMARY,
                  borderBottomWidth: 1,
                }}>
                View invoice
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: HEIGHT_BASE_RATIO(12.5),
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    width: WIDTH_BASE_RATIO(50),
                    height: HEIGHT_BASE_RATIO(52),
                    backgroundColor: COLORS.ADD_BTN_BG,
                    borderRadius: 25,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <SVGS.MoneyReceive />
                </View>
                <View style={{marginLeft: WIDTH_BASE_RATIO(12)}}>
                  <Text
                    style={{
                      ...FONTS.TTNormal_14_Black,
                      fontFamily: FontFamily.Bold,
                    }}>
                    PSAE
                  </Text>
                  <Text
                    style={{
                      ...FONTS.TTNormal_14_Black,
                    }}>
                    Service Fee
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  ...FONTS.TTNormal_14_Black,
                  fontFamily: FontFamily.Bold,
                }}>
                $48.00
              </Text>
            </View>
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop:HEIGHT_BASE_RATIO(20)
              }}>
              <Text
                style={{
                  ...FONTS.TTNormal_14_Black,
                  color: COLORS.Gray,
                  fontFamily: FontFamily.Bold,
                }}>
                Dec 28, 2018
              </Text>
              <Text
                style={{
                  ...FONTS.TTNormal_14_Black,
                  color: COLORS.PRIMARY,
                  fontFamily: FontFamily.Medium,
                  borderBottomColor: COLORS.PRIMARY,
                  borderBottomWidth: 1,
                }}>
                View invoice
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: HEIGHT_BASE_RATIO(12.5),
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    width: WIDTH_BASE_RATIO(50),
                    height: HEIGHT_BASE_RATIO(52),
                    backgroundColor: COLORS.ADD_BTN_BG,
                    borderRadius: 25,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <SVGS.MoneyReceive />
                </View>
                <View style={{marginLeft: WIDTH_BASE_RATIO(12)}}>
                  <Text
                    style={{
                      ...FONTS.TTNormal_14_Black,
                      fontFamily: FontFamily.Bold,
                    }}>
                    PSAE
                  </Text>
                  <Text
                    style={{
                      ...FONTS.TTNormal_14_Black,
                    }}>
                    Bonus
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  ...FONTS.TTNormal_14_Black,
                  fontFamily: FontFamily.Bold,
                }}>
                $48.00
              </Text>
            </View>
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop:HEIGHT_BASE_RATIO(20)
              }}>
              <Text
                style={{
                  ...FONTS.TTNormal_14_Black,
                  color: COLORS.Gray,
                  fontFamily: FontFamily.Bold,
                }}>
                Dec 28, 2018
              </Text>
              <Text
                style={{
                  ...FONTS.TTNormal_14_Black,
                  color: COLORS.PRIMARY,
                  fontFamily: FontFamily.Medium,
                  borderBottomColor: COLORS.PRIMARY,
                  borderBottomWidth: 1,
                }}>
                View invoice
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: HEIGHT_BASE_RATIO(12.5),
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    width: WIDTH_BASE_RATIO(50),
                    height: HEIGHT_BASE_RATIO(52),
                    backgroundColor: COLORS.ADD_BTN_BG,
                    borderRadius: 25,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <SVGS.MoneyReceive />
                </View>
                <View style={{marginLeft: WIDTH_BASE_RATIO(12)}}>
                  <Text
                    style={{
                      ...FONTS.TTNormal_14_Black,
                      fontFamily: FontFamily.Bold,
                    }}>
                    PSAE
                  </Text>
                  <Text
                    style={{
                      ...FONTS.TTNormal_14_Black,
                    }}>
                    Bonus
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  ...FONTS.TTNormal_14_Black,
                  fontFamily: FontFamily.Bold,
                }}>
                $48.00
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default TransactionHistory;
