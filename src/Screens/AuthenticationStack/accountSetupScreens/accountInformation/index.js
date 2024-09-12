import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  StatusBar,
} from 'react-native';
import React, {useRef} from 'react';
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
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import * as Yup from 'yup';

const ProfessionInfo = () => {
  const navigation = useNavigation();
  const formikRef = useRef();
  const SenderValidationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
  });
  const handleButtonPress = () => {
    if (formikRef.current) {
      formikRef.current.handleSubmit();
    }
  };
  return (
    <KeyboardAvoidingView
      contentContainerStyle={{backgroundColor: COLORS.WHITE}}
      style={{backgroundColor: COLORS.WHITE, flex: 1}}>
      <View style={GeneralStyles.container}>
        <StatusBar
          animated={true}
          translucent={true}
          backgroundColor={COLORS.WHITE}
        />
        <View
          style={[
            GeneralStyles.generalPadding,
            {
              height: HEIGHT_BASE_RATIO(500),
              backgroundColor: COLORS.WHITE,
              marginTop: HEIGHT_BASE_RATIO(100),
            },
          ]}>
          <Text
            style={{
              ...FONTS.Heading,
              textAlign: 'center',
              marginTop: HEIGHT_BASE_RATIO(40),
            }}>
            We need just some few info from you.
          </Text>
          <Formik
            innerRef={formikRef}
            validationSchema={SenderValidationSchema}
            initialValues={{
              title: '',
              description: '',
            }}
            onSubmit={async (values, {setSubmitting, resetForm}) => {
              navigation.navigate('AcademicInfo', {
                title: values?.title,
                description: values?.description,
              });
            }}>
            {({handleChange, values, errors, touched}) => (
              <>
                <CustomInputTitle
                  placeholder={'Professional Title'}
                  returnKeyType={'next'}
                  borderColor={COLORS.BORDER}
                  placeholderColor={COLORS.GRAY_3}
                  width={WIDTH_BASE_RATIO(353)}
                  height={HEIGHT_BASE_RATIO(48)}
                  noIcon={true}
                  borderRadius={6}
                  borderWidth={1.5}
                  marginTop={HEIGHT_BASE_RATIO(15)}
                  defaultValue={values.title}
                  onChangeText={handleChange('title')}
                />
                {touched.title && errors.title && (
                  <View style={GeneralStyles.errorStyle}>
                    <Text
                      style={[
                        FONTS.TTNormal_14_Black,
                        {
                          color: COLORS.RED,
                        },
                      ]}>
                      {errors.title}
                    </Text>
                  </View>
                )}
                <CustomInputTitle
                  placeholder={'Bio description, Tell us about yourself'}
                  returnKeyType={'next'}
                  borderColor={COLORS.BORDER}
                  placeholderColor={COLORS.GRAY_3}
                  width={WIDTH_BASE_RATIO(353)}
                  height={HEIGHT_BASE_RATIO(94)}
                  noIcon={true}
                  multiline={true}
                  numberOfLines={4}
                  borderRadius={6}
                  borderWidth={1.5}
                  marginTop={HEIGHT_BASE_RATIO(15)}
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
              backgroundColor: COLORS.PRIMARY,
            }}></View>
          <View
            style={{
              width: '50%',
              height: 10,
              backgroundColor: COLORS.BORDER,
            }}></View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ProfessionInfo;
