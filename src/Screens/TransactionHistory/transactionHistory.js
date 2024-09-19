import {View, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../Components/Common/header';
import {COLORS, FONTS} from '../../BusinessLogics/Constants';
import * as SVGS from '../../Ui/Assets/Svgs';
import {
  FONT_SIZE,
  HEIGHT_BASE_RATIO,
  WIDTH_BASE_RATIO,
} from '../../BusinessLogics/Utils/helpers';
import {useNavigation} from '@react-navigation/native';
import {GeneralStyles} from '../../Components/Global/generalStyles';
import {FontFamily} from '../../Components/Global/generalFonts';
import httpRequest from '../../BusinessLogics/Requests/axios';
import {useSelector} from 'react-redux';
import {styles} from './Styles/styles';
const TransactionHistory = () => {
  const navigation = useNavigation();
  const token = useSelector(state => state.auth.token);
  const [transactionDetail, setTransactionDetail] = useState('');

  useEffect(() => {
    transactionApi();
  }, []);

  const transactionApi = async () => {
    try {
      const response = await httpRequest.get(`/payment/transaction_history`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${token}`,
        },
      });
      if (response?.status === 200) {
        setTransactionDetail(response?.data?.data);
      }
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      }
    }
  };

  const renderTransactionList = () => {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              ...FONTS.TTNormal_14_Black,
              color: COLORS.Gray,
              fontFamily: FontFamily.Bold,
            }}>
            Dec 28, 2018
          </Text>
          <Text
            style={{
              ...FONTS.TTNormal_14_Black,
              color: COLORS.PRIMARY,
              fontFamily: FontFamily.Medium,
              borderBottomColor: COLORS.PRIMARY,
              borderBottomWidth: 1,
            }}>
            View invoice
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: HEIGHT_BASE_RATIO(12.5),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                width: WIDTH_BASE_RATIO(50),
                height: HEIGHT_BASE_RATIO(52),
                backgroundColor: COLORS.ADD_BTN_BG,
                borderRadius: 25,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <SVGS.MoneyReceive />
            </View>
            <View style={{marginLeft: WIDTH_BASE_RATIO(12)}}>
              <Text
                style={{
                  ...FONTS.TTNormal_14_Black,
                  fontFamily: FontFamily.Bold,
                }}>
                PSAE
              </Text>
              <Text
                style={{
                  ...FONTS.TTNormal_14_Black,
                }}>
                Service Fee
              </Text>
            </View>
          </View>
          <Text
            style={{
              ...FONTS.TTNormal_14_Black,
              fontFamily: FontFamily.Bold,
            }}>
            $48.00
          </Text>
        </View>
      </View>
    );
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
      <View style={[GeneralStyles.container, GeneralStyles.generalPadding]}>
        <Text
          style={{
            ...FONTS.TTLarge_24_Black,
            fontSize: FONT_SIZE(20),
            color: COLORS.PRIMARY,
            letterSpacing: 0.15,
            marginTop: HEIGHT_BASE_RATIO(10),
          }}>
          TransactionHistory
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: HEIGHT_BASE_RATIO(30),
          }}>
          <TouchableOpacity
            style={{
              width: WIDTH_BASE_RATIO(208),
              height: HEIGHT_BASE_RATIO(45),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 6,
              borderWidth: 1,
              borderColor: COLORS.BORDER,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                ...FONTS.TTNormal_14_Black,
                marginRight: WIDTH_BASE_RATIO(25),
              }}>
              4/31/2013 - 8/20/2023
            </Text>
            <SVGS.ArrowBottomBlack />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: WIDTH_BASE_RATIO(135),
              height: HEIGHT_BASE_RATIO(45),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 6,
              borderWidth: 1,
              borderColor: COLORS.BORDER,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                ...FONTS.TTNormal_14_Black,
                marginRight: WIDTH_BASE_RATIO(25),
              }}>
              Clients
            </Text>
            <SVGS.ArrowBottomBlack />
          </TouchableOpacity>
        </View>

        {transactionDetail.length === 0 && (
          <View style={styles.viewPosition}>
            <Text
              style={{
                ...FONTS.TTMedium_18_Black,
                fontFamily: FontFamily.Bold,
              }}>
              No Transactions found
            </Text>
          </View>
        )}

        <ScrollView style={{marginTop: HEIGHT_BASE_RATIO(30)}}>
          <FlatList
            data={transactionDetail}
            renderItem={renderTransactionList}
          />
        </ScrollView>
      </View>
    </>
  );
};

export default TransactionHistory;
