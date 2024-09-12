import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Header2 from '../../../../Components/Common/header2';
import {GeneralStyles} from '../../../../Components/Global/generalStyles';
import {COLORS, FONTS} from '../../../../BusinessLogics/Constants';
import * as SVGS from '../../../../Ui/Assets/Svgs/index';
import {
  FONT_SIZE,
  HEIGHT_BASE_RATIO,
  WIDTH_BASE_RATIO,
} from '../../../../BusinessLogics/Utils/helpers';
import {FontFamily} from '../../../../Components/Global/generalFonts';
import CustomInputTitle from '../../../../Components/Common/customInputTitle';
// import {styles} from '../../authenticationStack/login/styles/styles';
import CustomButton from '../../../../Components/Common/customButton';
import {useNavigation} from '@react-navigation/native';
import CountryPicker from 'react-native-country-picker-modal';
import {Formik} from 'formik';
import * as Yup from 'yup';
import httpRequest from '../../../../BusinessLogics/Requests/axios';
import {Dropdown} from 'react-native-element-dropdown';
import axios from 'axios';
import DropdownComponent from '../../../../Components/Common/dropdownComponent';
import {API_KEY} from '@env';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';
import {AuthSlice} from '../../../../BusinessLogics/Redux/store';

const CompleteAccount = ({route}) => {
  const params = route?.params;
  const email = params?.email;
  const countryData = JSON.parse(params?.countryData);
  const navigation = useNavigation();
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [countries, setCountries] = useState();
  const [states, setStates] = useState();
  const [cities, setCities] = useState();
  const [selectCountryError, setselectCountryError] = useState(false);
  const [lookingTo, setLookingTo] = useState('crew');
  const formikRef = useRef();
  const [load, setLoad] = useState(false);
  const SenderValidationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    password: Yup.string()
      .required('Password is required')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/,
        'Password must contain at least one uppercase letter, one lowercase letter, and one special character',
      ),
  });
  const dispatch = useDispatch();

  const handleButtonPress = () => {
    if (formikRef.current) {
      formikRef.current.handleSubmit();
    }
  };
  const handleCountryValue = value => {
    setCountry(value);
  };
  const handleStateValue = value => {
    setState(value);
  };
  const handleCityValue = value => {
    setCity(value);
  };
  const handleState = countryCode => {
    var config = {
      method: 'get',
      url: `https://api.countrystatecity.in/v1/countries/${countryCode}/states`,
      headers: {
        'X-CSCAPI-KEY': API_KEY,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        var count = Object.keys(response.data).length;
        let stateArray = [];
        for (var i = 0; i < count; i++) {
          stateArray.push({
            value: response.data[i].iso2,
            label: response.data[i].name,
          });
        }
        setStates(stateArray);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleCity = stateCode => {
    var config = {
      method: 'get',
      url: `https://api.countrystatecity.in/v1/countries/${country?.value}/states/${stateCode}/cities`,
      headers: {
        'X-CSCAPI-KEY': API_KEY,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        var count = Object.keys(response.data).length;
        let cityArray = [];
        for (var i = 0; i < count; i++) {
          cityArray.push({
            value: response.data[i].id,
            label: response.data[i].name,
          });
        }
        setCities(cityArray);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleCountryData = () => {
    var count = Object.keys(countryData).length;
    let countryArray = [];
    for (var i = 0; i < count; i++) {
      countryArray.push({
        value: countryData[i].iso2,
        label: countryData[i].name,
      });
    }
    setCountries(countryArray);
  };
  useEffect(() => {
    handleCountryData();
  }, []);
  return (
    <KeyboardAwareScrollView>
      <View style={[GeneralStyles.container, GeneralStyles.generalPadding]}>
        <Header2 Color={COLORS.WHITE} Arrow={SVGS.ArrowLeft} />
        <Text
          style={{
            ...FONTS.Heading,
            textAlign: 'center',
            marginTop: HEIGHT_BASE_RATIO(40),
          }}>
          Complete your account set up
        </Text>
        <Text
          style={{
            ...FONTS.TTNormal_14_Black,
            alignSelf: 'center',
            fontFamily: FontFamily.Medium,
            color: COLORS.GRAY_3,
            marginTop: HEIGHT_BASE_RATIO(10),
            letterSpacing: 0.25,
          }}>
          {email}
        </Text>
        <Formik
          innerRef={formikRef}
          validationSchema={SenderValidationSchema}
          initialValues={{
            firstName: '',
            lastName: '',
            password: '',
          }}
          onSubmit={async (values, {setSubmitting, resetForm}) => {
            // navigation.navigate('CompleteAccount', {email: values.email});
            if (country && state && city) {
              setLoad(true);
              try {
                const data = JSON.stringify({
                  city: city?.label,
                  country: country?.label,
                  email: email,
                  first_name: values.firstName,
                  last_name: values.lastName,
                  password: values.password,
                  role: lookingTo,
                  state: state?.label,
                });
                const response = await httpRequest.post(
                  `/authentication/sign_up`,
                  data,
                  {
                    headers: {
                      'Content-Type': 'application/json',
                    },
                  },
                );
                if (response?.data?.success) {
                  console.log('login respose', response?.data);
                  dispatch(AuthSlice.actions.setRole(lookingTo));
                  navigation.navigate('EnterOtp', email);
                }
              } catch (e) {
                console.log('error', e);
                if (e.response) {
                  Alert.alert(
                    'error occured',
                    e?.response?.data?.message?.email,
                  );
                  console.log('e.response.data', e.response.data);
                }
              } finally {
                setLoad(false);
                resetForm();
              }
            }
          }}>
          {({handleChange, values, errors, touched}) => (
            <>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: HEIGHT_BASE_RATIO(25),
                  width: WIDTH_BASE_RATIO(353),
                }}>
                <View style={{flexDirection: 'column'}}>
                  <CustomInputTitle
                    placeholder={'First Name'}
                    returnKeyType={'next'}
                    borderColor={COLORS.BORDER}
                    placeholderColor={COLORS.GRAY_3}
                    width={WIDTH_BASE_RATIO(171.5)}
                    height={HEIGHT_BASE_RATIO(48)}
                    noIcon={true}
                    borderRadius={6}
                    borderWidth={1.5}
                    defaultValue={values.firstName}
                    onChangeText={handleChange('firstName')}
                  />
                  {touched.firstName && errors.firstName && (
                    <View style={GeneralStyles.errorStyle}>
                      <Text
                        style={[
                          FONTS.TTNormal_14_Black,
                          {
                            color: COLORS.RED,
                          },
                        ]}>
                        {errors.firstName}
                      </Text>
                    </View>
                  )}
                </View>
                <View style={{flexDirection: 'column'}}>
                  <CustomInputTitle
                    placeholder={'Last Name'}
                    returnKeyType={'next'}
                    borderColor={COLORS.BORDER}
                    placeholderColor={COLORS.GRAY_3}
                    width={WIDTH_BASE_RATIO(171.5)}
                    height={HEIGHT_BASE_RATIO(48)}
                    noIcon={true}
                    borderRadius={6}
                    borderWidth={1.5}
                    defaultValue={values.lastName}
                    onChangeText={handleChange('lastName')}
                  />
                  {touched.lastName && errors.lastName && (
                    <View style={GeneralStyles.errorStyle}>
                      <Text
                        style={[
                          FONTS.TTNormal_14_Black,
                          {
                            color: COLORS.RED,
                          },
                        ]}>
                        {errors.lastName}
                      </Text>
                    </View>
                  )}
                </View>
              </View>
              <CustomInputTitle
                placeholder={'Choose a great password'}
                returnKeyType={'next'}
                secureEntry={true}
                borderColor={COLORS.BORDER}
                placeholderColor={COLORS.GRAY_3}
                isEye={true}
                width={WIDTH_BASE_RATIO(353)}
                height={HEIGHT_BASE_RATIO(48)}
                noIcon={true}
                borderRadius={6}
                borderWidth={1.5}
                marginTop={HEIGHT_BASE_RATIO(15)}
                defaultValue={values.password}
                onChangeText={handleChange('password')}
              />
              {touched.password && errors.password && (
                <View style={GeneralStyles.errorStyle}>
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
            </>
          )}
        </Formik>
        <DropdownComponent
          data={countries}
          handleState={handleState}
          handleValue={handleCountryValue}
          value={country}
          placeholder="Select Country"
        />
        {states && (
          <DropdownComponent
            data={states}
            handleState={handleCity}
            handleValue={handleStateValue}
            value={state}
            placeholder="Select State"
          />
        )}
        {cities && (
          <DropdownComponent
            data={cities}
            // handleState={console.log('nothing')}
            handleValue={handleCityValue}
            value={city}
            placeholder="Select City"
          />
        )}

        {load && !country && (
          <View style={GeneralStyles.errorStyle}>
            <Text
              style={[
                FONTS.PoppinsNormal_14_Black,
                {
                  color: COLORS.RED,
                },
              ]}>
              Country is required.
            </Text>
          </View>
        )}
        {country && !state && (
          <View style={GeneralStyles.errorStyle}>
            <Text
              style={[
                FONTS.PoppinsNormal_14_Black,
                {
                  color: COLORS.RED,
                },
              ]}>
              State is required.
            </Text>
          </View>
        )}
        {country && state && !city && (
          <View style={GeneralStyles.errorStyle}>
            <Text
              style={[
                FONTS.PoppinsNormal_14_Black,
                {
                  color: COLORS.RED,
                },
              ]}>
              City is required.
            </Text>
          </View>
        )}
        <Text
          style={{
            ...FONTS.ButtonText,
            alignSelf: 'center',
            marginTop: HEIGHT_BASE_RATIO(25),
          }}>
          I'm looking to
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: HEIGHT_BASE_RATIO(15),
            width: WIDTH_BASE_RATIO(353),
          }}>
          <TouchableOpacity
            onPress={() => {
              setLookingTo('crew');
            }}
            style={{
              width: WIDTH_BASE_RATIO(171.5),
              height: HEIGHT_BASE_RATIO(44),
              borderRadius: 6,
              borderWidth: 1,
              borderColor:
                lookingTo === 'crew' ? COLORS.PRIMARY : COLORS.BORDER,
              backgroundColor:
                lookingTo === 'crew' ? COLORS.PRIMARY : COLORS.WHITE,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                ...FONTS.TTNormal_14_Black,
                alignSelf: 'center',
                fontFamily: FontFamily.Medium,
                color: lookingTo === 'crew' ? COLORS.WHITE : COLORS.GRAY_3,
                letterSpacing: 0.25,
              }}>
              To get hired
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setLookingTo('vendor');
            }}
            style={{
              width: WIDTH_BASE_RATIO(171.5),
              height: HEIGHT_BASE_RATIO(44),
              borderRadius: 6,
              borderWidth: 1,
              borderColor:
                lookingTo === 'vendor' ? COLORS.PRIMARY : COLORS.BORDER,
              backgroundColor:
                lookingTo === 'vendor' ? COLORS.PRIMARY : COLORS.WHITE,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                ...FONTS.TTNormal_14_Black,
                alignSelf: 'center',
                fontFamily: FontFamily.Medium,
                color: lookingTo === 'vendor' ? COLORS.WHITE : COLORS.GRAY_3,
                letterSpacing: 0.25,
              }}>
              Hire a crew
            </Text>
          </TouchableOpacity>
        </View>
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
          marginTop={HEIGHT_BASE_RATIO(25)}
          text={'Create your account'}
          textStyle={{
            ...FONTS.ButtonText,
            color: COLORS.WHITE,
          }}
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default CompleteAccount;
