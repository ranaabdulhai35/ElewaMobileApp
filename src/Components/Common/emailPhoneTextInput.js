import {View, Text, TextInput, StyleSheet, Image, Platform} from 'react-native';
import React, {useRef, useState} from 'react';

import {
  FONT_SIZE,
  HEIGHT_BASE_RATIO,
  WIDTH_BASE_RATIO,
  wp,
} from '../../BusinessLogics/Utils/helpers';
import {COLORS, FONTS} from '../../BusinessLogics/Constants/AppTheme/theme';
import * as ICONS from '../../Ui/Assets/Icons/index';
import PhoneInput from 'react-native-phone-number-input';

const EmailPhoneTextInput = ({
  title,
  placeholder,
  onChangeText,
  Icon,
  countryCode,
  secureEntry,
  titleIcon,
  borderColor,
  defaultValue,
  maxLength,
  password,
  value,
  SVG,
  number,
  editable,
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = text => {
    onChangeText(text);

    setInputValue(text);
  };

  const isPhoneNumber = value => {
    return Number.isInteger(parseInt(value));
  };

  // console.log(formattedValue, 'formattedValue');

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={[
            {
              marginBottom: HEIGHT_BASE_RATIO(7),
            },
            FONTS.AvenirLTStd_Black_900_14,
          ]}>
          {title}
        </Text>
        {titleIcon && (
          <Image
            style={{marginLeft: WIDTH_BASE_RATIO(10)}}
            source={titleIcon}
          />
        )}
      </View>
      {number ? (
        <View
          style={{
            width: '100%',
            height: HEIGHT_BASE_RATIO(48),
            backgroundColor: COLORS.WHITE,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <PhoneInput
            // ref={phoneInput}
            // defaultValue={value}
            defaultCode="US"
            layout="first"
            keyboardType="phone-pad"
            textInputProps={{maxLength: 10}}
            // onChangeText={handleInputChange}
            onChangeFormattedText={handleInputChange}
            defaultValue={inputValue}
            //   withDarkTheme
            // withShadow
            // autoFocus
            // countryPickerButtonStyle={{
            //   backgroundColor: COLORS.WHITE,
            //   // backgroundColor:'green',
            //   borderRadius: 8,
            // }}
            // containerStyle={styles.phoneInputContainer}
            // // textContainerStyle={styles.phoneInputTextContainer}
            // textContainerStyle={{
            //   // backgroundColor:'green',
            //   backgroundColor: COLORS.WHITE,
            //   borderRadius: 8,
            // }}
            // // textInputStyle={styles.phoneInputText}
            // textInputStyle={{
            //   // backgroundColor:'gray',
            //   fontSize: FONT_SIZE(15),
            //   // height: Platform.OS === "ios" ? 15 : 25,
            //   height: HEIGHT_BASE_RATIO(40),
            //   width: WIDTH_BASE_RATIO(30),
            //   // paddingTop:5,
            //   paddingTop: Platform.OS === 'ios' ? 1 : 5,
            //   paddingLeft: 5,
            //   fontWeight: '400',
            // }}
            // codeTextStyle={{
            //   // backgroundColor:'blue',

            //   fontSize: FONT_SIZE(15),
            //   // height: Platform.OS === "ios" ? 15 : 25,
            //   height: HEIGHT_BASE_RATIO(40),
            //   width: WIDTH_BASE_RATIO(30),
            //   paddingTop: Platform.OS === 'ios' ? 10 : 5,
            //   paddingLeft: 5,
            //   fontWeight: '400',

            //   // alignItems:'flex-end',
            //   // backgroundColor: COLORS.WHITE,
            //   // color:'black'
            // }}
            containerStyle={styles.phoneInputContainer}
            textContainerStyle={styles.phoneInputTextContainer}
            textInputStyle={[
              styles.phoneInputText,
              FONTS.AvenirLTStd_Gray_400_15,
            ]}
            codeTextStyle={[
              {
                // fontSize: FONT_SIZE(12),
                height: Platform.OS === 'ios' ? 15 : 20,
                backgroundColor: COLORS.WHITE,
                alignItems: 'center',
                marginTop: 4,
              },
              FONTS.AvenirLTStd_Gray_400_15,
            ]}
            //   countryPickerButtonStyle={{backgroundColor:'green'}}
          />
        </View>
      ) : isPhoneNumber(inputValue) ? (
        <View
          style={{
            width: '100%',
            height: HEIGHT_BASE_RATIO(48),
            backgroundColor: COLORS.WHITE,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <PhoneInput
            // ref={phoneInput}
            // defaultValue={value}
            defaultCode="US"
            layout="first"
            keyboardType="phone-pad"
            textInputProps={{maxLength: 10}}
            // onChangeText={handleInputChange}
            onChangeFormattedText={handleInputChange}
            defaultValue={inputValue}
            //   withDarkTheme
            // withShadow
            // autoFocus
            // countryPickerButtonStyle={{
            //   backgroundColor: COLORS.WHITE,
            //   // backgroundColor:'green',
            //   borderRadius: 8,
            // }}
            // containerStyle={styles.phoneInputContainer}
            // // textContainerStyle={styles.phoneInputTextContainer}
            // textContainerStyle={{
            //   // backgroundColor:'green',
            //   backgroundColor: COLORS.WHITE,
            //   borderRadius: 8,
            // }}
            // // textInputStyle={styles.phoneInputText}
            // textInputStyle={{
            //   // backgroundColor:'gray',
            //   fontSize: FONT_SIZE(15),
            //   // height: Platform.OS === "ios" ? 15 : 25,
            //   height: HEIGHT_BASE_RATIO(40),
            //   width: WIDTH_BASE_RATIO(30),
            //   // paddingTop:5,
            //   paddingTop: Platform.OS === 'ios' ? 1 : 5,
            //   paddingLeft: 5,
            //   fontWeight: '400',
            // }}
            // codeTextStyle={{
            //   // backgroundColor:'blue',

            //   fontSize: FONT_SIZE(15),
            //   // height: Platform.OS === "ios" ? 15 : 25,
            //   height: HEIGHT_BASE_RATIO(40),
            //   width: WIDTH_BASE_RATIO(30),
            //   paddingTop: Platform.OS === 'ios' ? 10 : 5,
            //   paddingLeft: 5,
            //   fontWeight: '400',

            //   // alignItems:'flex-end',
            //   // backgroundColor: COLORS.WHITE,
            //   // color:'black'
            // }}
            containerStyle={styles.phoneInputContainer}
            textContainerStyle={styles.phoneInputTextContainer}
            textInputStyle={[
              styles.phoneInputText,
              FONTS.AvenirLTStd_Gray_400_15,
            ]}
            codeTextStyle={[
              {
                // fontSize: FONT_SIZE(12),
                height: Platform.OS === 'ios' ? 15 : 20,
                backgroundColor: COLORS.WHITE,
                alignItems: 'center',
                marginTop: 4,
              },
              FONTS.AvenirLTStd_Gray_400_15,
            ]}
            //   countryPickerButtonStyle={{backgroundColor:'green'}}
          />
        </View>
      ) : (
        <View
          style={{
            width: wp(85),
            height: HEIGHT_BASE_RATIO(48),
            // alignSelf: 'center',
            borderRadius: Platform.OS === 'ios' ? 10 : 3,
            color: COLORS.BLACK,
            fontSize: FONT_SIZE(11),
            fontWeight: '300',
            paddingHorizontal: WIDTH_BASE_RATIO(10),
            borderWidth: 0.1,
            borderColor: borderColor ? borderColor : '',
            //   marginBottom: '3%',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {/* <View style={{marginRight: WIDTH_BASE_RATIO(5)}}>
            <SVG width="20" height="20" />
          </View> */}

          {countryCode && (
            <Text style={{marginHorizontal: WIDTH_BASE_RATIO(10)}}>
              {countryCode}
            </Text>
          )}

          <TextInput
            placeholder={placeholder}
            //   onChangeText={onChangeText}
            editable={editable ? false : true}
            onChangeText={handleInputChange}
            secureTextEntry={secureEntry}
            defaultValue={defaultValue}
            placeholderTextColor={COLORS.LIGHT_GRAY}
            autoCapitalize="none"
            maxLength={maxLength ? maxLength : 100}
            keyboardType={title === 'Phone Number' ? 'number-pad' : 'default'}
            value={value}
            style={[
              FONTS.AvenirLTStd_Gray_400_15,
              {
                width: password ? wp(65) : wp(75),
                color: COLORS.BLACK,
                marginLeft: 3,
              },
            ]}
          />

          {password && (
            <Image
              source={ICONS.openeye}
              style={{marginRight: WIDTH_BASE_RATIO(5)}}
            />
          )}
        </View>
      )}

      {/* <Text>Error</Text> */}
    </View>
  );
};

export default EmailPhoneTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginBottom: HEIGHT_BASE_RATIO(10),
    marginTop: HEIGHT_BASE_RATIO(5),
  },
  phoneInputContainer: {
    borderColor: '#ccc',
    borderWidth: 0.5,
    borderRadius: Platform.OS === 'ios' ? 10 : 8,
    backgroundColor: COLORS.WHITE,
    width: '100%',
    height: HEIGHT_BASE_RATIO(49),
  },
  phoneInputTextContainer: {
    backgroundColor: '#fff',
    // backgroundColor:'green',
    borderRadius: 8,

    // height:48
  },
  phoneInputText: {
    fontSize: 12,
    color: 'rgba(11, 11, 11, 0.5)',
    // textAlignVertical: 'top'
    backgroundColor: 'transparent',
    height: HEIGHT_BASE_RATIO(45),
    marginTop: 3,
  },
});
