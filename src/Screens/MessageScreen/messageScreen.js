import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Header4 from '../../Components/Common/header4';
import {COLORS, FONTS} from '../../BusinessLogics/Constants';
import * as SVGS from '../../Ui/Assets/Svgs/index';
import * as Images from '../../Ui/Assets/Images/index';
import {GeneralStyles} from '../../Components/Global/generalStyles';
import {WIDTH_BASE_RATIO} from '../../BusinessLogics/Utils/helpers';
import {HEIGHT_BASE_RATIO} from '../../Components/Utils/helpers';
import CustomInputTitle from '../../Components/Common/customInputTitle';

const MessageScreen = () => {
  return (
    <>
      <Header4
        Color={COLORS.WHITE}
        Arrow={SVGS.ArrowLeft}
        secondIcon={SVGS.Info}
        name={'Messages'}
        lastSeen={'Last seen 24hr ago'}
        image={Images.profilePicture}
      />
      <View
        style={[
          GeneralStyles.container,
          GeneralStyles.generalPadding,
          {
            backgroundColor: COLORS.LIGHTEST_GRAY,
            paddingTop: HEIGHT_BASE_RATIO(20),
          },
        ]}>
        <View
          style={{
            flexDirection: 'row',
            width: WIDTH_BASE_RATIO(305),
            alignItems: 'baseline',
            backgroundColor: COLORS.ADD_BTN_BG,
            borderRadius: 6,
            paddingHorizontal: WIDTH_BASE_RATIO(15),
            paddingVertical: HEIGHT_BASE_RATIO(18),
          }}>
          <Text
            style={[
              GeneralStyles.Paragraph,
              {
                width: WIDTH_BASE_RATIO(218),
                textAlign: 'left',
                marginTop: 0,
                color: COLORS.BLACK,
              },
            ]}>
            Donec et augue et metus consequat lobortis. Sed arcu nisi, porttitor
            et aliquet id, imperdiet in velit. Sed et mi ut dui ac eget quam.
          </Text>
          <Text style={{...FONTS.TTSmall_12_Black}}>9:07 AM</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: WIDTH_BASE_RATIO(305),
            alignItems: 'baseline',
            backgroundColor: COLORS.PRIMARY,
            borderRadius: 6,
            paddingHorizontal: WIDTH_BASE_RATIO(15),
            paddingVertical: HEIGHT_BASE_RATIO(18),
            marginTop: HEIGHT_BASE_RATIO(20),
            marginLeft: WIDTH_BASE_RATIO(45),
          }}>
          <Text
            style={[
              GeneralStyles.Paragraph,
              {
                width: WIDTH_BASE_RATIO(218),
                textAlign: 'left',
                marginTop: 0,
                color: COLORS.WHITE,
              },
            ]}>
            Donec et augue et metus consequat lobortis. Sed arcu nisi, porttitor
            et aliquet id, imperdiet in velit. Sed et mi ut dui ac eget quam.
          </Text>
          <Text style={{...FONTS.TTSmall_12_Black, color: COLORS.WHITE}}>
            9:07 AM
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: WIDTH_BASE_RATIO(305),
            alignItems: 'baseline',
            backgroundColor: COLORS.ADD_BTN_BG,
            borderRadius: 6,
            paddingHorizontal: WIDTH_BASE_RATIO(15),
            paddingVertical: HEIGHT_BASE_RATIO(18),
            marginTop: HEIGHT_BASE_RATIO(20),
          }}>
          <Text
            style={[
              GeneralStyles.Paragraph,
              {
                width: WIDTH_BASE_RATIO(218),
                textAlign: 'left',
                marginTop: 0,
                color: COLORS.BLACK,
              },
            ]}>
            Donec et augue et metus consequat lobortis. Sed arcu nisi, porttitor
            et aliquet id, imperdiet in velit. Sed et mi ut dui ac eget quam.
          </Text>
          <Text style={{...FONTS.TTSmall_12_Black}}>9:07 AM</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: WIDTH_BASE_RATIO(305),
            alignItems: 'baseline',
            backgroundColor: COLORS.PRIMARY,
            borderRadius: 6,
            paddingHorizontal: WIDTH_BASE_RATIO(15),
            paddingVertical: HEIGHT_BASE_RATIO(18),
            marginTop: HEIGHT_BASE_RATIO(20),
            marginLeft: WIDTH_BASE_RATIO(45),
          }}>
          <Text
            style={[
              GeneralStyles.Paragraph,
              {
                width: WIDTH_BASE_RATIO(218),
                textAlign: 'left',
                marginTop: 0,
                color: COLORS.WHITE,
              },
            ]}>
            Donec et augue et metus consequat lobortis. Sed arcu nisi, porttitor
            et aliquet id, imperdiet in velit. Sed et mi ut dui ac eget quam.
          </Text>
          <Text style={{...FONTS.TTSmall_12_Black, color: COLORS.WHITE}}>
            9:07 AM
          </Text>
        </View>
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
          position: 'absolute',
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            width: WIDTH_BASE_RATIO(37.6),
            height: HEIGHT_BASE_RATIO(39),
            backgroundColor: COLORS.TXT_INPUT_BG,
            borderRadius: HEIGHT_BASE_RATIO(39) / 1.5,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: WIDTH_BASE_RATIO(10),
          }}>
          <SVGS.Add width={20} height={20} />
        </TouchableOpacity>
        <CustomInputTitle
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
          noIcon={true}
        />
      </View>
    </>
  );
};

export default MessageScreen;
