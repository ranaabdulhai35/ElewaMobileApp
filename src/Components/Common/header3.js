import {View, Text, StatusBar, Pressable} from 'react-native';
import React from 'react';
import {GeneralStyles} from '../Global/generalStyles';
import * as SVGS from '../../Ui/Assets/Svgs/index';
import {COLORS} from '../Constants';
import {useNavigation} from '@react-navigation/native';
import {FONTS} from '../../BusinessLogics/Constants';
import {FONT_SIZE} from '../../BusinessLogics/Utils/helpers';
import { HEIGHT_BASE_RATIO, WIDTH_BASE_RATIO } from '../Utils/helpers';

const Header3 = ({Color, paddingHorizontal, Arrow, secondIcon, Screen}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: WIDTH_BASE_RATIO(20),
        backgroundColor: Color,
        height:HEIGHT_BASE_RATIO(80)
      }}>
      <StatusBar backgroundColor={Color} translucent={true} />
      <View
        style={{
          ...GeneralStyles.Header,
        }}>
        <View style={GeneralStyles.imageContainer1}>
          <Pressable
            style={{backgroundColor: Color}}
            onPress={() => {
              navigation.goBack();
            }}>
            {Arrow}
          </Pressable>
          <Pressable
            style={{backgroundColor: Color}}
            onPress={() => {
              // navigation.goBack();
            }}>
            {secondIcon}
          </Pressable>
          <Text style={{...FONTS.Heading, fontSize: FONT_SIZE(25)}}>
            {Screen}
          </Text>
        </View>
        <Pressable style={{backgroundColor: Color}}>
          <SVGS.SearchIcon />
        </Pressable>
      </View>
    </View>
  );
};

export default Header3;
