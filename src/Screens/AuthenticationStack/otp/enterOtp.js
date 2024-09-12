import React, {useState, useEffect, useRef} from 'react';
import {View, Text, Button, StyleSheet, StatusBar, Alert} from 'react-native';
import OtpInputs from 'react-native-otp-inputs';
import {
  HEIGHT_BASE_RATIO,
  WIDTH_BASE_RATIO,
} from '../../../BusinessLogics/Utils/helpers';
import {COLORS, FONTS} from '../../../BusinessLogics/Constants';
import CustomButton from '../../../Components/Common/customButton';
import httpRequest from '../../../BusinessLogics/Requests/axios';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {AuthSlice} from '../../../BusinessLogics/Redux/store';
import * as SVGS from '../../../Ui/Assets/Svgs/index';
import Header2 from '../../../Components/Common/header2';
import {GeneralStyles} from '../../../Components/Global/generalStyles';
import {useNavigation} from '@react-navigation/native';

const EnterOtp = ({route}) => {
  const [timer, setTimer] = useState(300); // 5 minutes in seconds
  const [isDisabled, setIsDisabled] = useState(true);
  const intervalRef = useRef(null);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const role = useSelector(state => state?.auth?.role);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          setIsDisabled(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };
  const handleResendOtp = () => {
    setTimer(300); // Reset to 5 minutes
    setIsDisabled(true);
    startTimer();
  };
  const handleVerifyOTP = async code => {
    try {
      const data = JSON.stringify({
        otp: code,
      });
      const response = await httpRequest.post(
        `/authentication/verify_otp`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (response?.data?.success) {
        await dispatch(
          AuthSlice.actions.setToken(response?.data?.data?.access_token),
        );
        if (role === 'vendor') {
          await dispatch(AuthSlice.actions.setIsProfileCompleted(true));
          navigation.navigate('StackNavigator');
        } else {
          navigation.navigate('ProfessionInfo');
          await dispatch(AuthSlice.actions.setIsProfileCompleted(false));
          console.log('login respose', response?.data);
        }
      }
    } catch (e) {
      Alert.alert('Error', e?.response?.data?.message);
    }
  };
  const resendApi = async () => {
    try {
      const data = JSON.stringify({
        email: route?.params,
      });
      const response = await httpRequest.post(
        `/authentication/resend_otp`,
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (response?.data?.success) {
        console.log('login respose', response.data);
      }
    } catch (e) {
      if (e.response) {
        Alert.alert('Error', e?.response?.data?.message);
      }
    }
  };
  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${
      secs < 10 ? '0' : ''
    }${secs}`;
  };
  useEffect(() => {
    startTimer();
    return () => clearInterval(intervalRef.current);
  }, []);
  useEffect(() => {
    resendApi();
  }, []);

  return (
    <KeyboardAwareScrollView
      style={{backgroundColor: COLORS.WHITE, ...GeneralStyles.generalPadding}}>
      <Header2 Color={COLORS.WHITE} Arrow={SVGS.ArrowLeft} />
      <View style={styles.container}>
        <View style={{marginTop: HEIGHT_BASE_RATIO(160), alignItems: 'center'}}>
          <SVGS.mailBox />
          <Text style={[FONTS.Heading, {marginTop: HEIGHT_BASE_RATIO(20)}]}>
            Verify Email
          </Text>
          <Text style={GeneralStyles.Paragraph}>
            An Email has been sent to filmkamzi.com with a link to verify your
            account. If you have not recieved the email after a few minutes, pls
            check your spam folder
          </Text>
        </View>
        <OtpInputs
          handleChange={code => {
            if (code?.length === 6) {
              handleVerifyOTP(code);
            }
          }}
          numberOfInputs={6}
          autoFocus={true}
          cursorColor={COLORS.PRIMARY}
          style={{
            gap: WIDTH_BASE_RATIO(10),
            flexDirection: 'row',
            marginTop: HEIGHT_BASE_RATIO(40),
          }}
          keyboardType="phone-pad"
          inputStyles={{
            backgroundColor: COLORS.LIGHTEST_GRAY,
            width: WIDTH_BASE_RATIO(50),
            borderRadius: 10,
          }}
          textAlign="center"
        />
        <Text style={styles.timerText}>{formatTime(timer)}</Text>
        <CustomButton
          backgroundColor={isDisabled ? COLORS.GRAY_3 : COLORS.PRIMARY}
          width={WIDTH_BASE_RATIO(353)}
          height={HEIGHT_BASE_RATIO(48)}
          borderRadius={6}
          boderColor={isDisabled ? COLORS.GRAY_3 : COLORS.PRIMARY}
          // load={load}

          shadowStyle={{
            shadowColor: COLORS.PRIMARY,
            shadowOffset: {width: 0, height: 12},
            shadowOpacity: 0.96,
            shadowRadius: 3,
            elevation: 15,
          }}
          onPress={() => {
            if (!isDisabled) {
              handleResendOtp();
              resendApi();
            }
          }}
          text={'Resend OTP'}
          textStyle={{
            ...FONTS.ButtonText,
            color: COLORS.WHITE,
          }}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
  },
  timerText: {
    fontSize: 18,
    marginVertical: 20,
  },
});

export default EnterOtp;
