import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {View, Text, Pressable, StatusBar} from 'react-native';
import {COLORS, FONTS} from '../BusinessLogics/Constants';
import * as SVGS from '../Ui/Assets/Svgs/index';
import {useNavigation} from '@react-navigation/native';
import Home from '../Screens/Home/home';
import Profile from '../Screens/Profile/profile';
import FinndWork from '../Screens/FindWork/finndWork';
import Jobs from '../Screens/Jobs/jobs';
import {
  HEIGHT_BASE_RATIO,
  WIDTH_BASE_RATIO,
} from '../BusinessLogics/Utils/helpers';
import {FontFamily} from '../Components/Global/generalFonts';
import Messages from '../Screens/Messages/messages';
import Header from '../Components/Common/header';
import {useSharedValue} from 'react-native-reanimated';
import Drawer from '../Components/Common/drawer';
const Tab = createBottomTabNavigator();

function MyTabs() {
  const navigation = useNavigation();

  const active = useSharedValue(false);
  const drawerWidth = useSharedValue(1000);
  const drawerTranslateX = useSharedValue(-drawerWidth.value);
  const [color, setColor] = useState(COLORS.WHITE);
  const handleColor = color => {
    setColor(color);
  };
  
  
  return (
    <>
      <Drawer
        active={active}
        drawerWidth={drawerWidth}
        drawerTranslateX={drawerTranslateX}
        handleColor={handleColor}
      />

      <Header
        backgroundColor={color}
        leftIcon={SVGS.menuBars}
        rightIcon={SVGS.Message}
        middleIcon={SVGS.Elewa}
        style={{
          marginTop: HEIGHT_BASE_RATIO(40),
          marginBottom: HEIGHT_BASE_RATIO(15),
        }}
        onPressLeftIcon={() => {
          active.value = true;
          handleColor(COLORS.PRIMARY);
        }}
        onPressRightIcon={() => {
          navigation.navigate('Messages');
        }}
        onPressMiddleIcon={() => {
          navigation.navigate('Home');
        }}
      />
      <Tab.Navigator
        initialRouteName="Profile"
        screenOptions={({route}) => ({
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            paddingBottom: 5,
            paddingTop: 5,
            height: HEIGHT_BASE_RATIO(97),
            alignItems: 'center',
          },
        })}>
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <>
                  {focused && (
                    <View
                      style={{
                        width: WIDTH_BASE_RATIO(100),
                        height: HEIGHT_BASE_RATIO(4),
                        backgroundColor: COLORS.PRIMARY,
                        top: HEIGHT_BASE_RATIO(-25),
                      }}></View>
                  )}
                  <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    {focused ? <SVGS.HomeActive /> : <SVGS.Home />}
                    <Text
                      style={{
                        ...FONTS.TTNormal_14_Black,
                        color: focused ? COLORS.PRIMARY : COLORS.BLACK,
                        lineHeight: 20,
                        fontFamily: focused
                          ? FontFamily.Bold
                          : FontFamily.Regular,
                      }}>
                      Home
                    </Text>
                  </View>
                </>
              );
            },
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <>
                  {focused && (
                    <View
                      style={{
                        width: WIDTH_BASE_RATIO(100),
                        height: HEIGHT_BASE_RATIO(4),
                        backgroundColor: COLORS.PRIMARY,
                        top: HEIGHT_BASE_RATIO(-25),
                      }}></View>
                  )}
                  <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    {focused ? <SVGS.ProfileActive /> : <SVGS.Profile />}
                    <Text
                      style={{
                        ...FONTS.TTNormal_14_Black,
                        color: focused ? COLORS.PRIMARY : COLORS.BLACK,
                        lineHeight: 20,
                        fontFamily: focused
                          ? FontFamily.Bold
                          : FontFamily.Regular,
                      }}>
                      Profile
                    </Text>
                  </View>
                </>
              );
            },
          }}
          name="Profile"
          component={Profile}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <>
                  {focused && (
                    <View
                      style={{
                        width: WIDTH_BASE_RATIO(100),
                        height: HEIGHT_BASE_RATIO(4),
                        backgroundColor: COLORS.PRIMARY,
                        top: HEIGHT_BASE_RATIO(-25),
                      }}></View>
                  )}
                  <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    {focused ? <SVGS.FindWorkActive /> : <SVGS.FindWork />}
                    <Text
                      style={{
                        ...FONTS.TTNormal_14_Black,
                        color: focused ? COLORS.PRIMARY : COLORS.BLACK,
                        lineHeight: 20,
                        fontFamily: focused
                          ? FontFamily.Bold
                          : FontFamily.Regular,
                      }}>
                      Find work
                    </Text>
                  </View>
                </>
              );
            },
          }}
          name="Find work"
          component={FinndWork}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <>
                  {focused && (
                    <View
                      style={{
                        width: WIDTH_BASE_RATIO(100),
                        height: HEIGHT_BASE_RATIO(4),
                        backgroundColor: COLORS.PRIMARY,
                        top: HEIGHT_BASE_RATIO(-25),
                      }}></View>
                  )}
                  <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    {focused ? <SVGS.NoteActive /> : <SVGS.Note />}
                    <Text
                      style={{
                        ...FONTS.TTNormal_14_Black,
                        color: focused ? COLORS.PRIMARY : COLORS.BLACK,
                        lineHeight: 20,
                        fontFamily: focused
                          ? FontFamily.Bold
                          : FontFamily.Regular,
                      }}>
                      Jobs
                    </Text>
                  </View>
                </>
              );
            },
          }}
          name="Jobs"
          component={Jobs}
        />
      </Tab.Navigator>
    </>
  );
}
export default MyTabs;
