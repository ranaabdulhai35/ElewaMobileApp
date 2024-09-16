import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../../Components/Common/header';
import {COLORS, FONTS} from '../../BusinessLogics/Constants';
import * as SVGS from '../../Ui/Assets/Svgs/index';
import * as Images from '../../Ui/Assets/Images/index';
import {useNavigation} from '@react-navigation/native';
import {
  FONT_SIZE,
  HEIGHT_BASE_RATIO,
  WIDTH_BASE_RATIO,
} from '../../BusinessLogics/Utils/helpers';
import {GeneralStyles} from '../../Components/Global/generalStyles';
import {styles} from '../FindWork/jobCard';
import CustomButton from '../../Components/Common/customButton';
import {FontFamily} from '../../Components/Global/generalFonts';
import httpRequest from '../../BusinessLogics/Requests/axios';

const JobPost = ({route}) => {
  const {jobDetail} = route.params;
  const [jobDetails, setJobDetail] = useState('');
  const navigation = useNavigation();
  console.log(jobDetails.description);
  useEffect(() => {
    jobDetailApi();
  }, []);

  const jobDetailApi = async () => {
    try {
      const response = await httpRequest.get(
        `/utils/public_job_detail?id=${jobDetail?.item?.id}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (response?.status === 200) {
        setJobDetail(response?.data?.data);
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data?.status);
      }
    }
  };

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
      <View
        style={[
          GeneralStyles.container,
          GeneralStyles.generalPadding,
          {paddingTop: HEIGHT_BASE_RATIO(25)},
        ]}>
        <View
          style={{
            width: '100%',
            paddingHorizontal: WIDTH_BASE_RATIO(15),
            paddingVertical: HEIGHT_BASE_RATIO(23),
            borderRadius: 8,
            borderWidth: 1,
            borderColor: COLORS.PRIMARY,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Image
              source={{uri: jobDetails?.vendor?.profile_picture?.cdn_link}}
              style={{
                width: WIDTH_BASE_RATIO(60),
                height: HEIGHT_BASE_RATIO(65),
                borderRadius: 50,
                marginRight: WIDTH_BASE_RATIO(10),
              }}
              resizeMode="cover"
            />
            <View style={{justifyContent: 'space-between'}}>
              <View style={styles.cardHeader}>
                <Text style={styles.title}>{jobDetails?.job_title}</Text>
                <TouchableOpacity style={styles.likeButton}>
                  <SVGS.Like />
                </TouchableOpacity>
              </View>
              <Text style={styles.company}>
                {jobDetails?.vendor?.company_name}
              </Text>
              <View style={styles.infoContainer}>
                <View style={styles.newBadgeContainer}>
                  <Text style={styles.newBadge}>New</Text>
                </View>
                <View style={styles.infoItem}>
                  <SVGS.PostTime />
                  <Text style={styles.infoText}>{jobDetails?.hiring_type}</Text>
                </View>
                <View style={styles.infoItem}>
                  <SVGS.PostLocation />
                  <Text style={styles.infoText}>
                    {jobDetails?.city}, {jobDetails?.country}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <CustomButton
              backgroundColor={COLORS.PRIMARY}
              width={WIDTH_BASE_RATIO(150)}
              height={HEIGHT_BASE_RATIO(48)}
              borderRadius={6}
              boderColor={COLORS.PRIMARY}
              shadowStyle={{
                shadowColor: COLORS.PRIMARY,
                shadowOffset: {width: 0, height: 12},
                shadowOpacity: 0.96,
                shadowRadius: 3,
                elevation: 15,
              }}
              //   onPress={() => {
              //     navigation.navigate('ProfessionInfo');
              //   }}
              marginTop={HEIGHT_BASE_RATIO(20)}
              text={'Accept'}
              textStyle={{
                ...FONTS.ButtonText,
                color: COLORS.WHITE,
              }}
            />
            <CustomButton
              backgroundColor={COLORS.WHITE}
              width={WIDTH_BASE_RATIO(150)}
              height={HEIGHT_BASE_RATIO(48)}
              borderRadius={6}
              boderColor={COLORS.PRIMARY}
              shadowStyle={{
                shadowColor: COLORS.LIGHT_GRAY,
                shadowOffset: {width: 0, height: 12},
                shadowOpacity: 0.96,
                shadowRadius: 3,
                elevation: 15,
              }}
              //   onPress={() => {
              //     navigation.navigate('ProfessionInfo');
              //   }}
              marginTop={HEIGHT_BASE_RATIO(20)}
              text={'Message'}
              textStyle={{
                ...FONTS.ButtonText,
                color: COLORS.PRIMARY,
              }}
            />
          </View>
          <View>
            <Text
              style={{
                ...FONTS.TTNormal_14_Black,
                fontFamily: FontFamily.SemiBold,
                marginTop: HEIGHT_BASE_RATIO(25),
              }}>
              About
            </Text>
            <Text
              style={{
                ...FONTS.TTSmall_12_Black,
                color: COLORS.ParagrapghText,
                marginTop: HEIGHT_BASE_RATIO(15),
                letterSpacing: 0.05,
              }}>
              {jobDetails?.vendor?.about}
            </Text>
          </View>
          <View
            style={{
              ...GeneralStyles.line,
              width: WIDTH_BASE_RATIO(300),
              marginTop: HEIGHT_BASE_RATIO(25),
              height: 1,
            }}></View>
          <View>
            <Text
              style={{
                ...FONTS.TTNormal_14_Black,
                fontFamily: FontFamily.SemiBold,
                marginTop: HEIGHT_BASE_RATIO(25),
              }}>
              About the company
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('CompannyProfile');
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: HEIGHT_BASE_RATIO(15),
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={{
                      uri: jobDetails?.vendor?.profile_picture?.cdn_link,
                    }}
                    style={{
                      width: WIDTH_BASE_RATIO(60),
                      height: HEIGHT_BASE_RATIO(65),
                      borderRadius: 50,
                      marginRight: WIDTH_BASE_RATIO(10),
                    }}
                    resizeMode="cover"
                  />
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
                      {jobDetails?.vendor?.company_name}
                    </Text>
                    <View
                      style={[
                        styles.infoItem,
                        {marginLeft: 0, marginTop: HEIGHT_BASE_RATIO(8)},
                      ]}>
                      <SVGS.PostLocation />
                      <Text style={[styles.infoText]}>
                        {jobDetails?.city}, {jobDetails?.country}
                      </Text>
                    </View>
                  </View>
                </View>
                <CustomButton
                  backgroundColor={COLORS.WHITE}
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
                  //   onPress={() => {
                  //     navigation.navigate('ProfessionInfo');
                  //   }}
                  text={'Follow'}
                  textStyle={{
                    ...FONTS.ButtonText,
                    color: COLORS.PRIMARY,
                    fontSize: FONT_SIZE(12),
                  }}
                />
              </View>
            </TouchableOpacity>
            <Text
              style={{
                ...FONTS.TTSmall_12_Black,
                color: COLORS.ParagrapghText,
                marginTop: HEIGHT_BASE_RATIO(15),
                letterSpacing: 0.05,
              }}>
              {jobDetails?.description}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default JobPost;
