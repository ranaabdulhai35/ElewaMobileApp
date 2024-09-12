import {
  View,
  Text,
  Image,
  Pressable,
  Dimensions,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../Components/Common/header';
import {COLORS, FONTS} from '../../BusinessLogics/Constants';
import * as SVGS from '../../Ui/Assets/Svgs/index';
import * as Images from '../../Ui/Assets/Images/index';
import {
  HEIGHT_BASE_RATIO,
  WIDTH_BASE_RATIO,
} from '../../BusinessLogics/Utils/helpers';
import {GeneralStyles} from '../../Components/Global/generalStyles';
import {FontFamily} from '../../Components/Global/generalFonts';
import Carousel from 'react-native-reanimated-carousel';
import {useNavigation} from '@react-navigation/native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Home = () => {
  const navigation = useNavigation();

  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [
    {
      id: '1',
      title: 'Logo Design',
      image: Images.carousel1,
      description: 'Logo is vital for brand identity.',
    },
    {
      id: '2',
      title: 'Video Editing',
      image: Images.carousel2,
      description: 'Logo is vital for brand identity.',
    },
    {
      id: '3',
      title: 'Logo Design',
      image: Images.carousel1,
      description: 'Logo is vital for brand identity.',
    },
    {
      id: '4',
      title: 'Video Editing',
      image: Images.carousel2,
      description: 'Logo is vital for brand identity.',
    },
    // Add more items as needed
  ];
  const renderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <Pressable style={styles.item}>
          <ImageBackground
            source={item[0]?.image}
            borderRadius={6}
            style={{
              width: WIDTH_BASE_RATIO(172),
              height: HEIGHT_BASE_RATIO(167),
              justifyContent: 'flex-end',
              paddingHorizontal: WIDTH_BASE_RATIO(12),
              paddingVertical: WIDTH_BASE_RATIO(18),
            }}>
            <Text
              style={{
                ...FONTS.ButtonText,
                color: COLORS.WHITE,
                fontFamily: FontFamily.SemiBold,
                marginBottom: 4,
              }}>
              {item[0]?.title}
            </Text>
            <Text
              style={{
                ...FONTS.TTNormal_14_Black,
                color: COLORS.WHITE,
              }}>
              {item[0]?.description}
            </Text>
          </ImageBackground>
        </Pressable>
        {item[1] && (
          <Pressable style={styles.item}>
            <ImageBackground
              source={item[1]?.image}
              borderRadius={6}
              style={{
                width: WIDTH_BASE_RATIO(172),
                height: HEIGHT_BASE_RATIO(167),
                justifyContent: 'flex-end',
                paddingHorizontal: WIDTH_BASE_RATIO(12),
                paddingVertical: WIDTH_BASE_RATIO(18),
              }}>
              <Text
                style={{
                  ...FONTS.ButtonText,
                  color: COLORS.WHITE,
                  fontFamily: FontFamily.SemiBold,
                  marginBottom: 4,
                }}>
                {item[1]?.title}
              </Text>
              <Text
                style={{
                  ...FONTS.TTNormal_14_Black,
                  color: COLORS.WHITE,
                }}>
                {item[1]?.description}
              </Text>
            </ImageBackground>
          </Pressable>
        )}
      </View>
    );
  };

  const groupedData = [];
  for (let i = 0; i < data.length; i += 2) {
    groupedData.push(data.slice(i, i + 2));
  }
  return (
    <>
      <ScrollView scrollEnabled={true}>
        <Image
          source={Images.background}
          style={{
            width: '100%',
            height: HEIGHT_BASE_RATIO(185),
          }}
          resizeMode="cover"
        />
        <View style={[GeneralStyles.container,GeneralStyles.generalPadding]}>
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
              Popular Services
            </Text>
            <Pressable>
              <Text
                style={{
                  ...FONTS.TTNormal_14_Black,
                  color: COLORS.PRIMARY,
                  fontFamily: FontFamily.Bold,
                }}>
                See All
              </Text>
            </Pressable>
          </View>
          <View style={styles.container}>
            <Carousel
              width={width / 1.05}
              height={width / 2}
              data={groupedData}
              style={{zIndex: 1}}
              renderItem={renderItem}
              pagingEnabled
              onSnapToItem={index => setCurrentIndex(index)}
            />
            <View style={styles.dotContainer}>
              {groupedData.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.dot,
                    currentIndex === index
                      ? styles.activeDot
                      : styles.inactiveDot,
                  ]}
                />
              ))}
            </View>
          </View>
          <Image
            source={Images.explore}
            style={{
              width:'100%',
              height: height/2.5,
              alignSelf: 'center',
              borderRadius: 10.3,
              marginTop: HEIGHT_BASE_RATIO(25),
              marginBottom: HEIGHT_BASE_RATIO(50),
            }}
            resizeMode='cover'
            // resizeMethod='resize'
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: HEIGHT_BASE_RATIO(200),
    marginTop: HEIGHT_BASE_RATIO(15),
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    width: width / 2 - 30,
    height: HEIGHT_BASE_RATIO(150),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    margin: 10,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 2.5,
  },
  activeDot: {
    backgroundColor: COLORS.PRIMARY,
  },
  inactiveDot: {
    backgroundColor: COLORS.BORDER,
  },
});
