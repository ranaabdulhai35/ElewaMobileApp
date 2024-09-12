import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {
  FONT_SIZE,
  HEIGHT_BASE_RATIO,
  WIDTH_BASE_RATIO,
  wp,
} from '../../BusinessLogics/Utils/helpers';
import {COLORS, FONTS} from '../../BusinessLogics/Constants';
import * as ICONS from '../../Ui/Assets/Icons/index';

const CustomInputTitle = ({
  title,
  placeholder,
  onPressSVG,
  onChangeText,
  countryCode,
  Correct,
  secureEntry,
  titleIcon,
  borderWidth,
  password,
  isEye,
  borderColor,
  defaultValue,
  maxLength,
  height,
  noIcon,
  width,
  value,
  email,
  SVG,
  multiline,
  start,
  placeholderColor,
  backgroundColor,
  borderRadius,
  marginTop,
  TextInputHeight,
  autoFocus,
  mode,
  returnKeyLabel,
  returnKeyType,
  onEnter,
  reference,
  paddingTop,
  numberOfLines,
  SVGright,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <View style={[styles.container, {marginTop: marginTop}]}>
      {title && (
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
              resizeMode="contain"
              style={{
                marginLeft: WIDTH_BASE_RATIO(10),
              }}
              source={titleIcon}
            />
          )}
        </View>
      )}
      <View
        style={{
          width: width ? width : wp(85),
          height: height ? height : HEIGHT_BASE_RATIO(58),
          // alignSelf: 'center',
          borderRadius: borderRadius ? borderRadius : 2,
          color: COLORS.BLACK,
          fontSize: FONT_SIZE(11),
          fontWeight: '300',
          paddingHorizontal: WIDTH_BASE_RATIO(10),
          borderWidth: borderWidth ? borderWidth : 0.1,
          borderColor: borderColor ? borderColor : '',
          //   marginBottom: '3%',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: backgroundColor ? backgroundColor : COLORS.WHITE,
          paddingTop: paddingTop,
        }}>
        {noIcon ? null : SVG ? (
          <View
            style={{
              paddingBottom: start ? 43 : 0,
            }}>
            <SVG width="20" height="20" />
          </View>
        ) : (
          <Image
            resizeMode="contain"
            // source={Icon}
            style={{
              width: email ? WIDTH_BASE_RATIO(22) : WIDTH_BASE_RATIO(20),
              height: email ? HEIGHT_BASE_RATIO(16) : HEIGHT_BASE_RATIO(21),
              marginRight: WIDTH_BASE_RATIO(5),
            }}
          />
        )}

        {countryCode && (
          <Text
            style={
              ({
                marginHorizontal: WIDTH_BASE_RATIO(10),
              },
              FONTS.AvenirLTStd_Black_400_15)
            }>
            {countryCode}
          </Text>
        )}

        <TextInput
          placeholder={placeholder}
          ref={reference}
          placeholderTextColor={
            placeholderColor ? placeholderColor : COLORS.BLACK
          }
          autoFocus={autoFocus}
          inputMode={mode}
          returnKeyLabel={returnKeyLabel}
          returnKeyType={returnKeyType ? returnKeyType : 'done'}
          onSubmitEditing={onEnter}
          multiline={multiline}
          numberOfLines={numberOfLines ? numberOfLines : 3}
          onChangeText={onChangeText}
          color={COLORS.LIGHT_GRAY}
          defaultValue={defaultValue}
          autoCapitalize="none"
          maxLength={maxLength ? maxLength : null}
          value={value}
          secureTextEntry={secureEntry && !isPasswordVisible}
          style={[
            {
              width: secureEntry && noIcon ? wp(70) : wp(65),
              marginLeft: WIDTH_BASE_RATIO(5),
              // marginTop: start ? '-12%' : null,
              height: TextInputHeight,
            },
            FONTS.InputFieldText,
          ]}
        />
        {Correct && (
          <Image
            resizeMode="contain"
            source={ICONS.openeye}
            style={{
              marginRight: WIDTH_BASE_RATIO(15),
              width: WIDTH_BASE_RATIO(25),
              height: HEIGHT_BASE_RATIO(25),
            }}
          />
        )}
        {SVGright ? (
          <Pressable
            style={{
              width: WIDTH_BASE_RATIO(25),
              height: HEIGHT_BASE_RATIO(25),
            }}
            onPress={onPressSVG}>
            {SVGright}
          </Pressable>
        ) : null}
        {isEye ? (
          <Pressable onPress={togglePasswordVisibility}>
            <Image
              resizeMode="contain"
              source={isPasswordVisible ? ICONS.openeye : ICONS.closeeye}
              style={{
                marginRight: WIDTH_BASE_RATIO(15),
                width: WIDTH_BASE_RATIO(25),
                height: HEIGHT_BASE_RATIO(25),
              }}
            />
          </Pressable>
        ) : null}
      </View>

      {/* <Text>Error</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    // marginBottom: HEIGHT_BASE_RATIO(10),
  },
});

export default CustomInputTitle;
