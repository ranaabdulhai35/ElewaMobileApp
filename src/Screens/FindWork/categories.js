import React, {useState} from 'react';
import {FlatList, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../BusinessLogics/Constants';
import * as SVGS from '../../Ui/Assets/Svgs';
import {FontFamily} from '../../Components/Global/generalFonts';

const FilterButton = ({filterData}) => {
  const [selected, setSelected] = useState({});

  const handlePress = id => {
    setSelected(prevSelected => ({
      ...prevSelected,
      [id]: !prevSelected[id],
    }));
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: selected[item.id]
            ? item.selectedColor
            : item.defaultColor,
          borderColor: selected[item.id] ? item.selectedColor : '#252525',
          flexDirection: 'row',
          alignItems: 'center',
        },
      ]}
      onPress={() => handlePress(item.id)}>
      <Text
        style={{
          ...FONTS.TTNormal_14_Black,
          color: selected[item.id] ? '#fff' : '#252525',
          marginRight: 5,
          fontFamily: FontFamily.Medium,
        }}>
        {item.name}
      </Text>
      {selected[item.id] ? (
        <SVGS.ArrowBottomWhite />
      ) : (
        <SVGS.ArrowBottomBlack />
      )}
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={filterData}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.list}
      numColumns={3}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight:10,
    marginTop:15
  },
});

export default FilterButton;
