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
} from 'react-native';
import React, {useRef, useState} from 'react';
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
import {styles} from '../Profile/Styles/styles';
import {FontFamily} from '../../Components/Global/generalFonts';
import Carousel from 'react-native-reanimated-carousel';
import Tabs from '../Profile/Components/tabs';
import Tags from '../Profile/Components/tags';
import {useNavigation} from '@react-navigation/native';
import UserCard from '../Profile/Components/userCard';
import JobCard from '../FindWork/jobCard';

const width = Dimensions.get('window').width;

const CompanyProfile = () => {
  const navigation = useNavigation();

  const [selectedTab, steSelectedTab] = useState('About the companny');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [currentIndex3, setCurrentIndex3] = useState(0);

  const carouselRef = useRef();
  const carouselRef2 = useRef();
  const carouselRef3 = useRef();

  const tabs = ['About the companny', 'Active posts', 'Portfolio'];
  const tags = ['Actor', 'Voice over', 'Event', 'Editor'];
  const posts = [1, 2, 3, 4];
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
  const recommendedProfiles = [
    {
      id: '1',
      title: 'Experienced Actress',
      image: Images.RecommendedProfile,
      name: 'Sandra Lio',
      company: 'Clermont, FL',
    },
    {
      id: '2',
      title: 'Experienced Actress',
      image: Images.carousel2,
      name: 'Sandra Lio',
      company: 'Clermont, FL',
    },
    {
      id: '3',
      title: 'Experienced Actress',
      image: Images.carousel1,
      name: 'Sandra Lio',
      company: 'Clermont, FL',
    },
    {
      id: '4',
      title: 'Experienced Actress',
      image: Images.carousel2,
      name: 'Sandra Lio',
      company: 'Clermont, FL',
    },
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
  const renderProfiles = ({item}) => {
    return (
      <View style={styles.itemContainer2}>
        <Pressable style={styles.item2}>
          <ImageBackground
            source={item[0]?.image}
            borderRadius={10}
            style={{
              width: WIDTH_BASE_RATIO(242),
              height: HEIGHT_BASE_RATIO(242),
              justifyContent: 'flex-end',
              paddingHorizontal: WIDTH_BASE_RATIO(10),
              paddingVertical: WIDTH_BASE_RATIO(10),
            }}>
            <Text
              style={{
                ...FONTS.TTMedium_16_Black,
                color: COLORS.WHITE,
                fontFamily: FontFamily.SemiBold,
              }}>
              {item[0]?.name}
            </Text>
            <Text
              style={{
                ...FONTS.TTMedium_16_Black,
                color: COLORS.WHITE,
                fontFamily: FontFamily.SemiBold,
                marginTop: HEIGHT_BASE_RATIO(7.5),
              }}>
              {item[0]?.title}
            </Text>
            <Text
              style={{
                ...FONTS.TTNormal_14_Black,
                color: COLORS.LIGHT_GRAY,
                fontFamily: FontFamily.Regular,
                marginTop: HEIGHT_BASE_RATIO(2.5),
              }}>
              {item[0]?.company}
            </Text>
            <TouchableOpacity
              style={{
                width: WIDTH_BASE_RATIO(222),
                height: HEIGHT_BASE_RATIO(36),
                backgroundColor: COLORS.PRIMARY,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 4.5,
                marginTop: HEIGHT_BASE_RATIO(10),
              }}>
              <Text
                style={{
                  ...FONTS.TTSmall_12_Black,
                  color: COLORS.WHITE,
                  fontFamily: FontFamily.Bold,
                }}>
                Apply for job
              </Text>
            </TouchableOpacity>
          </ImageBackground>
        </Pressable>
        {item[1] && (
          <Pressable style={{...styles.item2, width: WIDTH_BASE_RATIO(242)}}>
            <ImageBackground
              source={item[1]?.image}
              borderRadius={10}
              style={{
                width: WIDTH_BASE_RATIO(242),
                height: HEIGHT_BASE_RATIO(242),
                justifyContent: 'flex-end',
                paddingHorizontal: WIDTH_BASE_RATIO(10),
                paddingVertical: WIDTH_BASE_RATIO(10),
              }}>
              <Text
                style={{
                  ...FONTS.TTMedium_16_Black,
                  color: COLORS.WHITE,
                  fontFamily: FontFamily.SemiBold,
                }}>
                {item[1]?.name}
              </Text>
              <Text
                style={{
                  ...FONTS.TTMedium_16_Black,
                  color: COLORS.WHITE,
                  fontFamily: FontFamily.SemiBold,
                  marginTop: HEIGHT_BASE_RATIO(7.5),
                }}>
                {item[1]?.title}
              </Text>
              <Text
                style={{
                  ...FONTS.TTNormal_14_Black,
                  color: COLORS.LIGHT_GRAY,
                  fontFamily: FontFamily.Regular,
                  marginTop: HEIGHT_BASE_RATIO(2.5),
                }}>
                {item[1]?.company}
              </Text>
              <TouchableOpacity
                style={{
                  width: WIDTH_BASE_RATIO(222),
                  height: HEIGHT_BASE_RATIO(36),
                  backgroundColor: COLORS.PRIMARY,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 4.5,
                  marginTop: HEIGHT_BASE_RATIO(10),
                }}>
                <Text
                  style={{
                    ...FONTS.TTSmall_12_Black,
                    color: COLORS.WHITE,
                    fontFamily: FontFamily.Bold,
                  }}>
                  Apply for job
                </Text>
              </TouchableOpacity>
            </ImageBackground>
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
  const handlePrev3 = () => {
    if (currentIndex3 > 0) {
      carouselRef3.current?.scrollTo({
        index: currentIndex3 - 1,
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
  const handleNext3 = () => {
    if (currentIndex3 < recommendedProfiles.length - 1) {
      carouselRef3.current?.scrollTo({
        index: currentIndex3 + 1,
        animated: true,
      });
    }
  };

  const groupedData = [];
  const groupedProfiles = [];
  for (let i = 0; i < data.length; i += 2) {
    groupedProfiles.push(recommendedProfiles.slice(i, i + 2));
  }
  for (let i = 0; i < data.length; i += 2) {
    groupedData.push(data.slice(i, i + 2));
  }

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
      <ScrollView scrollEnabled={true}>
        <View
          style={[
            GeneralStyles.container,
            GeneralStyles.generalPadding,
            {paddingBottom: HEIGHT_BASE_RATIO(20)},
          ]}>
          <UserCard />
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
              I started to work in the industry as a runner, while I was still
              studying film at the university. After finishing my education in
              Turkey, started my career as a full-time Assistant director. I
              worked as 3rd, 2nd, Floor 2nd. I have a good experience with
              period and action films and crowded scenes. Back in Turkey, I
              worked with some of the best Turkish directors and also had a
              chance to work with international big projects. 2 years ago moved
              to London. I passed my Covid-19 Supervisor training test and got
              my certificate from the first option. I also finished my First Aid
              and Health and Safety training.
            </Text>
          </View>
          <Tags tags={tags} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: HEIGHT_BASE_RATIO(25),
            }}></View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: HEIGHT_BASE_RATIO(10),
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
              Active Posts
            </Text>
            <View style={{marginTop: HEIGHT_BASE_RATIO(25)}}>
              {posts.map(() => {
                return <JobCard />;
              })}
            </View>
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
              width={width}
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
                Recommended Profiles
              </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={handlePrev3}
                  disabled={currentIndex3 <= 0}
                  style={[
                    styles.button,
                    currentIndex3 <= 0
                      ? styles.disabledButton
                      : styles.enabledButton,
                  ]}>
                  <Text style={styles.buttonText}>
                    <SVGS.ArrowLeftWhite />
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleNext3}
                  disabled={currentIndex3 >= recommendedProfiles.length - 1}
                  style={[
                    styles.button,
                    currentIndex3 >= recommendedProfiles.length - 1
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
              ref={carouselRef3}
              width={width * 1.35}
              height={HEIGHT_BASE_RATIO(300)}
              data={groupedProfiles}
              renderItem={renderProfiles}
              pagingEnabled
              onSnapToItem={index => setCurrentIndex3(index)}
              // mode='parallax'
              // modeConfig={{snapDirection: 'left'}}
              // windowSize={30}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default CompanyProfile;
