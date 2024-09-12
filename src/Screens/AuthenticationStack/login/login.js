import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {GeneralStyles} from '../../../Components/Global/generalStyles';
import {Formik} from 'formik';
import CustomInputTitle from '../../../Components/Common/customInputTitle';
import {COLORS, FONTS} from '../../../BusinessLogics/Constants';
import * as SVGS from '../../../Ui/Assets/Svgs/index';
import * as Yup from 'yup';
import {
  FONT_SIZE,
  HEIGHT_BASE_RATIO,
  WIDTH_BASE_RATIO,
} from '../../../BusinessLogics/Utils/helpers';
import CustomButton from '../../../Components/Common/customButton';
import {styles} from './styles/styles';
import {FontFamily} from '../../../Components/Global/generalFonts';
import {useNavigation} from '@react-navigation/native';
import {signInWithGoogle} from '../../../BusinessLogics/Redux/socialLogin';
import httpRequest from '../../../BusinessLogics/Requests/axios';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';
import {AuthSlice} from '../../../BusinessLogics/Redux/store';

const Login = () => {
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);
  const [checkError, setCheckError] = useState(false);
  const [userDetail, setUserDetail] = useState(userDetail);
  const [load, setLoad] = useState(false);
  const dispatch = useDispatch();
  const formikRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();

  const SenderValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string().required('Pin is required'),
  });
  const handleButtonPress = () => {
    if (formikRef.current) {
      formikRef.current.handleSubmit();
    }
  };
  return (
    <View style={GeneralStyles.container}>
      <StatusBar backgroundColor={COLORS.WHITE} translucent={true} />
      <KeyboardAwareScrollView>
        <View style={styles.innerContainer}>
          <Text style={FONTS.Heading}>Login</Text>
          <KeyboardAvoidingView style={{marginTop: HEIGHT_BASE_RATIO(40)}}>
            <Formik
              innerRef={formikRef}
              validationSchema={SenderValidationSchema}
              initialValues={{
                email: '',
                password: '',
              }}
              onSubmit={async (values, {setSubmitting, resetForm}) => {
                setLoad(true);
                try {
                  const data = JSON.stringify({
                    email: values.email,
                    password: values.password,
                  });
                  console.log('data in request', data);
                  const response = await httpRequest.post(
                    `/authentication/sign_in`,
                    data,
                    {
                      headers: {
                        'Content-Type': 'application/json',
                      },
                    },
                  );
                  if (response?.data?.success) {
                    await dispatch(
                      AuthSlice.actions.setToken(
                        response?.data?.data?.access_token,
                      ),
                    );
                    await dispatch(
                      AuthSlice.actions.setIsProfileCompleted(true),
                    );
                    navigation.navigate('StackNavigator'),
                      console.log('login respose', response?.data);
                  }
                } catch (e) {
                  console.log('error', e);
                  if (e.response) {
                    Alert.alert(e?.response?.data?.message?.detail);
                    console.log('e.response.data', e.response.data);
                  }
                } finally {
                  setLoad(false);
                }
              }}>
              {({handleChange, values, errors, touched}) => (
                <View>
                  <CustomInputTitle
                    reference={emailRef}
                    placeholder={'Email Address'}
                    mode={'email'}
                    returnKeyType={'next'}
                    borderColor={COLORS.BORDER}
                    placeholderColor={COLORS.GRAY_3}
                    defaultValue={values.email}
                    onChangeText={handleChange('email')}
                    width={WIDTH_BASE_RATIO(353)}
                    height={HEIGHT_BASE_RATIO(48)}
                    noIcon={true}
                    borderRadius={6}
                    borderWidth={1.5}
                    onEnter={() => {
                      passwordRef.current.focus();
                    }}
                  />
                  {touched.email && errors.email && (
                    <View style={GeneralStyles.errorStyle}>
                      {/* <SVGS.failed style={{marginRight: HEIGHT_BASE_RATIO(5)}} /> */}
                      <Text
                        style={[
                          FONTS.PoppinsNormal_14_Black,
                          {
                            color: COLORS.RED,
                          },
                        ]}>
                        {errors.email}
                      </Text>
                    </View>
                  )}
                  <CustomInputTitle
                    reference={passwordRef}
                    placeholder={'Password'}
                    height={HEIGHT_BASE_RATIO(48)}
                    returnKeyType={'done'}
                    borderColor={COLORS.BORDER}
                    placeholderColor={COLORS.GRAY_3}
                    defaultValue={values.password}
                    onChangeText={handleChange('password')}
                    width={WIDTH_BASE_RATIO(353)}
                    noIcon={true}
                    isEye={true}
                    borderRadius={6}
                    borderWidth={1.5}
                    secureEntry={true}
                    marginTop={HEIGHT_BASE_RATIO(15)}
                  />
                  {touched.password && errors.password && (
                    <View style={GeneralStyles.errorStyle}>
                      {/* <SVGS.failed style={{marginRight: HEIGHT_BASE_RATIO(5)}} /> */}
                      <Text
                        style={[
                          FONTS.PoppinsNormal_14_Black,
                          {
                            color: COLORS.RED,
                          },
                        ]}>
                        {errors.password}
                      </Text>
                    </View>
                  )}
                </View>
              )}
            </Formik>
            <CustomButton
              backgroundColor={COLORS.PRIMARY}
              width={WIDTH_BASE_RATIO(353)}
              height={HEIGHT_BASE_RATIO(48)}
              borderRadius={6}
              boderColor={COLORS.PRIMARY}
              load={load}
              shadowStyle={{
                shadowColor: COLORS.PRIMARY,
                shadowOffset: {width: 0, height: 12},
                shadowOpacity: 0.96,
                shadowRadius: 3,
                elevation: 15,
              }}
              onPress={() => {
                // navigation.navigate('ProfessionInfo');
                handleButtonPress();
              }}
              marginTop={HEIGHT_BASE_RATIO(20)}
              text={'Log In'}
              textStyle={{
                ...FONTS.ButtonText,
                color: COLORS.WHITE,
              }}
            />
            <View
              style={{
                ...styles.alignChildren,
                marginTop: HEIGHT_BASE_RATIO(30),
              }}>
              <View style={styles.line}></View>
              <Text style={FONTS.NormalText}>Or</Text>
              <View style={styles.line}></View>
            </View>
            <View
              style={{
                ...styles.alignChildren,
                marginTop: HEIGHT_BASE_RATIO(35),
              }}>
              <TouchableOpacity
                style={styles.linkButtons}
                onPress={() => signInWithGoogle()}>
                <SVGS.Google />
              </TouchableOpacity>
              <TouchableOpacity style={styles.linkButtons}>
                <SVGS.FaceBook />
              </TouchableOpacity>
            </View>
            <View
              style={{
                ...styles.line,
                width: WIDTH_BASE_RATIO(353),
                marginTop: HEIGHT_BASE_RATIO(35),
              }}
            />
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: HEIGHT_BASE_RATIO(30),
              }}>
              <Text
                style={{
                  ...FONTS.TTNormal_14_Black,
                  fontFamily: FontFamily.Medium,
                  marginBottom: HEIGHT_BASE_RATIO(20),
                }}>
                You don't have an account?
              </Text>
              <CustomButton
                backgroundColor={COLORS.WHITE}
                width={WIDTH_BASE_RATIO(353)}
                height={HEIGHT_BASE_RATIO(48)}
                borderRadius={6}
                borderWidth={1.25}
                boderColor={COLORS.PRIMARY}
                text={'Create account'}
                onPress={() => {
                  navigation.navigate('SignUp');
                }}
                textStyle={{
                  ...FONTS.ButtonText,
                  color: COLORS.PRIMARY,
                }}
              />
            </View>
          </KeyboardAvoidingView>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Login;
