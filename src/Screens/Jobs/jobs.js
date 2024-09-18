import {
  View,
  Text,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, FONTS} from '../../BusinessLogics/Constants';
import * as SVGS from '../../Ui/Assets/Svgs';
import {
  HEIGHT_BASE_RATIO,
  WIDTH_BASE_RATIO,
} from '../../BusinessLogics/Utils/helpers';
import Header from '../../Components/Common/header';
import CustomInputTitle from '../../Components/Common/customInputTitle';
import {GeneralStyles} from '../../Components/Global/generalStyles';
import FilterButton from '../FindWork/categories';
import Filter from '../FindWork/filter';
import JobCard, {styles} from '../FindWork/jobCard';
import Tabs from '../Profile/Components/tabs';
import {useNavigation} from '@react-navigation/native';
import {FontFamily} from '../../Components/Global/generalFonts';
import CustomButton from '../../Components/Common/customButton';
import Offers from './Components/offers';
import {useSelector} from 'react-redux';
import httpRequest from '../../BusinessLogics/Requests/axios';
const Jobs = () => {
  const navigation = useNavigation();
  const [selectedTab, steSelectedTab] = useState('Applied');
  const handleSelectedTab = data => {
    steSelectedTab(data);
  };
  const posts = [1, 2, 3, 4];
  const tabs = ['Applied', 'Invitation', 'Offers'];

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
              placeholder={'Search by keyword'}
              height={HEIGHT_BASE_RATIO(48)}
              returnKeyType={'done'}
              borderColor={COLORS.BORDER}
              placeholderColor={COLORS.GRAY_3}
              width={WIDTH_BASE_RATIO(316)}
              noIcon={true}
              borderRadius={36}
              borderWidth={1.5}
            />
            <Pressable>
              <SVGS.filterBars />
            </Pressable>
          </View>
          <Tabs
            data={tabs}
            handleTab={handleSelectedTab}
            selectedTab={selectedTab}
          />
          <View
            style={{
              marginTop: HEIGHT_BASE_RATIO(35),
              paddingBottom: HEIGHT_BASE_RATIO(20),
            }}>
            {selectedTab === 'Applied' && <JobCard />}
            {selectedTab === 'Invitation' && <JobCard />}
            {selectedTab === 'Offers' && <Offers />}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Jobs;
