import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS} from '../../BusinessLogics/Constants';
import * as SVGS from '../../Ui/Assets/Svgs';
import {
  FONT_SIZE,
  HEIGHT_BASE_RATIO,
  WIDTH_BASE_RATIO,
} from '../../BusinessLogics/Utils/helpers';
import {useNavigation} from '@react-navigation/native';
import Header from '../../Components/Common/header';
import {GeneralStyles} from '../../Components/Global/generalStyles';
import CustomInputTitle from '../../Components/Common/customInputTitle';
import Tabs from '../Profile/Components/tabs';
import {FontFamily} from '../../Components/Global/generalFonts';
import Offers from '../Jobs/Components/offers';
import {styles} from '../FindWork/jobCard';
import CustomButton from '../../Components/Common/customButton';

const AllContracts = () => {
  const navigation = useNavigation();
  const tabs = ['In Progress', 'Completed'];
  const [selectedTab, steSelectedTab] = useState('In Progress');
  const data = [1, 2, 3, 4, 5];

  return (
    <>
      <Header
        backgroundColor={COLORS.WHITE}
        leftIcon={SVGS.ArrowLeft}
        rightIcon={SVGS.Message}
        middleIcon={SVGS.Elewa}
        style={{
          marginTop: HEIGHT_BASE_RATIO(40),
          marginBottom: HEIGHT_BASE_RATIO(15),
        }}
        onPressLeftIcon={() => {
          navigation.goBack();
        }}
        onPressRightIcon={() => {
          navigation.navigate('Messages');
        }}
        onPressMiddleIcon={() => {
          navigation.navigate('Home');
        }}
      />
      <View style={[GeneralStyles.container, GeneralStyles.generalPadding]}>
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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: WIDTH_BASE_RATIO(40),
            marginTop: HEIGHT_BASE_RATIO(30),
            zIndex: 99,
          }}>
          {tabs.map(item => {
            return (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    steSelectedTab(item);
                  }}>
                  <Text
                    style={{
                      ...FONTS.TTNormal_14_Black,
                      fontFamily: FontFamily.SemiBold,
                    }}>
                    {item}
                  </Text>
                </TouchableOpacity>
                <View
                  style={{
                    width: WIDTH_BASE_RATIO(80),
                    height: 1.5,
                    backgroundColor:
                      item === selectedTab ? COLORS.BLACK : COLORS.BORDER,
                    position: 'absolute',
                    top: 30,
                    alignSelf: 'center',
                  }}></View>
              </View>
            );
          })}
        </View>
        <View
          style={{
            width: '100%',
            height: 1.5,
            backgroundColor: COLORS.BORDER,
            marginTop: 13.5,
          }}></View>
        <ScrollView
          contentContainerStyle={{paddingBottom: HEIGHT_BASE_RATIO(20)}}
          scrollEnabled={true}>
          <Text
            style={{
              ...FONTS.TTLarge_24_Black,
              fontFamily: FontFamily.Bold,
              fontSize: FONT_SIZE(20),
              color: COLORS.PRIMARY,
              marginTop: HEIGHT_BASE_RATIO(25),
            }}>
            All Contracts
          </Text>
          {selectedTab === 'In Progress' &&
            data.map(() => {
              return (
                <View
                  style={{
                    width: '100%',
                    borderColor: COLORS.BORDER,
                    borderWidth: 1,
                    borderRadius: 8,
                    paddingHorizontal: WIDTH_BASE_RATIO(20),
                    paddingVertical: HEIGHT_BASE_RATIO(20),
                    marginTop: HEIGHT_BASE_RATIO(20),
                  }}>
                  <View style={{justifyContent: 'space-between'}}>
                    <View style={styles.cardHeader}>
                      <Text style={styles.title}>Design and Digitasl...</Text>
                      <TouchableOpacity style={styles.likeButton}>
                        <SVGS.Like />
                      </TouchableOpacity>
                    </View>
                    <Text
                      style={{
                        ...styles.company,
                        fontFamily: FontFamily.Medium,
                      }}>
                      Netflix ENT
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: HEIGHT_BASE_RATIO(15),
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        ...styles.company,
                        marginVertical: 0,
                        color: COLORS.GRAY_3,
                        fontFamily: FontFamily.Medium,
                      }}>
                      $31,420.83
                    </Text>
                    <Text
                      style={{
                        ...styles.company,
                        marginVertical: 0,
                        color: COLORS.GRAY_3,
                        fontFamily: FontFamily.Medium,
                      }}>
                      $25.00 /hr
                    </Text>
                    <Text
                      style={{
                        ...styles.company,
                        marginVertical: 0,
                        color: COLORS.GRAY_3,
                        fontFamily: FontFamily.Medium,
                      }}>
                      1,257 hours
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: HEIGHT_BASE_RATIO(20),
                    }}>
                    <CustomButton
                      backgroundColor={COLORS.WHITE}
                      width={WIDTH_BASE_RATIO(269)}
                      height={HEIGHT_BASE_RATIO(34)}
                      borderRadius={30}
                      boderColor={COLORS.BORDER}
                      text={'See Contract'}
                      onPress={() => {
                        navigation.navigate('Contract');
                      }}
                      textStyle={{
                        ...FONTS.ButtonText,
                        color: COLORS.TXT_COLOR,
                        fontSize: FONT_SIZE(12),
                      }}
                    />
                    <TouchableOpacity
                      style={{
                        width: WIDTH_BASE_RATIO(32),
                        height: HEIGHT_BASE_RATIO(34),
                        borderWidth: 1,
                        borderColor: COLORS.BORDER,
                        borderRadius: 18,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <SVGS.HorizontalDots />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}

          {selectedTab === 'Completed' &&
            data.map(() => {
              return (
                <View
                  style={{
                    width: '100%',
                    borderColor: COLORS.BORDER,
                    borderWidth: 1,
                    borderRadius: 8,
                    paddingHorizontal: WIDTH_BASE_RATIO(20),
                    paddingVertical: HEIGHT_BASE_RATIO(20),
                    marginTop: HEIGHT_BASE_RATIO(20),
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: HEIGHT_BASE_RATIO(5),
                    }}>
                    <Text
                      style={{
                        ...styles.company,
                        fontFamily: FontFamily.Medium,
                        fontSize: FONT_SIZE(14),
                      }}>
                      Completed :{'  '}
                    </Text>
                    <SVGS.StarsRatinng />
                  </View>
                  <View style={{justifyContent: 'space-between'}}>
                    <View style={styles.cardHeader}>
                      <Text style={styles.title}>Design and Digitasl...</Text>
                      <TouchableOpacity style={styles.likeButton}>
                        <SVGS.Like />
                      </TouchableOpacity>
                    </View>
                    <Text
                      style={{
                        ...styles.company,
                        fontFamily: FontFamily.Medium,
                      }}>
                      Netflix ENT (Jul 13, 2022 - Feb 27, 2023)
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: HEIGHT_BASE_RATIO(15),
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        ...styles.company,
                        marginVertical: 0,
                        color: COLORS.GRAY_3,
                        fontFamily: FontFamily.Medium,
                      }}>
                      $31,420.83
                    </Text>
                    <Text
                      style={{
                        ...styles.company,
                        marginVertical: 0,
                        color: COLORS.GRAY_3,
                        fontFamily: FontFamily.Medium,
                      }}>
                      $25.00 /hr
                    </Text>
                    <Text
                      style={{
                        ...styles.company,
                        marginVertical: 0,
                        color: COLORS.GRAY_3,
                        fontFamily: FontFamily.Medium,
                      }}>
                      1,257 hours
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: HEIGHT_BASE_RATIO(20),
                    }}>
                    <CustomButton
                      backgroundColor={COLORS.WHITE}
                      width={WIDTH_BASE_RATIO(269)}
                      height={HEIGHT_BASE_RATIO(34)}
                      borderRadius={30}
                      boderColor={COLORS.BORDER}
                      text={'See Contract'}
                      onPress={() => {
                        navigation.navigate('Contract');
                      }}
                      textStyle={{
                        ...FONTS.ButtonText,
                        color: COLORS.TXT_COLOR,
                        fontSize: FONT_SIZE(12),
                      }}
                    />
                    <TouchableOpacity
                      style={{
                        width: WIDTH_BASE_RATIO(32),
                        height: HEIGHT_BASE_RATIO(34),
                        borderWidth: 1,
                        borderColor: COLORS.BORDER,
                        borderRadius: 18,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <SVGS.HorizontalDots />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
        </ScrollView>
      </View>
    </>
  );
};

export default AllContracts;
