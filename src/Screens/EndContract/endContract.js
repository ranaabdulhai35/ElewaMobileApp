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
import CustomInputTitle from '../../Components/Common/customInputTitle';
import CustomButton from '../../Components/Common/customButton';

const EndContract = () => {
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
      <ScrollView style={{backgroundColor: COLORS.WHITE}}>
        <View
          style={[
            GeneralStyles.container,
            GeneralStyles.generalPadding,
            {paddingBottom: HEIGHT_BASE_RATIO(20)},
          ]}>
          <Text
            style={{
              ...FONTS.TTLarge_24_Black,
              fontSize: FONT_SIZE(24),
              color: COLORS.PRIMARY,
              fontFamily: FontFamily.Bold,
              marginTop: HEIGHT_BASE_RATIO(30),
            }}>
            Design and Digital Marketing Specialist
          </Text>
          <Text
            style={{
              ...FONTS.TTNormal_14_Black,
              marginVertical: 5,
              color: COLORS.ParagrapghText,
              fontFamily: FontFamily.Medium,
              marginTop: HEIGHT_BASE_RATIO(10),
            }}>
            Client: Netflix ENT (Jul 13, 2022 - Present)
          </Text>
          <View
            style={{
              width: '100%',
              borderRadius: 10,
              borderColor: COLORS.Gray,
              borderWidth: 1,
              marginTop: HEIGHT_BASE_RATIO(23),
              paddingHorizontal: WIDTH_BASE_RATIO(20),
              paddingVertical: HEIGHT_BASE_RATIO(23),
            }}>
            <Text
              style={{
                ...FONTS.TTLarge_24_Black,
                fontFamily: FontFamily.SemiBold,
                fontSize: FONT_SIZE(20),
              }}>
              Private Feedback
            </Text>
            <Text
              style={{
                ...FONTS.TTNormal_14_Black,
                fontFamily: FontFamily.Medium,
                color: COLORS.ParagrapghText,
                marginTop: HEIGHT_BASE_RATIO(10),
              }}>
              This feedback will be kept anonymous and never shared directly
              with the client .
            </Text>
            <Text
              style={{
                ...FONTS.TTMedium_16_Black,
                fontFamily: FontFamily.SemiBold,
                color: COLORS.PRIMARY,
                marginTop: HEIGHT_BASE_RATIO(10),
              }}>
              Reason for Ending contract
            </Text>
            <TouchableOpacity
              style={{
                width: WIDTH_BASE_RATIO(313),
                height: HEIGHT_BASE_RATIO(45),
                borderRadius: 8,
                borderColor: COLORS.Gray,
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingHorizontal: WIDTH_BASE_RATIO(20),
                marginTop: HEIGHT_BASE_RATIO(16),
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  ...FONTS.TTNormal_14_Black,
                  fontFamily: FontFamily.Medium,
                }}>
                Reason for Ending contract
              </Text>
              <SVGS.ArrowBottomBlack />
            </TouchableOpacity>
            <Text
              style={{
                ...FONTS.TTMedium_16_Black,
                fontFamily: FontFamily.SemiBold,
                color: COLORS.PRIMARY,
                marginTop: HEIGHT_BASE_RATIO(10),
              }}>
              How likely are you to recommend this client to friend or a
              colleague?
            </Text>
            <TouchableOpacity
              style={{
                width: WIDTH_BASE_RATIO(313),
                height: HEIGHT_BASE_RATIO(45),
                borderRadius: 8,
                borderColor: COLORS.Gray,
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingHorizontal: WIDTH_BASE_RATIO(20),
                marginTop: HEIGHT_BASE_RATIO(16),
                alignSelf: 'center',
              }}>
              <Text
                style={{
                  ...FONTS.TTNormal_14_Black,
                  fontFamily: FontFamily.Medium,
                }}>
                10 - Extremely Likely
              </Text>
              <SVGS.ArrowBottomBlack />
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '100%',
              borderRadius: 10,
              borderColor: COLORS.Gray,
              borderWidth: 1,
              marginTop: HEIGHT_BASE_RATIO(23),
              paddingHorizontal: WIDTH_BASE_RATIO(20),
              paddingVertical: HEIGHT_BASE_RATIO(23),
            }}>
            <Text
              style={{
                ...FONTS.TTLarge_24_Black,
                fontFamily: FontFamily.SemiBold,
                fontSize: FONT_SIZE(20),
              }}>
              Public Feedback
            </Text>
            <Text
              style={{
                ...FONTS.TTNormal_14_Black,
                fontFamily: FontFamily.Medium,
                color: COLORS.ParagrapghText,
                marginTop: HEIGHT_BASE_RATIO(10),
              }}>
              This will be shared Publicly and will appear on client profile.
            </Text>
            <Text
              style={{
                ...FONTS.TTMedium_16_Black,
                fontFamily: FontFamily.SemiBold,
                color: COLORS.PRIMARY,
                marginTop: HEIGHT_BASE_RATIO(20),
              }}>
              Feedback to client
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: HEIGHT_BASE_RATIO(10),
              }}>
              <SVGS.RatingStars />
              <Text
                style={{
                  ...FONTS.TTNormal_14_Black,
                  color: COLORS.ParagrapghText,
                  marginLeft: WIDTH_BASE_RATIO(8),
                }}>
                Skills
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: HEIGHT_BASE_RATIO(10),
              }}>
              <SVGS.RatingStars />
              <Text
                style={{
                  ...FONTS.TTNormal_14_Black,
                  color: COLORS.ParagrapghText,
                  marginLeft: WIDTH_BASE_RATIO(8),
                }}>
                Availability
              </Text>
            </View>
            <Text
              style={{
                ...FONTS.TTLarge_24_Black,
                fontFamily: FontFamily.SemiBold,
                fontSize: FONT_SIZE(20),
                marginTop: HEIGHT_BASE_RATIO(20),
              }}>
              Total Score 5.0
            </Text>
            <Text
              style={{
                ...FONTS.TTNormal_14_Black,
                fontFamily: FontFamily.Medium,
                color: COLORS.ParagrapghText,
                marginTop: HEIGHT_BASE_RATIO(10),
              }}>
              This will be shared Publicly and will appear on client profile.
            </Text>
            <CustomInputTitle
              placeholder={''}
              returnKeyType={'send'}
              borderColor={COLORS.BORDER}
              placeholderColor={COLORS.GRAY_3}
              width={WIDTH_BASE_RATIO(310)}
              height={HEIGHT_BASE_RATIO(154)}
              noIcon={true}
              multiline={true}
              numberOfLines={4}
              borderRadius={6}
              borderWidth={1.5}
              marginTop={HEIGHT_BASE_RATIO(15)}
            />
            <CustomButton
              backgroundColor={COLORS.PRIMARY}
              width={WIDTH_BASE_RATIO(310)}
              height={HEIGHT_BASE_RATIO(48)}
              borderRadius={6}
              boderColor={COLORS.PRIMARY}
              marginTop={HEIGHT_BASE_RATIO(20)}
              text={'End Contract'}
              textStyle={{
                ...FONTS.ButtonText,
                color: COLORS.WHITE,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default EndContract;
