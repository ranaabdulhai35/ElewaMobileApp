import {View, Text, StatusBar, Pressable} from 'react-native';
import React from 'react';
import {GeneralStyles} from '../Global/generalStyles';
import * as SVGS from '../../Ui/Assets/Svgs/index';
import {COLORS} from '../Constants';
import {useNavigation} from '@react-navigation/native';

const Header2 = ({Color, paddingHorizontal, Arrow}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: paddingHorizontal,
        backgroundColor: Color,
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
        </View>
        <View style={GeneralStyles.imageContainer2}></View>
      </View>
    </View>
  );
};

export default Header2;
