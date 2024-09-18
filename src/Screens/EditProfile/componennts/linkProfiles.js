import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../style/styles';
import {
  HEIGHT_BASE_RATIO,
  WIDTH_BASE_RATIO,
} from '../../../BusinessLogics/Utils/helpers';
import {COLORS, FONTS} from '../../../BusinessLogics/Constants';
import * as SVGS from '../../../Ui/Assets/Svgs/index';
import {FontFamily} from '../../../Components/Global/generalFonts';
import {FONT_SIZE} from '../../../Components/Utils/helpers';

const LinkProfiles = ({SVG, Platform}) => {
  const [showInput, setShowInput] = useState(false);
  return (
    <View style={styles.profileContainer}>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        {SVG}
        <Text
          style={{
            ...FONTS.TTMedium_14_Black,
            marginLeft: WIDTH_BASE_RATIO(20),
          }}>
          {Platform}
        </Text>
      </View>
      {showInput && (
        <View
          style={{
            maxWidth: WIDTH_BASE_RATIO(200),
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TextInput
            style={{
              width: WIDTH_BASE_RATIO(109),
              height: HEIGHT_BASE_RATIO(32),
              borderWidth: 1,
              borderRadius: 5,
              borderColor: COLORS.BORDER,
              fontFamily: FontFamily.Medium,
              fontSize: FONT_SIZE(12),
              padding: 5,
              paddingHorizontal: WIDTH_BASE_RATIO(10),
              marginRight: WIDTH_BASE_RATIO(10),
            }}
            placeholder={'Enter Username'}
            placeholderTextColor={COLORS.GRAY_3}
          />
          <TouchableOpacity
            onPress={() => {
              setShowInput(true);
            }}
            style={{
              ...styles.linkButton,
              backgroundColor: COLORS.WHITE,
              borderColor: COLORS.WHITE,
              width: WIDTH_BASE_RATIO(44),
              marginRight: WIDTH_BASE_RATIO(10),
            }}>
            <Text style={{...FONTS.TTMedium_14_Black, color: COLORS.PRIMARY}}>
              Submit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setShowInput(false);
            }}
            style={{
              ...styles.linkButton,
              backgroundColor: COLORS.WHITE,
              borderColor: COLORS.WHITE,
              width: WIDTH_BASE_RATIO(10),
            }}>
            <Text style={{...FONTS.TTNormal_14_Black, color: COLORS.BLACK}}>
              X
            </Text>
          </TouchableOpacity>
        </View>
      )}
      {!showInput && (
        <TouchableOpacity
          onPress={() => {
            setShowInput(true);
          }}
          style={styles.linkButton}>
          <Text style={{...FONTS.TTNormal_12_Black, color: COLORS.WHITE}}>
            Link
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default LinkProfiles;
