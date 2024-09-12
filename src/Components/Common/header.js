import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  StatusBar,
  Pressable,
  noIcon,
} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES} from '../../BusinessLogics/Constants';
import * as ICONS from '../../Ui/Assets/Icons/index';
import * as SVGS from '../../Ui/Assets/Svgs/index';
import {
  HEIGHT_BASE_RATIO,
  WIDTH_BASE_RATIO,
  wp,
  FONT_SIZE,
  hp,
} from '../../BusinessLogics/Utils/helpers';
import {Tile} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
const Header = ({
  backgroundColor,
  rightIcon,
  leftIcon,
  middleIcon,
  onPressLeftIcon,
  onPressMiddleIcon,
  onPressRightIcon,
  style,
}) => {
  const Navigation = useNavigation();
  return (
    <View style={{backgroundColor: backgroundColor}}>
      <StatusBar
        translucent={true}
        backgroundColor={backgroundColor ? backgroundColor : 'white'}
        barStyle={'dark-content'}
      />
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: HEIGHT_BASE_RATIO(25),
          backgroundColor: backgroundColor,
          ...style,
        }}>
        <Pressable onPress={onPressLeftIcon}>{leftIcon}</Pressable>
        <Pressable onPress={onPressMiddleIcon}>{middleIcon}</Pressable>
        <Pressable onPress={onPressRightIcon}>{rightIcon}</Pressable>
      </View>
    </View>
  );
};

export default Header;
