import {View, Text} from 'react-native';
import React from 'react';
import {GeneralStyles} from '../../../Components/Global/generalStyles';
import * as SVGS from '../../../Ui/Assets/Svgs';
import Header2 from '../../../Components/Common/header2';
import {COLORS, FONTS} from '../../../BusinessLogics/Constants';
import {
  HEIGHT_BASE_RATIO,
  WIDTH_BASE_RATIO,
} from '../../../BusinessLogics/Utils/helpers';
import CustomButton from '../../../Components/Common/customButton';

const VerifyEmail = () => {
  return (
    <>
      <View style={[GeneralStyles.container, GeneralStyles.generalPadding]}>
        <Header2 Arrow={SVGS.ArrowLeft} Color={COLORS.WHITE} />
        <View style={{alignItems: 'center', marginTop: HEIGHT_BASE_RATIO(225)}}>
          <SVGS.mailBox />
          <Text style={[FONTS.Heading, {marginTop: HEIGHT_BASE_RATIO(20)}]}>
            Verify Email
          </Text>
          <Text style={GeneralStyles.Paragraph}>
            An Email has been sent to filmkamzi.com with a link to verify your
            account. If you have not recieved the email after a few minutes, pls
            check your spam folder
          </Text>
          <CustomButton
            backgroundColor={COLORS.WHITE}
            width={WIDTH_BASE_RATIO(353)}
            height={HEIGHT_BASE_RATIO(48)}
            borderRadius={6}
            borderWidth={1.25}
            boderColor={COLORS.PRIMARY}
            text={'Resend link'}
            marginTop={HEIGHT_BASE_RATIO(30)}
            textStyle={{
              ...FONTS.ButtonText,
              color: COLORS.PRIMARY,
            }}
          />
        </View>
      </View>
    </>
  );
};

export default VerifyEmail;
