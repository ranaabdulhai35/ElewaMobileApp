import {View, Text, TouchableOpacity, TextInput, Alert} from 'react-native';
import React, {useRef, useState} from 'react';
import Header2 from '../../../../Components/Common/header2';
import {GeneralStyles} from '../../../../Components/Global/generalStyles';
import {COLORS, FONTS} from '../../../../BusinessLogics/Constants';
import * as SVGS from '../../../../Ui/Assets/Svgs/index';
import {
  HEIGHT_BASE_RATIO,
  WIDTH_BASE_RATIO,
} from '../../../../BusinessLogics/Utils/helpers';
import {FontFamily} from '../../../../Components/Global/generalFonts';
import CustomInputTitle from '../../../../Components/Common/customInputTitle';
import CustomButton from '../../../../Components/Common/customButton';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Dropdown} from 'react-native-element-dropdown';
import {styles} from './Styles/styles';
import {useDispatch, useSelector} from 'react-redux';
import httpRequest from '../../../../BusinessLogics/Requests/axios';
import {AuthSlice} from '../../../../BusinessLogics/Redux/store';

const AcademicInfo = ({route}) => {
  const navigation = useNavigation();
  const formikRef = useRef();
  const dispatch = useDispatch();
  const [pronoun, setPronoun] = useState(null);
  const [pronounError, setPronounError] = useState(false);
  const [skills, setSkills] = useState(false);
  const role = useSelector(state => state?.auth?.role);
  const token = useSelector(state => state?.auth?.token);
  const title = route?.params?.title;
  const description = route?.params?.description;
  const SenderValidationSchema = Yup.object().shape({
    education: Yup.string().required('Education is required'),
  });
  const handleButtonPress = () => {
    if (formikRef.current) {
      formikRef.current.handleSubmit();
    }
  };
  const handlePronouns = item => {
    setPronoun(item);
  };
  const pronouns = [
    {value: 'He', label: 'He'},
    {value: 'She', label: 'She'},
    {value: 'Her', label: 'Her'},
    {value: 'Him', label: 'Him'},
    {value: 'Them', label: 'Them'},
    {value: 'They', label: 'They'},
  ];
  return (
    <KeyboardAwareScrollView style={{backgroundColor: COLORS.WHITE}}>
      <View style={GeneralStyles.container}>
        <View
          style={[
            GeneralStyles.generalPadding,
            {height: HEIGHT_BASE_RATIO(600), backgroundColor: COLORS.WHITE},
          ]}>
          <Header2 Color={COLORS.WHITE} Arrow={SVGS.ArrowLeft} />
          <Text
            style={{
              ...FONTS.Heading,
              textAlign: 'center',
              marginTop: HEIGHT_BASE_RATIO(100),
            }}>
            We need just some few info from you.
          </Text>
          <Formik
            innerRef={formikRef}
            validationSchema={SenderValidationSchema}
            initialValues={{
              education: '',
            }}
            onSubmit={async (values, {setSubmitting, resetForm}) => {
              try {
                const data = JSON.stringify({
                  about: description,
                  education: values.education,
                  is_update_profile: true,
                  occupation: title,
                  pronoun: pronoun,
                  tags: skills,
                });
                console.log('data', data);
                const response = await httpRequest.put(
                  `/${role}/${role}_profile`,
                  data,
                  {
                    headers: {
                      'Content-Type': 'application/json',
                      Authorization: `${token}`,
                    },
                  },
                );
                if (response?.data?.success) {
                  console.log('login respose', response?.data?.data?.id);
                  await dispatch(AuthSlice.actions.setIsProfileCompleted(true));
                  await dispatch(AuthSlice.actions.setId(response?.data?.data?.id));
                  navigation.navigate('StackNavigator');
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
              }
            }}>
            {({handleChange, values, errors, touched}) => (
              <>
                <CustomInputTitle
                  placeholder={'Education'}
                  returnKeyType={'next'}
                  borderColor={COLORS.BORDER}
                  placeholderColor={COLORS.GRAY_3}
                  width={WIDTH_BASE_RATIO(353)}
                  height={HEIGHT_BASE_RATIO(48)}
                  noIcon={true}
                  borderRadius={6}
                  borderWidth={1.5}
                  marginTop={HEIGHT_BASE_RATIO(15)}
                  defaultValue={values.education}
                  onChangeText={handleChange('education')}
                />
                {touched.education && errors.education && (
                  <View style={GeneralStyles.errorStyle}>
                    <Text
                      style={[
                        FONTS.TTNormal_14_Black,
                        {
                          color: COLORS.RED,
                        },
                      ]}>
                      {errors.education}
                    </Text>
                  </View>
                )}
                <Dropdown
                  style={styles.dropdown}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={pronouns}
                  maxHeight={HEIGHT_BASE_RATIO(300)}
                  labelField={'label'}
                  valueField={'value'}
                  placeholder={'Pronouns'}
                  value={pronoun}
                  onChange={item => handlePronouns(item?.value)}
                />
                {pronounError && pronoun == null && (
                  <View style={GeneralStyles.errorStyle}>
                    <Text
                      style={[
                        FONTS.TTNormal_14_Black,
                        {
                          color: COLORS.RED,
                        },
                      ]}>
                      Pronoun is required
                    </Text>
                  </View>
                )}
                <CustomInputTitle
                  placeholder={'Skills'}
                  returnKeyType={'next'}
                  borderColor={COLORS.BORDER}
                  placeholderColor={COLORS.GRAY_3}
                  width={WIDTH_BASE_RATIO(353)}
                  height={HEIGHT_BASE_RATIO(48)}
                  noIcon={true}
                  borderRadius={6}
                  borderWidth={1.5}
                  marginTop={HEIGHT_BASE_RATIO(15)}
                  onChangeText={text => setSkills(text)}
                />
              </>
            )}
          </Formik>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: HEIGHT_BASE_RATIO(50),
              width: WIDTH_BASE_RATIO(353),
              paddingHorizontal: WIDTH_BASE_RATIO(24.4),
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.WHITE,
                width: WIDTH_BASE_RATIO(112),
                height: HEIGHT_BASE_RATIO(43),
                borderRadius: 6,
                borderWidth: 1,
                borderColor: COLORS.BORDER,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {
                navigation.goBack();
              }}>
              <Text
                style={{
                  ...FONTS.TTNormal_14_Black,
                  alignSelf: 'center',
                  fontFamily: FontFamily.Medium,
                  color: COLORS.GRAY_3,
                  letterSpacing: 0.25,
                }}>
                Previous
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.PRIMARY,
                width: WIDTH_BASE_RATIO(112),
                height: HEIGHT_BASE_RATIO(43),
                borderRadius: 6,
                borderWidth: 1,
                borderColor: COLORS.BORDER,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onPress={() => {
                handleButtonPress();
                pronoun == null
                  ? setPronounError(true)
                  : setPronounError(false);
              }}>
              <Text
                style={{
                  ...FONTS.TTNormal_14_Black,
                  alignSelf: 'center',
                  fontFamily: FontFamily.Medium,
                  color: COLORS.WHITE,
                  letterSpacing: 0.25,
                }}>
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              width: '50%',
              height: 10,
              backgroundColor: COLORS.BORDER,
            }}></View>
          <View
            style={{
              width: '50%',
              height: 10,
              backgroundColor: COLORS.PRIMARY,
            }}></View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default AcademicInfo;
