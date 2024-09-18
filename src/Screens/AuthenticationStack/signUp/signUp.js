import {View, Text, TouchableOpacity, Pressable, Alert} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
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
import Header2 from '../../../Components/Common/header2';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {API_KEY} from '@env';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';
console.log(API_KEY);
const SignUp = () => {
  const navigation = useNavigation();
  const [userDetail, setUserDetail] = useState(userDetail);
  const [countryStateData, setCountryStateData] = useState(null);
  const dispatch = useDispatch();
  const formikRef = useRef();
  const emailRef = useRef();

  const SenderValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
  });
  const handleButtonPress = () => {
    if (formikRef.current) {
      formikRef.current.handleSubmit();
    }
  }; 
  const countryData = async () => {
    var config = {
      method: 'get',
      url: 'https://api.countrystatecity.in/v1/countries',
      headers: {
        'X-CSCAPI-KEY': API_KEY,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setCountryStateData(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
        Alert.alert('Error', error?.AxiosError);
      });
  };
  useEffect(() => {
    countryData();
  }, []);
  return (
    <>
      <KeyboardAwareScrollView style={{backgroundColor: COLORS.WHITE}}>
        <View style={[GeneralStyles.container, GeneralStyles.generalPadding]}>
          <Header2 Color={COLORS.WHITE} Arrow={SVGS.ArrowLeft} />
          <View style={styles.innerContainer}>
            <Text style={{...FONTS.Heading, alignSelf: 'center'}}>Sign up</Text>
            <Text style={GeneralStyles.Paragraph}>
              Create a free account on Filmkamzi to start accessing the
              production industry’s best hiring, career and marketing resources.
            </Text>
            <View style={{marginTop: HEIGHT_BASE_RATIO(40)}}>
              <View
                style={{
                  ...styles.alignChildren,
                }}>
                <TouchableOpacity style={styles.linkButtons}>
                  <SVGS.Google />
                </TouchableOpacity>
                <TouchableOpacity style={styles.linkButtons}>
                  <SVGS.FaceBook />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  ...styles.alignChildren,
                  marginTop: HEIGHT_BASE_RATIO(30),
                  marginBottom: HEIGHT_BASE_RATIO(30),
                }}>
                <View style={styles.line}></View>
                <Text style={FONTS.NormalText}>Or</Text>
                <View style={styles.line}></View>
              </View>
              <Formik
                innerRef={formikRef}
                validationSchema={SenderValidationSchema}
                initialValues={{
                  email: '',
                }}
                onSubmit={async (values, {setSubmitting, resetForm}) => {
                  if (countryStateData) {
                    navigation.navigate('CompleteAccount', {
                      email: values.email,
                      countryData: countryStateData,
                    });
                  } else {
                    Alert.alert(
                      'Error',
                      'Please check your internet connection',
                    );
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
                      onChangeText={text =>
                        handleChange('email')(text.replace('/s/g', ''))
                      }
                      width={WIDTH_BASE_RATIO(353)}
                      height={HEIGHT_BASE_RATIO(48)}
                      noIcon={true}
                      borderRadius={6}
                      borderWidth={1.5}
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
                  </View>
                )}
              </Formik>
              <CustomButton
                backgroundColor={COLORS.PRIMARY}
                width={WIDTH_BASE_RATIO(353)}
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
                onPress={() => {
                  handleButtonPress();
                }}
                marginTop={HEIGHT_BASE_RATIO(20)}
                text={'Create your account'}
                textStyle={{
                  ...FONTS.ButtonText,
                  color: COLORS.WHITE,
                }}
              />

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: HEIGHT_BASE_RATIO(30),
                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    ...FONTS.TTNormal_14_Black,
                    fontFamily: FontFamily.Medium,
                  }}>
                  Already have an account?
                </Text>
                <Pressable
                  onPress={() => {
                    navigation.navigate('Login');
                  }}>
                  <Text
                    style={{
                      ...FONTS.TTNormal_14_Black,
                      fontFamily: FontFamily.Bold,
                      color: COLORS.PRIMARY,
                      marginLeft: 5,
                    }}>
                    Log In
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

export default SignUp;
