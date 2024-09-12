import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS} from '../../../BusinessLogics/Constants';
import * as SVGS from '../../../Ui/Assets/Svgs/index';
import {
  FONT_SIZE,
  HEIGHT_BASE_RATIO,
  WIDTH_BASE_RATIO,
} from '../../../BusinessLogics/Utils/helpers';
import {FontFamily} from '../../../Components/Global/generalFonts';
import CustomButton from '../../../Components/Common/customButton';
import {styles} from '../../FindWork/jobCard';
import {useNavigation} from '@react-navigation/native';

const Offers = () => {
  const data = [1, 2, 3, 4, 5];
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          width: '100%',
          borderColor: COLORS.BORDER,
          borderWidth: 1,
          borderRadius: 8,
          paddingHorizontal: WIDTH_BASE_RATIO(20),
          paddingVertical: HEIGHT_BASE_RATIO(20),
        }}>
        <View style={{justifyContent: 'space-between'}}>
          <View style={styles.cardHeader}>
            <Text style={styles.title}>Design and Digitasl...</Text>
            <TouchableOpacity style={styles.likeButton}>
              <SVGS.Like />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              ...styles.company,
              fontFamily: FontFamily.Medium,
            }}>
            Netflix ENT
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: HEIGHT_BASE_RATIO(15),
            alignItems: 'center',
          }}>
          <Text
            style={{
              ...styles.company,
              marginVertical: 0,
              color: COLORS.GRAY_3,
              fontFamily: FontFamily.Medium,
            }}>
            $31,420.83
          </Text>
          <Text
            style={{
              ...styles.company,
              marginVertical: 0,
              color: COLORS.GRAY_3,
              fontFamily: FontFamily.Medium,
            }}>
            $25.00 /hr
          </Text>
          <Text
            style={{
              ...styles.company,
              marginVertical: 0,
              color: COLORS.GRAY_3,
              fontFamily: FontFamily.Medium,
            }}>
            1,257 hours
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: HEIGHT_BASE_RATIO(20),
          }}>
          <CustomButton
            backgroundColor={COLORS.PRIMARY}
            width={WIDTH_BASE_RATIO(150)}
            height={HEIGHT_BASE_RATIO(48)}
            borderRadius={6}
            boderColor={COLORS.PRIMARY}
            shadowStyle={{
              shadowColor: COLORS.PRIMARY,
              shadowOffset: {width: 0, height: 12},
              shadowOpacity: 0.96,
              shadowRadius: 3,
              elevation: 15,
            }}
            text={'Accept'}
            textStyle={{
              ...FONTS.ButtonText,
              color: COLORS.WHITE,
            }}
          />
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
            text={'Message'}
            textStyle={{
              ...FONTS.ButtonText,
              color: COLORS.PRIMARY,
            }}
          />
        </View>
      </View>
      {data.map(() => {
        return (
          <View
            style={{
              width: '100%',
              borderColor: COLORS.BORDER,
              borderWidth: 1,
              borderRadius: 8,
              paddingHorizontal: WIDTH_BASE_RATIO(20),
              paddingVertical: HEIGHT_BASE_RATIO(20),
              marginTop: HEIGHT_BASE_RATIO(20),
            }}>
            <View style={{justifyContent: 'space-between'}}>
              <View style={styles.cardHeader}>
                <Text style={styles.title}>Design and Digitasl...</Text>
                <TouchableOpacity style={styles.likeButton}>
                  <SVGS.Like />
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  ...styles.company,
                  fontFamily: FontFamily.Medium,
                }}>
                Netflix ENT
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: HEIGHT_BASE_RATIO(15),
                alignItems: 'center',
              }}>
              <Text
                style={{
                  ...styles.company,
                  marginVertical: 0,
                  color: COLORS.GRAY_3,
                  fontFamily: FontFamily.Medium,
                }}>
                $31,420.83
              </Text>
              <Text
                style={{
                  ...styles.company,
                  marginVertical: 0,
                  color: COLORS.GRAY_3,
                  fontFamily: FontFamily.Medium,
                }}>
                $25.00 /hr
              </Text>
              <Text
                style={{
                  ...styles.company,
                  marginVertical: 0,
                  color: COLORS.GRAY_3,
                  fontFamily: FontFamily.Medium,
                }}>
                1,257 hours
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: HEIGHT_BASE_RATIO(20),
              }}>
              <CustomButton
                backgroundColor={COLORS.WHITE}
                width={WIDTH_BASE_RATIO(269)}
                height={HEIGHT_BASE_RATIO(34)}
                borderRadius={30}
                boderColor={COLORS.BORDER}
                text={'See Contract'}
                onPress={() => {
                  navigation.navigate('Contract');
                }}
                textStyle={{
                  ...FONTS.ButtonText,
                  color: COLORS.TXT_COLOR,
                  fontSize: FONT_SIZE(12),
                }}
              />
              <TouchableOpacity
                style={{
                  width: WIDTH_BASE_RATIO(32),
                  height: HEIGHT_BASE_RATIO(34),
                  borderWidth: 1,
                  borderColor: COLORS.BORDER,
                  borderRadius: 18,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <SVGS.HorizontalDots />
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </>
  );
};

export default Offers;
