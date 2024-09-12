import {View, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import React, {useEffect, useRef} from 'react';
import AuthNavigation from './authNavigation';
import StackNavigation from './stackNavigation';
import {useDispatch, useSelector} from 'react-redux';

const AuthWrapper = ({navigation}) => {
  // const inputRef = useRef(null);
  // const handleWrapperPress = () => {
  //   if (inputRef.current && inputRef.current.isFocused()) {
  //     inputRef.current.blur();
  //   }
  //   Keyboard.dismiss();
  // };
  const state = useSelector(state => state.auth);
  const token = state?.token;
  const isProfileCompleted = state?.isProfileCompleted;

  return (
    <>
      <TouchableWithoutFeedback style={{flex: 1}}>
        {token && isProfileCompleted ? (
          <StackNavigation />
        ) : (
          <AuthNavigation />
        )}
      </TouchableWithoutFeedback>
    </>
  );
};

export default AuthWrapper;
