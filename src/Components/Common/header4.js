import {View, Text, StatusBar, Pressable, Image} from 'react-native';
import React from 'react';
import {GeneralStyles} from '../Global/generalStyles';
import * as SVGS from '../../Ui/Assets/Svgs/index';
import {COLORS} from '../Constants';
import {useNavigation} from '@react-navigation/native';
import {FONTS} from '../../BusinessLogics/Constants';
import {FONT_SIZE} from '../../BusinessLogics/Utils/helpers';
import {HEIGHT_BASE_RATIO, WIDTH_BASE_RATIO} from '../Utils/helpers';

const Header4 = ({Color, Arrow, Screen, image, secondIcon,name,lastSeen}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: WIDTH_BASE_RATIO(20),
        backgroundColor: Color,
        height:HEIGHT_BASE_RATIO(90)
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
          <Pressable style={{backgroundColor: Color}} onPress={() => {}}>
            <Image
              source={image}
              style={{
                width: WIDTH_BASE_RATIO(39),
                height: HEIGHT_BASE_RATIO(39),
              }}
              resizeMode='contain'
            />
          </Pressable>
          <View>
            <Text style={{...FONTS.Heading, fontSize: FONT_SIZE(20)}}>
              {name}
            </Text>
            <Text style={{...FONTS.TTSmall_12_Black,color:COLORS.GRAY_3}}>
              {lastSeen}
            </Text>
          </View>
        </View>
        <Pressable style={{backgroundColor: Color}}>{secondIcon}</Pressable>
      </View>
    </View>
  );
};

export default Header4;
