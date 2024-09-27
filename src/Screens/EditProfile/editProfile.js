import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  StatusBar,
  Image,
  Alert,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ScrollView} from 'react-native-gesture-handler';
import {GeneralStyles} from '../../Components/Global/generalStyles';
import {
  HEIGHT_BASE_RATIO,
  WIDTH_BASE_RATIO,
} from '../../BusinessLogics/Utils/helpers';
import * as SVGS from '../../Ui/Assets/Svgs/index';
import * as Images from '../../Ui/Assets/Images/index';
import {COLORS, FONTS} from '../../BusinessLogics/Constants';
import {styles} from './style/styles';
import {launchImageLibrary} from 'react-native-image-picker';
import CustomInputTitle from '../../Components/Common/customInputTitle';
import DropdownComponent from '../../Components/Common/dropdownComponent';
import axios from 'axios';
import {API_KEY} from '@env';
import LinkProfiles from './componennts/linkProfiles';
import CustomButton from '../../Components/Common/customButton';

const EditProfile = () => {
  const [selectImage, setSelectImage] = useState();
  const imagePicker = () => {
    let options = {storageOptions: {path: 'image'}};
    launchImageLibrary(options, response =>
      setSelectImage(response.assets[0].uri),
    );
  };
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState();
  const [cities, setCities] = useState();
  const [tags, setTags] = useState([]);
  const [text, setText] = useState('');
  const platforms = [
    {
      svg: <SVGS.Twitter />,
      platform: 'X "formerly twitter"',
    },
    {
      svg: <SVGS.Linkedin />,
      platform: 'LinkedIn',
    },
    {
      svg: <SVGS.Instagram />,
      platform: 'Instagram',
    },
    {
      svg: <SVGS.Youtube />,
      platform: 'Youtube',
    },
    {
      svg: <SVGS.Vimeo />,
      platform: 'Vimeo',
    },
  ];

  const handleAddTag = () => {
    if (text.trim().length > 0 && !tags.includes(text)) {
      setTags([...tags, text.trim()]);
      setText('');
    }
  };
  const removeTag = index => {
    const newTags = tags.filter((tag, i) => i !== index);
    setTags(newTags);
  };
  const handleCountryValue = value => {
    setCountry(value);
  };
  const handleStateValue = value => {
    setState(value);
  };
  const handleCityValue = value => {
    setCity(value);
  };
  const handleState = countryCode => {
    var config = {
      method: 'get',
      url: `https://api.countrystatecity.in/v1/countries/${countryCode}/states`,
      headers: {
        'X-CSCAPI-KEY': API_KEY,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        var count = Object.keys(response.data).length;
        let stateArray = [];
        for (var i = 0; i < count; i++) {
          stateArray.push({
            value: response.data[i].iso2,
            label: response.data[i].name,
          });
        }
        setStates(stateArray);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleCity = stateCode => {
    var config = {
      method: 'get',
      url: `https://api.countrystatecity.in/v1/countries/${country?.value}/states/${stateCode}/cities`,
      headers: {
        'X-CSCAPI-KEY': API_KEY,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        var count = Object.keys(response.data).length;
        let cityArray = [];
        for (var i = 0; i < count; i++) {
          cityArray.push({
            value: response.data[i].id,
            label: response.data[i].name,
          });
        }
        setCities(cityArray);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleCountryData = async () => {
    var config = {
      method: 'get',
      url: 'https://api.countrystatecity.in/v1/countries',
      headers: {
        'X-CSCAPI-KEY': API_KEY,
      },
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        var count = Object.keys(response.data).length;
        let countryArray = [];
        for (var i = 0; i < count; i++) {
          countryArray.push({
            value: response.data[i].iso2,
            label: response.data[i].name,
          });
        }
        setCountries(countryArray);
      })
      .catch(function (error) {
        console.log(error);
        Alert.alert('Error', error?.AxiosError);
      });
  };
  const selectVideo = () => {
    let options = {
      mediaType: 'video',
      includeBase64: false,
      selectionLimit: 1,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled the picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        console.log('Video URI: ', response.assets[0].uri);
      }
    });
  };

  useEffect(() => {
    handleCountryData();
  }, []);
  return (
    <KeyboardAwareScrollView>
      <StatusBar translucent={true} backgroundColor={COLORS.WHITE} />
      <ScrollView>
        <View
          style={[
            GeneralStyles.container,
            GeneralStyles.generalPadding,
            {paddingVertical: HEIGHT_BASE_RATIO(20)},
          ]}>
          <View style={styles.imageUploadContainer}>
            <Text
              style={{
                ...styles.headingText,
                marginBottom: HEIGHT_BASE_RATIO(30),
              }}>
              Basic Information
            </Text>
            {selectImage ? (
              <Image
                style={{
                  width: WIDTH_BASE_RATIO(71),
                  height: HEIGHT_BASE_RATIO(76),
                  borderRadius: 35.5,
                  borderWidth: 3,
                  borderColor: COLORS.CARD_BORDER,
                }}
                source={{uri: selectImage}}
              />
            ) : (
              <SVGS.User />
            )}
            <TouchableOpacity
              style={styles.uploadButton}
              onPress={() => {
                imagePicker();
              }}>
              <SVGS.Upload />
              <Text style={styles.uploadButtonText}>Replace</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: HEIGHT_BASE_RATIO(25),
              width: WIDTH_BASE_RATIO(353),
            }}>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.inputHeadingText}>First Name</Text>
              <CustomInputTitle
                placeholder={'First Name'}
                returnKeyType={'next'}
                borderColor={COLORS.BORDER}
                placeholderColor={COLORS.GRAY_3}
                width={WIDTH_BASE_RATIO(171.5)}
                height={HEIGHT_BASE_RATIO(48)}
                noIcon={true}
                borderRadius={6}
                borderWidth={1.5}
              />
              {/* {touched.firstName && errors.firstName && (
                <View style={GeneralStyles.errorStyle}>
                  <Text
                    style={[
                      FONTS.TTNormal_14_Black,
                      {
                        color: COLORS.RED,
                      },
                    ]}>
                    {errors.firstName}
                  </Text>
                </View>
              )} */}
            </View>
            <View style={{flexDirection: 'column'}}>
              <Text style={styles.inputHeadingText}>Last Name</Text>
              <CustomInputTitle
                placeholder={'Last Name'}
                returnKeyType={'next'}
                borderColor={COLORS.BORDER}
                placeholderColor={COLORS.GRAY_3}
                width={WIDTH_BASE_RATIO(171.5)}
                height={HEIGHT_BASE_RATIO(48)}
                noIcon={true}
                borderRadius={6}
                borderWidth={1.5}
              />
            </View>
          </View>
          <View
            style={{flexDirection: 'column', marginTop: HEIGHT_BASE_RATIO(20)}}>
            <Text style={styles.inputHeadingText}>Occupation</Text>
            <CustomInputTitle
              placeholder={'Occupation'}
              returnKeyType={'next'}
              borderColor={COLORS.BORDER}
              placeholderColor={COLORS.GRAY_3}
              width={WIDTH_BASE_RATIO(353)}
              height={HEIGHT_BASE_RATIO(48)}
              noIcon={true}
              borderRadius={6}
              borderWidth={1.5}
            />
          </View>
          <View
            style={{flexDirection: 'column', marginTop: HEIGHT_BASE_RATIO(20)}}>
            <Text style={styles.inputHeadingText}>Company</Text>
            <CustomInputTitle
              placeholder={'Company'}
              returnKeyType={'next'}
              borderColor={COLORS.BORDER}
              placeholderColor={COLORS.GRAY_3}
              width={WIDTH_BASE_RATIO(353)}
              height={HEIGHT_BASE_RATIO(48)}
              noIcon={true}
              borderRadius={6}
              borderWidth={1.5}
            />
          </View>
          <View
            style={{flexDirection: 'column', marginTop: HEIGHT_BASE_RATIO(20)}}>
            <Text style={{...styles.inputHeadingText, marginBottom: 0}}>
              Country
            </Text>
            <DropdownComponent
              data={countries}
              handleState={handleState}
              handleValue={handleCountryValue}
              value={country}
              marginTop={HEIGHT_BASE_RATIO(10)}
              placeholder="Select Country"
            />
          </View>
          {states && (
            <View
              style={{
                flexDirection: 'column',
                marginTop: HEIGHT_BASE_RATIO(20),
              }}>
              <Text style={{...styles.inputHeadingText, marginBottom: 0}}>
                State
              </Text>
              <DropdownComponent
                data={states}
                handleState={handleCity}
                handleValue={handleStateValue}
                marginTop={HEIGHT_BASE_RATIO(10)}
                value={state}
                placeholder="Select State"
              />
            </View>
          )}
          {cities && (
            <View
              style={{
                flexDirection: 'column',
                marginTop: HEIGHT_BASE_RATIO(20),
              }}>
              <Text style={{...styles.inputHeadingText, marginBottom: 0}}>
                City
              </Text>
              <DropdownComponent
                data={cities}
                // handleState={console.log('nothing')}
                handleValue={handleCityValue}
                value={city}
                marginTop={HEIGHT_BASE_RATIO(10)}
                placeholder="Select City"
              />
            </View>
          )}

          <View
            style={{flexDirection: 'column', marginTop: HEIGHT_BASE_RATIO(20)}}>
            <Text style={styles.inputHeadingText}>Website URL</Text>
            <CustomInputTitle
              placeholder={'Website URL'}
              returnKeyType={'next'}
              borderColor={COLORS.BORDER}
              placeholderColor={COLORS.GRAY_3}
              width={WIDTH_BASE_RATIO(353)}
              height={HEIGHT_BASE_RATIO(48)}
              noIcon={true}
              borderRadius={6}
              borderWidth={1.5}
            />
          </View>

          <View style={styles.container}>
            <Text style={styles.inputHeadingText}>Tags</Text>
            <View style={styles.tagContainer}>
              {tags.map((tag, index) => (
                <View key={index} style={styles.tag}>
                  <Text style={styles.tagText}>{tag}</Text>
                  <TouchableOpacity onPress={() => removeTag(index)}>
                    <Text style={styles.tagRemove}> X </Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
            <TextInput
              style={styles.input}
              value={text}
              onChangeText={setText}
              placeholder="Add skill..."
              onSubmitEditing={handleAddTag}
              returnKeyType="done"
            />
          </View> 

          <View style={{marginTop: HEIGHT_BASE_RATIO(50)}}>
            <Text style={FONTS.TTBold_20_Black}>About</Text>
            <Text
              style={{
                ...FONTS.TTMedium_14_Black,
                marginTop: HEIGHT_BASE_RATIO(20),
              }}>
              Description
            </Text>
            <TextInput
              placeholder={'Bio description, Tell us about yourself'}
              returnKeyType={'next'}
              borderColor={COLORS.BORDER}
              placeholderColor={COLORS.GRAY_3}
              noIcon={true}
              multiline={true}
              numberOfLines={4}
              borderRadius={6}
              borderWidth={1.5}
              style={{
                marginTop: HEIGHT_BASE_RATIO(10),
                width: WIDTH_BASE_RATIO(353),
                paddingHorizontal: WIDTH_BASE_RATIO(20),
                paddingVertical: HEIGHT_BASE_RATIO(20),
              }}
            />
          </View>

          <View style={{marginTop: HEIGHT_BASE_RATIO(50)}}>
            <Text style={FONTS.TTBold_20_Black}>Social Profiles</Text>
            {platforms.map(item => {
              return <LinkProfiles SVG={item.svg} Platform={item.platform} />;
            })}
          </View>
          <View style={{marginTop: HEIGHT_BASE_RATIO(50)}}>
            <Text style={FONTS.TTBold_20_Black}>Social Profiles</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: HEIGHT_BASE_RATIO(10),
              }}>
              <View
                style={{
                  flexDirection: 'column',
                }}>
                <Text style={styles.inputHeadingText}>Credits Title</Text>
                <CustomInputTitle
                  placeholder={'Credits Title'}
                  returnKeyType={'next'}
                  borderColor={COLORS.BORDER}
                  placeholderColor={COLORS.GRAY_3}
                  width={WIDTH_BASE_RATIO(171.5)}
                  height={HEIGHT_BASE_RATIO(48)}
                  noIcon={true}
                  borderRadius={6}
                  borderWidth={1.5}
                />
              </View>
              <View
                style={{
                  flexDirection: 'column',
                }}>
                <Text style={styles.inputHeadingText}>URL</Text>
                <CustomInputTitle
                  placeholder={'URL'}
                  returnKeyType={'next'}
                  borderColor={COLORS.BORDER}
                  placeholderColor={COLORS.GRAY_3}
                  width={WIDTH_BASE_RATIO(171.5)}
                  height={HEIGHT_BASE_RATIO(48)}
                  noIcon={true}
                  borderRadius={6}
                  borderWidth={1.5}
                />
              </View>
            </View>
            <CustomButton
              backgroundColor={COLORS.PRIMARY}
              width={WIDTH_BASE_RATIO(353)}
              height={HEIGHT_BASE_RATIO(48)}
              borderRadius={6}
              boderColor={COLORS.PRIMARY}
              marginTop={HEIGHT_BASE_RATIO(20)}
              text={'Add'}
              textStyle={{
                ...FONTS.ButtonText,
                color: COLORS.WHITE,
              }}
            />
          </View>
          <View style={{marginTop: HEIGHT_BASE_RATIO(50)}}>
            <Text style={FONTS.TTBold_20_Black}>Upload Portfolio</Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: HEIGHT_BASE_RATIO(25),
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                onPress={selectVideo}
                style={styles.uploadButtonPortfolio}>
                <SVGS.Upload />
                <Text
                  style={{
                    ...FONTS.TTMedium_14_Black,
                    color: COLORS.GRAY_3,
                    marginTop: HEIGHT_BASE_RATIO(10),
                  }}>
                  Upload Videos
                </Text>
                <Text
                  style={{
                    ...FONTS.TTMedium_14_Black,
                    color: COLORS.BORDER,
                    marginTop: HEIGHT_BASE_RATIO(10),
                  }}>
                  .MP4, .MOV, .WMV
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={selectVideo}
                style={styles.uploadButtonPortfolio}>
                <SVGS.Upload />
                <Text
                  style={{
                    ...FONTS.TTMedium_14_Black,
                    color: COLORS.GRAY_3,
                    marginTop: HEIGHT_BASE_RATIO(10),
                  }}>
                  Upload Videos
                </Text>
                <Text
                  style={{
                    ...FONTS.TTMedium_14_Black,
                    color: COLORS.BORDER,
                    marginTop: HEIGHT_BASE_RATIO(10),
                  }}>
                  .MP4, .MOV, .WMV
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'column',
                marginTop: HEIGHT_BASE_RATIO(20),
              }}>
              <Text style={styles.inputHeadingText}>URL</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <CustomInputTitle
                  placeholder={'URL'}
                  returnKeyType={'next'}
                  borderColor={COLORS.BORDER}
                  placeholderColor={COLORS.GRAY_3}
                  width={WIDTH_BASE_RATIO(233)}
                  height={HEIGHT_BASE_RATIO(43)}
                  noIcon={true}
                  borderRadius={6}
                  borderWidth={1.5}
                />
                <CustomButton
                  backgroundColor={COLORS.PRIMARY}
                  width={WIDTH_BASE_RATIO(105)}
                  height={HEIGHT_BASE_RATIO(43)}
                  borderRadius={6}
                  boderColor={COLORS.PRIMARY}
                  text={'Add'}
                  textStyle={{
                    ...FONTS.ButtonText,
                    color: COLORS.WHITE,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default EditProfile;
