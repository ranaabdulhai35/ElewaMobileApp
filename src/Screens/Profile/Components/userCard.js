import {View, Text, Image} from 'react-native';
import React from 'react';
import {GeneralStyles} from '../../../Components/Global/generalStyles';
import {COLORS, FONTS} from '../../../BusinessLogics/Constants';
import * as SVGS from '../../../Ui/Assets/Svgs/index';
import * as Images from '../../../Ui/Assets/Images/index';
import {
  FONT_SIZE,
  HEIGHT_BASE_RATIO,
  WIDTH_BASE_RATIO,
} from '../../../BusinessLogics/Utils/helpers';
import Header from '../../../Components/Common/header';
import {styles} from '../Styles/styles';
import {FontFamily} from '../../../Components/Global/generalFonts';

const UserCard = () => {
  return (
    <View style={styles.userInfoCard}>
      <View
        style={{
          marginTop: HEIGHT_BASE_RATIO(10),
          flexDirection: 'row',
          height: HEIGHT_BASE_RATIO(76),
        }}>
        <Image
          source={Images.profilePicture}
          style={{
            width: WIDTH_BASE_RATIO(71),
            height: HEIGHT_BASE_RATIO(76),
          }}
        />
        <View
          style={{
            marginLeft: WIDTH_BASE_RATIO(15),
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                ...FONTS.Heading,
                marginRight: 6,
                fontSize: FONT_SIZE(20),
              }}>
              Julian Su
            </Text>
            <SVGS.Verify />
          </View>
          <Text
            style={{
              ...FONTS.TTNormal_14_Black,
              fontFamily: FontFamily.Medium,
              color: COLORS.GRAY_3,
            }}>
            Animation Voice actress
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <SVGS.Location />
            <Text style={{...FONTS.TTNormal_14_Black, marginLeft: 5}}>
              Clermont, FL
            </Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.linkButton}>
          <SVGS.Link />
        </View>
        <View
          style={{
            width: WIDTH_BASE_RATIO(50.5),
            height: HEIGHT_BASE_RATIO(27),
            backgroundColor: COLORS.WHITE,
            borderRadius: 20,
            marginLeft: WIDTH_BASE_RATIO(6.5),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 9,
          }}>
          <Text style={{...FONTS.TTSmall_12_Black}}>4.3</Text>
          <SVGS.Star />
        </View>
      </View>
    </View>
  );
};

export default UserCard;
