import {View, Text, Image} from 'react-native';
import React from 'react';
import {GeneralStyles} from '../../../Components/Global/generalStyles';
import {COLORS, FONTS} from '../../../BusinessLogics/Constants';
import * as SVGS from '../../../Ui/Assets/Svgs/index';
import * as Images from '../../../Ui/Assets/Images/index';
import {
  FONT_SIZE,
  HEIGHT_BASE_RATIO,
  simpleTruncateText,
  truncateText,
  WIDTH_BASE_RATIO,
} from '../../../BusinessLogics/Utils/helpers';
import Header from '../../../Components/Common/header';
import {styles} from '../Styles/styles';
import {FontFamily} from '../../../Components/Global/generalFonts';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../../Components/Common/customButton';

const UserCard = ({data}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.userInfoCard}>
      <View
        style={{
          marginTop: HEIGHT_BASE_RATIO(10),
          flexDirection: 'row',
          height: HEIGHT_BASE_RATIO(76),
        }}>
        {data?.profile_picture ? (
          <Image
            source={Images.profilePicture}
            style={{
              width: WIDTH_BASE_RATIO(71),
              height: HEIGHT_BASE_RATIO(76),
            }}
          />
        ) : (
          <View
            style={{
              width: WIDTH_BASE_RATIO(71),
              height: HEIGHT_BASE_RATIO(76),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <SVGS.Profile />
          </View>
        )}
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
              {simpleTruncateText(
                data?.first_name + ' ' + truncateText(data?.last_name),
                12,
              )}
            </Text>
            <SVGS.Verify />
          </View>
          <Text
            style={{
              ...FONTS.TTNormal_14_Black,
              fontFamily: FontFamily.Medium,
              color: COLORS.GRAY_3,
            }}>
            {data?.occupation ? data?.occupation : 'None'}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <SVGS.Location />
            <Text style={{...FONTS.TTNormal_14_Black, marginLeft: 5}}>
              {simpleTruncateText(data?.country + ', ' + data?.city, 22)}
            </Text>
          </View>
        </View>
      </View>
      {/* <View style={{flexDirection: 'row'}}>
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
      </View> */}
      <CustomButton
        backgroundColor={COLORS.PRIMARY}
        width={WIDTH_BASE_RATIO(85)}
        height={HEIGHT_BASE_RATIO(38)}
        borderRadius={6}
        boderColor={COLORS.PRIMARY}
        shadowStyle={{
          shadowColor: COLORS.PRIMARY,
          shadowOffset: {width: 0, height: 12},
          shadowOpacity: 0.96,
          shadowRadius: 3,
          elevation: 15,
        }}
        onPress={() => {
          navigation.navigate('EditProfile');
        }}
        text={'Edit Profile'}
        textStyle={{
          ...FONTS.TTNormal_12_Black,
          color: COLORS.WHITE,
          fontFamily: FontFamily.SemiBold,
        }}
      />
    </View>
  );
};

export default UserCard;
