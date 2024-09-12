import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS} from '../../../BusinessLogics/Constants';
import {
  HEIGHT_BASE_RATIO,
  WIDTH_BASE_RATIO,
} from '../../../BusinessLogics/Utils/helpers';
import {FontFamily} from '../../../Components/Global/generalFonts';

const Tabs = ({data, handleTab, selectedTab}) => {
  return (
    <React.Fragment>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: WIDTH_BASE_RATIO(10),
          marginTop: HEIGHT_BASE_RATIO(30),
          zIndex: 99,
        }}>
        {data.map(item => {
          return (
            <View
              style={{
                alignItems: 'center',
                backgroundColor:
                  item === selectedTab ? COLORS.TXT_INPUT_BG : COLORS.WHITE,
                width: WIDTH_BASE_RATIO(80),
                height: HEIGHT_BASE_RATIO(40),
                justifyContent: 'center',
                borderRadius: 10,
              }}>
              <TouchableOpacity
                onPress={() => {
                  handleTab(item);
                }}>
                <Text
                  style={{
                    ...FONTS.TTNormal_14_Black,
                    fontFamily: FontFamily.SemiBold,
                    color: item === selectedTab ? COLORS.PRIMARY : COLORS.BLACK,
                  }}>
                  {item}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      <View
        style={{
          width: '100%',
          height: 1.5,
          backgroundColor: COLORS.BORDER,
          marginTop: 13.5,
        }}></View>
    </React.Fragment>
  );
};

export default Tabs;
