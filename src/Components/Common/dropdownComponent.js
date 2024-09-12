import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {FONT_SIZE, HEIGHT_BASE_RATIO, WIDTH_BASE_RATIO} from '../Utils/helpers';
import {COLORS} from '../Constants';
import {FontFamily} from '../Global/generalFonts';

const DropdownComponent = ({
  data,
  handleState,
  handleValue,
  value,
  placeholder,
}) => {
  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      search
      maxHeight={HEIGHT_BASE_RATIO(300)}
      labelField="label"
      valueField="value"
      placeholder={placeholder}
      searchPlaceholder="Search..."
      value={value}
      onChange={item => {
        handleState ? handleState(item.value) : console.log('nothing');
        handleValue(item);
      }}
    />
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    width: WIDTH_BASE_RATIO(353),
    height: HEIGHT_BASE_RATIO(48),
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: '#CDCDCD',
    justifyContent: 'center',
    marginTop: HEIGHT_BASE_RATIO(15),
    paddingHorizontal: 20,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: FONT_SIZE(14),
    fontFamily: FontFamily.Medium,
    color: COLORS.GRAY_3,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
