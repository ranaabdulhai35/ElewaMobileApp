import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  HEIGHT_BASE_RATIO,
  WIDTH_BASE_RATIO,
} from '../../BusinessLogics/Utils/helpers';
import {COLORS, FONTS} from '../../BusinessLogics/Constants';
import {FontFamily} from '../../Components/Global/generalFonts';

const Filter = () => {
  const [selected, setSelected] = useState('Date');

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.resultText}>
        1 to 50 of 187 for "Design and Digital Marketing Specialist"
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            {backgroundColor: selected === 'Date' ? COLORS.PRIMARY : '#fff'},
          ]}
          onPress={() => setSelected('Date')}>
          <Text
            style={{
              ...FONTS.TTNormal_14_Black,
              color: selected === 'Date' ? '#fff' : '#000',
              fontFamily:
                selected === 'Date' ? FontFamily.SemiBold : FontFamily.Medium,
            }}>
            Date
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor:
                selected === 'Relevance' ? COLORS.PRIMARY : '#fff',
            },
          ]}
          onPress={() => setSelected('Relevance')}>
          <Text
            style={{
              ...FONTS.TTNormal_14_Black,
              color: selected === 'Relevance' ? '#fff' : '#000',
              fontFamily:
                selected === 'Relevance'
                  ? FontFamily.SemiBold
                  : FontFamily.Medium,
            }}>
            Relevance
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: HEIGHT_BASE_RATIO(25),
  },
  resultText: {
    ...FONTS.TTNormal_14_Black,
    width: WIDTH_BASE_RATIO(176),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: WIDTH_BASE_RATIO(165),
    height: HEIGHT_BASE_RATIO(50),
    borderWidth: 1,
    borderColor: COLORS.BORDER,
    borderRadius: 30,
    padding: 8,
  },
  button: {
    height: HEIGHT_BASE_RATIO(30),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingHorizontal: 12.5,
  },
});

export default Filter;
