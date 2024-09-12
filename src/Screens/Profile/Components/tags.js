import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS} from '../../../BusinessLogics/Constants';
import {
  HEIGHT_BASE_RATIO,
} from '../../../BusinessLogics/Utils/helpers';
import {FontFamily} from '../../../Components/Global/generalFonts';

const Tags = ({tags}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: HEIGHT_BASE_RATIO(25),
        justifyContent: 'space-between',
      }}>
      {tags.map(item => {
        return (
          <View
            style={{
              height: HEIGHT_BASE_RATIO(32),
              paddingHorizontal: 18,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: COLORS.LIGHT_GRAY,
              borderRadius: 26,
            }}>
            <Text
              style={{
                ...FONTS.TTNormal_14_Black,
                fontFamily: FontFamily.Medium,
              }}>
              {item}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default Tags;
