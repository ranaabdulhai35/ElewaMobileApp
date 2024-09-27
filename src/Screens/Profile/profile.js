import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Pressable,
  ImageBackground,
  StyleSheet,
  Alert,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {GeneralStyles} from '../../Components/Global/generalStyles';
import {COLORS, FONTS} from '../../BusinessLogics/Constants';
import * as SVGS from '../../Ui/Assets/Svgs/index';
import * as Images from '../../Ui/Assets/Images/index';
import {
  FONT_SIZE,
  HEIGHT_BASE_RATIO,
  WIDTH_BASE_RATIO,
} from '../../BusinessLogics/Utils/helpers';
import Header from '../../Components/Common/header';
import {styles} from './Styles/styles';
import {FontFamily} from '../../Components/Global/generalFonts';
import UserCard from './Components/userCard';
import Tabs from './Components/tabs';
import Carousel from 'react-native-reanimated-carousel';
import Tags from './Components/tags';
import {useNavigation} from '@react-navigation/native';
import httpRequest from '../../BusinessLogics/Requests/axios';
import {useDispatch, useSelector} from 'react-redux';
import {AuthSlice} from '../../BusinessLogics/Redux/store';

const width = Dimensions.get('window').width;

const Profile = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [selectedTab, steSelectedTab] = useState('About me');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [profileData, setProfileData] = useState({});
  const [credits, setCredits] = useState('');
  const [reviews, setReviews] = useState([]);
  const state = useSelector(state => state.auth);
  const role = state?.role;
  const id = state?.id;
  const token = state?.token;
  const carouselRef = useRef();
  const carouselRef2 = useRef();
  const tabs = ['About me', 'Credits', 'Portfolio', 'Reviews'];
  const tags = ['Actor', 'Voice over', 'Event', 'Editor'];
  const handleSelectedTab = data => {
    steSelectedTab(data);
  };
  const data = [
    {
      id: '1',
      title: 'Logo Design',
      image: Images.Portfolio1,
      description: 'Logo is vital for brand identity.',
    },
    {
      id: '2',
      title: 'Video Editing',
      image: Images.Portfolio2,
      description: 'Logo is vital for brand identity.',
    },
    {
      id: '3',
      title: 'Logo Design',
      image: Images.Portfolio1,
      description: 'Logo is vital for brand identity.',
    },
    {
      id: '4',
      title: 'Video Editing',
      image: Images.Portfolio2,
      description: 'Logo is vital for brand identity.',
    },
    // Add more items as needed
  ];
  const renderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <Pressable style={styles.item}>
          <Image
            source={item[0]?.image}
            borderRadius={6}
            style={{
              width: WIDTH_BASE_RATIO(169),
              height: HEIGHT_BASE_RATIO(118),
              justifyContent: 'flex-end',
              paddingHorizontal: WIDTH_BASE_RATIO(12),
              paddingVertical: WIDTH_BASE_RATIO(18),
            }}
          />
        </Pressable>
        {item[1] && (
          <Pressable style={styles.item}>
            <Image
              source={item[1]?.image}
              borderRadius={6}
              style={{
                width: WIDTH_BASE_RATIO(169),
                height: HEIGHT_BASE_RATIO(118),
                justifyContent: 'flex-end',
                paddingHorizontal: WIDTH_BASE_RATIO(12),
                paddingVertical: WIDTH_BASE_RATIO(18),
              }}
            />
          </Pressable>
        )}
      </View>
    );
  };
  const handlePrev = () => {
    if (currentIndex > 0) {
      carouselRef.current?.scrollTo({index: currentIndex - 1, animated: true});
    }
  };
  const handlePrev2 = () => {
    if (currentIndex2 > 0) {
      carouselRef2.current?.scrollTo({
        index: currentIndex2 - 1,
        animated: true,
      });
    }
  };

  const handleNext = () => {
    if (currentIndex < groupedData.length - 1) {
      carouselRef.current?.scrollTo({index: currentIndex + 1, animated: true});
    }
  };
  const handleNext2 = () => {
    if (currentIndex2 < groupedData.length - 1) {
      carouselRef2.current?.scrollTo({
        index: currentIndex2 + 1,
        animated: true,
      });
    }
  };
  const getProfile = async () => {
    try {
      const response = await httpRequest.get(
        `/${role}/${role}_profile?id=${id}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
          },
        },
      );
      if (response?.data?.success) {
        console.log('response data', response?.data?.data);
        setProfileData(response?.data?.data);
        dispatch(AuthSlice.actions.setId(response?.data?.data?.id));
      }
    } catch (e) {
      console.log('error', e);
      Alert?.alert('Error occured', e?.AxiosError);
    }
  };
  const getCredits = async () => {
    try {
      const response = await httpRequest.get(
        '/utils/credits_list?page=1&limit=4',
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: state.token,
          },
        },
      );
      if (response.status == 200) {
        setCredits(response.data.data);
        console.log('credits', response.data.data);
      }
    } catch (e) {
      console.log('error occured in fetching credits', e.response.data);
    }
  };
  const getReviews = async () => {
    try {
      const response = await httpRequest.get(`/utils/review_list?user=${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: state.token,
        },
      });
      if (response.status == 200) {
        setReviews(response.data.data);
        console.log('reviews', response.data.data);
      }
    } catch (e) {
      console.log('error occured in fetching reviews', e.response.data);
    }
  };
  const groupedData = [];
  for (let i = 0; i < data.length; i += 2) {
    groupedData.push(data.slice(i, i + 2));
  }
  // const reviews = [1, 2, 3, 4, 5];
  useEffect(() => {
    getProfile();
    getCredits();
    getReviews();
  }, []);
  return (
    <>
      <ScrollView scrollEnabled={true}>
        <View
          style={[
            GeneralStyles.container,
            GeneralStyles.generalPadding,
            {paddingBottom: HEIGHT_BASE_RATIO(20)},
          ]}>
          <UserCard data={profileData} />
          <Tabs
            data={tabs}
            handleTab={handleSelectedTab}
            selectedTab={selectedTab}
          />
          <View>
            <Text
              style={{
                ...FONTS.TTMedium_18_Black,
                fontFamily: FontFamily.SemiBold,
                marginTop: HEIGHT_BASE_RATIO(25),
              }}>
              {selectedTab}
            </Text>
            <Text
              style={{
                ...FONTS.TTNormal_14_Black,
                color: COLORS.ParagrapghText,
                marginTop: HEIGHT_BASE_RATIO(15),
                fontFamily: FontFamily.Regular,
                letterSpacing: 0.15,
              }}>
              {profileData?.about}
              {/* {profileData?.about ? profileData?.about : 'No description'} */}
            </Text>
          </View>
          {/* {profileData?.tags?.length !== 0 && <Tags tags={profileData?.tags} />} */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: HEIGHT_BASE_RATIO(25),
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <SVGS.Instagram />
              <Text
                style={{
                  marginLeft: 6,
                  ...FONTS.TTNormal_14_Black,
                  color: COLORS.TXT_COLOR,
                }}>
                @Sandra_Lo
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 40,
              }}>
              <SVGS.Twitter />
              <Text
                style={{
                  marginLeft: 6,
                  ...FONTS.TTNormal_14_Black,
                  color: COLORS.TXT_COLOR,
                }}>
                @Sandra_Lo
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: HEIGHT_BASE_RATIO(20),
            }}>
            <SVGS.Web />
            <Text
              style={{
                marginLeft: 6,
                ...FONTS.TTNormal_14_Black,
                color: COLORS.TXT_COLOR,
              }}>
              SandraLo.com
            </Text>
          </View>
          <View
            style={{
              ...GeneralStyles.line,
              width: '100%',
              marginTop: HEIGHT_BASE_RATIO(30),
            }}></View>
          <View>
            <Text
              style={{
                ...FONTS.TTMedium_18_Black,
                fontFamily: FontFamily.SemiBold,
                marginTop: HEIGHT_BASE_RATIO(25),
              }}>
              Credits
            </Text>
            <Text
              style={{
                ...FONTS.TTNormal_14_Black,
                color: COLORS.ParagrapghText,
                marginTop: HEIGHT_BASE_RATIO(15),
                fontFamily: FontFamily.Regular,
                letterSpacing: 0.25,
              }}>
              {credits?.data?.length == 0
                ? 'There are no credits'
                : credits.data}
            </Text>
          </View>
          <View
            style={{
              ...GeneralStyles.line,
              width: '100%',
              marginTop: HEIGHT_BASE_RATIO(30),
            }}></View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: HEIGHT_BASE_RATIO(5),
              }}>
              <Text
                style={{
                  ...FONTS.TTMedium_18_Black,
                  fontFamily: FontFamily.SemiBold,
                  marginTop: HEIGHT_BASE_RATIO(25),
                }}>
                Portfolio Videos
              </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={handlePrev}
                  disabled={currentIndex === 0}
                  style={[
                    styles.button,
                    currentIndex === 0
                      ? styles.disabledButton
                      : styles.enabledButton,
                  ]}>
                  <Text style={styles.buttonText}>
                    <SVGS.ArrowLeftWhite />
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleNext}
                  disabled={currentIndex === groupedData.length - 1}
                  style={[
                    styles.button,
                    currentIndex === groupedData.length - 1
                      ? styles.disabledButton
                      : styles.enabledButton,
                  ]}>
                  <Text style={styles.buttonText}>
                    <SVGS.ArrowRight />
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <Carousel
              ref={carouselRef}
              width={width / 1.1}
              height={width / 3.25}
              data={groupedData}
              renderItem={renderItem}
              pagingEnabled
              onSnapToItem={index => setCurrentIndex(index)}
            />
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: HEIGHT_BASE_RATIO(5),
              }}>
              <Text
                style={{
                  ...FONTS.TTMedium_18_Black,
                  fontFamily: FontFamily.SemiBold,
                  marginTop: HEIGHT_BASE_RATIO(25),
                }}>
                Portfolio Images
              </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={handlePrev2}
                  disabled={currentIndex2 === 0}
                  style={[
                    styles.button,
                    currentIndex2 === 0
                      ? styles.disabledButton
                      : styles.enabledButton,
                  ]}>
                  <Text style={styles.buttonText}>
                    <SVGS.ArrowLeftWhite />
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleNext2}
                  disabled={currentIndex2 === groupedData.length - 1}
                  style={[
                    styles.button,
                    currentIndex2 === groupedData.length - 1
                      ? styles.disabledButton
                      : styles.enabledButton,
                  ]}>
                  <Text style={styles.buttonText}>
                    <SVGS.ArrowRight />
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <Carousel
              ref={carouselRef2}
              width={width / 1.1}
              height={width / 3.25}
              data={groupedData}
              renderItem={renderItem}
              pagingEnabled
              onSnapToItem={index => setCurrentIndex2(index)}
            />
          </View>
          <View
            style={{
              ...GeneralStyles.line,
              width: '100%',
              marginTop: HEIGHT_BASE_RATIO(30),
            }}></View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: HEIGHT_BASE_RATIO(25),
            }}>
            <Text
              style={{
                ...FONTS.TTMedium_18_Black,
                fontFamily: FontFamily.SemiBold,
              }}>
              Reviews
            </Text>
          </View>
          {reviews?.data?.length == 0 ? (
            <Text
              style={{
                ...FONTS.NormalText,
                letterSpacing: 0.15,
                textAlign: 'left',
                color: COLORS.ParagrapghText,
                marginTop: HEIGHT_BASE_RATIO(10),
              }}>
              No reviews
            </Text>
          ) : (
            reviews?.map(() => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                    marginTop: HEIGHT_BASE_RATIO(25),
                  }}>
                  <Image
                    source={Images.ReviewPfp}
                    style={{
                      width: 63,
                      height: 63,
                    }}
                    resizeMode="contain"
                  />
                  <View style={{width: '78%'}}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          ...FONTS.TTMedium_18_Black,
                          fontFamily: FontFamily.SemiBold,
                        }}>
                        Farjana Bawnia
                      </Text>
                      <SVGS.StarsRatinng />
                    </View>
                    <Text
                      style={{
                        ...FONTS.NormalText,
                        letterSpacing: 0.15,
                        textAlign: 'left',
                        color: COLORS.ParagrapghText,
                        marginTop: HEIGHT_BASE_RATIO(10),
                      }}>
                      At 29 years old, my favorite compliment is being told that
                      I look like my mom. Seeing myself in her image, like this
                      daughter up top.
                    </Text>
                  </View>
                </View>
              );
            })
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default Profile;
