import {
  View,
  Text,
  Pressable,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {COLORS, FONTS} from '../../BusinessLogics/Constants';
import * as SVGS from '../../Ui/Assets/Svgs';
import {
  FONT_SIZE,
  HEIGHT_BASE_RATIO,
  truncateText,
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
import {useSelector} from 'react-redux';
import httpRequest from '../../BusinessLogics/Requests/axios';
import {Image} from 'react-native-svg';
import FastImage from 'react-native-fast-image';
import {FlatList} from 'react-native-gesture-handler';
import {date} from 'yup';
import FavouriteAddButton from '../../Components/Common/favouriteAddButton';
const Jobs = () => {
  const navigation = useNavigation();
  const state = useSelector(state => state.auth);
  const reduxRole = state.role;
  const [profileData, setProfileData] = useState([]);
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [showGenderOptions, setShowGenderOptions] = useState(false);
  const [showRoleOptions, setShowRoleOptions] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [load, setLoad] = useState(true);
  const [Page, setPage] = useState(1);
  const [gender, setGender] = useState('male');
  const [role, setRole] = useState('crew');
  const genders = ['male', 'female', 'other'];
  const roles = ['crew', 'vendor'];

  useEffect(() => {
    getVendorCrewProfile(1);
    setPage(1);
    setProfileData([]);
    setIsLoadingMore(true);
  }, [role, gender]);

  const loadMore = () => {
    if (load === true) {
      setPage(prevPage => prevPage + 1);
      getVendorCrewProfile(Page + 1);
    }
  };

  const getVendorCrewProfile = async currentPage => {
    console.log('params', currentPage, role, gender);
    try {
      const response = await httpRequest.get(
        role === 'vendor'
          ? `/utils/public_vendor_crew_list?search=${searchText}&page=${currentPage}&limit=8&type=${role}&`
          : `/utils/public_vendor_crew_list?search=${searchText}&page=${currentPage}&limit=8&type=${role}&gender=${gender}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      );
      if (response?.status == 200) {
        console.log('crew or vendor list', response.data.data.data);
        const profileData = response.data.data.data;
        if (
          !profileData ||
          profileData.length === 0 ||
          profileData === undefined
        ) {
          setLoad(false);
          setProfileData([]);
        } else {
          setProfileData(prevJobs => [...prevJobs, ...profileData]);
        }
      }
    } catch (e) {
      if (e.response) {
        setLoad(false);
        console.log(e.response.data);
      }
    } finally {
      setIsLoadingMore(false);
    }
  };

  const renderCards = data => {
    const item = data?.item;
    return (
      <View
        style={{
          borderWidth: 1.5,
          borderColor: COLORS.PRIMARY,
          borderRadius: 10,
          paddingHorizontal: WIDTH_BASE_RATIO(20),
          paddingVertical: HEIGHT_BASE_RATIO(15),
          marginTop: HEIGHT_BASE_RATIO(10),
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
            onPress={() => {
              navigation.navigate('VendorCrewProfile', {profileData: item});
            }}>
            {item?.profile_picture?.cdn_link ? (
              <FastImage
                source={{
                  uri: item?.profile_picture?.cdn_link,
                }}
                style={{
                  width: WIDTH_BASE_RATIO(60),
                  height: HEIGHT_BASE_RATIO(65),
                  borderRadius: 50,
                  marginRight: WIDTH_BASE_RATIO(2.5),
                }}
                resizeMode="cover"
              />
            ) : (
              <SVGS.Profile />
            )}
            <View
              style={{
                justifyContent: 'space-between',
                marginLeft: WIDTH_BASE_RATIO(12),
              }}>
              <Text
                style={{
                  ...FONTS.TTMedium_16_Black,
                  fontFamily: FontFamily.SemiBold,
                  color: COLORS.BLACK,
                  letterSpacing: 0.09,
                }}>
                {/* {jobDetails?.vendor?.company_name} */}
                {item?.first_name}
              </Text>
              <View
                style={[
                  styles.infoItem,
                  {marginLeft: 0, marginTop: HEIGHT_BASE_RATIO(8)},
                ]}>
                <SVGS.PostLocation />
                <Text style={[styles.infoText]}>
                  {/* {jobDetails?.city}, {jobDetails?.country} */}
                  {truncateText(item?.country, 10) +
                    ',' +
                    truncateText(item?.city, 10)}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          {/* <CustomButton
            backgroundColor={COLORS.PRIMARY}
            width={WIDTH_BASE_RATIO(107)}
            height={HEIGHT_BASE_RATIO(34.28)}
            borderRadius={6}
            boderColor={COLORS.PRIMARY}
            shadowStyle={{
              shadowColor: COLORS.LIGHT_GRAY,
              shadowOffset: {width: 0, height: 12},
              shadowOpacity: 0.96,
              shadowRadius: 3,
              elevation: 15,
            }}
            display={reduxRole === 'crew' ? 'none' : 'flex'}
            //   onPress={() => {
            //     navigation.navigate('ProfessionInfo');
            //   }}
            text={'Message'}
            textStyle={{
              ...FONTS.ButtonText,
              color: COLORS.WHITE,
              fontSize: FONT_SIZE(12),
            }}
          /> */}
          <FavouriteAddButton
            id={item?.id}
            type={'user'}
            isFavourite={item?.is_favourite}
          />
        </View>
        <View
          style={{
            marginTop: HEIGHT_BASE_RATIO(15),
            height: HEIGHT_BASE_RATIO(30),
            backgroundColor: COLORS.LIGHT_GRAY,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: WIDTH_BASE_RATIO(190),
          }}>
          <Text
            style={{
              ...FONTS.TTMedium_14_Black,
              color: COLORS.ParagrapghText,
              letterSpacing: 0.05,
            }}>
            {/* {jobDetails?.description} */}
            {item?.occupation}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <>
      <View style={[GeneralStyles.container, GeneralStyles.generalPadding]}>
        <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false}>
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
              onChangeText={text => {
                setSearchText(text);
              }}
              onSubmitEditing={() => {
                setProfileData([]);
                setIsLoadingMore(true);
                getVendorCrewProfile(1);
              }}
            />
            <Pressable
              onPress={() => {
                setShowFilterOptions(!showFilterOptions);
              }}>
              <SVGS.filterBars />
            </Pressable>
          </View>

          {showFilterOptions && (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: HEIGHT_BASE_RATIO(10),
              }}>
              <View>
                <TouchableOpacity
                  style={{
                    width: WIDTH_BASE_RATIO(90),
                    height: HEIGHT_BASE_RATIO(40),
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: COLORS.PRIMARY,
                    borderRadius: 20,
                    display: role === 'vendor' ? 'none' : 'flex',
                  }}
                  onPress={() => {
                    setShowGenderOptions(!showGenderOptions);
                    setShowRoleOptions(false);
                  }}>
                  <Text
                    style={{
                      ...FONTS.TTMedium_14_Black,
                      color: COLORS.WHITE,
                      marginRight: WIDTH_BASE_RATIO(5),
                    }}>
                    {gender}
                  </Text>
                  <SVGS.ArrowBottomWhite />
                </TouchableOpacity>
                {showGenderOptions && (
                  <View
                    style={{
                      width: WIDTH_BASE_RATIO(90),
                      height: HEIGHT_BASE_RATIO(120),
                      backgroundColor: COLORS.CARD_BG,
                      position: 'absolute',
                      borderRadius: 10,
                      zIndex: 1,
                      top: HEIGHT_BASE_RATIO(40),
                      left: WIDTH_BASE_RATIO(30),
                      shadowColor: COLORS.PRIMARY,
                      shadowOffset: {width: 0, height: 12},
                      shadowOpacity: 0.36,
                      shadowRadius: 3,
                      elevation: 15,
                      padding: 20,
                    }}>
                    {genders.map(item => {
                      return (
                        <Pressable
                          style={{marginTop: HEIGHT_BASE_RATIO(5)}}
                          onPress={() => {
                            setGender(item);
                            setShowGenderOptions(false);
                          }}>
                          <Text
                            style={{
                              ...FONTS.TTNormal_14_Black,
                              color:
                                item === gender ? COLORS.PRIMARY : COLORS.BLACK,
                            }}>
                            {item}
                          </Text>
                        </Pressable>
                      );
                    })}
                  </View>
                )}
              </View>
              <View>
                <TouchableOpacity
                  style={{
                    width: WIDTH_BASE_RATIO(90),
                    height: HEIGHT_BASE_RATIO(40),
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: COLORS.PRIMARY,
                    borderRadius: 20,
                    marginLeft: WIDTH_BASE_RATIO(10),
                  }}
                  onPress={() => {
                    setShowRoleOptions(!showRoleOptions);
                    setShowGenderOptions(false);
                  }}>
                  <Text
                    style={{
                      ...FONTS.TTMedium_14_Black,
                      color: COLORS.WHITE,
                      marginRight: WIDTH_BASE_RATIO(5),
                    }}>
                    {role}
                  </Text>
                  <SVGS.ArrowBottomWhite />
                </TouchableOpacity>
                {showRoleOptions && (
                  <View
                    style={{
                      width: WIDTH_BASE_RATIO(90),
                      height: HEIGHT_BASE_RATIO(120),
                      backgroundColor: COLORS.CARD_BG,
                      position: 'absolute',
                      borderRadius: 10,
                      zIndex: 1,
                      top: HEIGHT_BASE_RATIO(40),
                      left: WIDTH_BASE_RATIO(30),
                      shadowColor: COLORS.PRIMARY,
                      shadowOffset: {width: 0, height: 12},
                      shadowOpacity: 0.36,
                      shadowRadius: 3,
                      elevation: 15,
                      padding: 20,
                    }}>
                    {roles.map(item => {
                      return (
                        <Pressable
                          style={{marginTop: HEIGHT_BASE_RATIO(5)}}
                          onPress={() => {
                            setRole(item);
                            setShowRoleOptions(false);
                          }}>
                          <Text
                            style={{
                              ...FONTS.TTNormal_14_Black,
                              color:
                                item === role ? COLORS.PRIMARY : COLORS.BLACK,
                            }}>
                            {item}
                          </Text>
                        </Pressable>
                      );
                    })}
                  </View>
                )}
              </View>
            </View>
          )}

          <View
            style={{
              marginTop: HEIGHT_BASE_RATIO(25),
              paddingBottom: HEIGHT_BASE_RATIO(20),
            }}>
            {profileData.length === 0 && !isLoadingMore && (
              <View style={styles.viewPosition1}>
                <Text
                  style={{
                    ...FONTS.TTMedium_18_Black,
                    fontFamily: FontFamily.Bold,
                  }}>
                  No Profiles Found
                </Text>
              </View>
            )}
            {isLoadingMore ? (
              <View style={styles.viewPosition1}>
                <ActivityIndicator size={'small'} />
              </View>
            ) : (
              <View style={{flex: 1}}>
                <FlatList
                  data={profileData}
                  renderItem={renderCards}
                  keyExtractor={item => item.id.toString()}
                  onEndReached={loadMore}
                  onEndReachedThreshold={0.5}
                  ListFooterComponent={
                    load && <ActivityIndicator size="medium" color="#000000" />
                  }
                />
              </View>
            )}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Jobs;
