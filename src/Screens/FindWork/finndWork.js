import {View, Text, Pressable, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../BusinessLogics/Constants';
import * as SVGS from '../../Ui/Assets/Svgs';
import {
  HEIGHT_BASE_RATIO,
  WIDTH_BASE_RATIO,
} from '../../BusinessLogics/Utils/helpers';
import Header from '../../Components/Common/header';
import CustomInputTitle from '../../Components/Common/customInputTitle';
import {GeneralStyles} from '../../Components/Global/generalStyles';
import FilterButton from './categories';
import Filter from './filter';
import JobCard from './jobCard';
import {useNavigation} from '@react-navigation/native';

const FinndWork = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [submitText, setSubmitText] = useState(false);
  const filterData = [
    {
      id: '1',
      name: 'Categories',
      selectedColor: COLORS.PRIMARY,
      defaultColor: COLORS.WHITE,
    },
    {
      id: '2',
      name: 'Date Posted',
      selectedColor: COLORS.PRIMARY,
      defaultColor: COLORS.WHITE,
    },
    {
      id: '3',
      name: 'Miles',
      selectedColor: COLORS.PRIMARY,
      defaultColor: COLORS.WHITE,
    },
    {
      id: '4',
      name: 'Gender',
      selectedColor: COLORS.PRIMARY,
      defaultColor: COLORS.WHITE,
    },
    {
      id: '5',
      name: 'Location',
      selectedColor: COLORS.PRIMARY,
      defaultColor: COLORS.WHITE,
    },
    {
      id: '6',
      name: 'Job Type',
      selectedColor: COLORS.PRIMARY,
      defaultColor: COLORS.WHITE,
    },
    {
      id: '7',
      name: 'Crew',
      selectedColor: COLORS.PRIMARY,
      defaultColor: COLORS.WHITE,
    },
  ];
  const posts = [1, 2, 3, 4];

  return (
    <>
      <View style={[GeneralStyles.container, GeneralStyles.generalPadding]}>
        <ScrollView scrollEnabled={true}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: HEIGHT_BASE_RATIO(25),
            }}>
            <CustomInputTitle
              SVG={SVGS.SearchIcon}
              placeholder={'Design and Digital Marketing Specialist'}
              height={HEIGHT_BASE_RATIO(48)}
              returnKeyType={'done'}
              borderColor={COLORS.BORDER}
              placeholderColor={COLORS.GRAY_3}
              width={WIDTH_BASE_RATIO(350)}
              borderRadius={36}
              borderWidth={1.5}
              onChangeText={text => {
                setSearchText(text);
                setSubmitText(false);
              }}
              onSubmitEditing={() => {
                setSubmitText(true);
              }}
            />
            {/* <Pressable>
              <SVGS.filterBars />
            </Pressable> */}
          </View>
          {/* <View style={{marginTop: HEIGHT_BASE_RATIO(20)}}>
            <FilterButton filterData={filterData} />
          </View> */}
          {/* <Filter /> */}
          <View style={{marginTop: HEIGHT_BASE_RATIO(25), flex: 1}}>
            <JobCard searchText={searchText} submitText={submitText} />
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default FinndWork;
