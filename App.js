import {View, Text} from 'react-native';
import React from 'react';
import {GeneralStyles} from './src/Components/Global/generalStyles';
import {NavigationContainer} from '@react-navigation/native';
import AuthWrapper from './src/Routes/authWrapper';
import Messages from './src/Screens/Messages/messages';
import MessageScreen from './src/Screens/MessageScreen/messageScreen';
import JobPost from './src/Screens/JobPost/jobPost';
import Contract from './src/Screens/Contract/contract';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import EnterOtp from './src/Screens/AuthenticationStack/otp/enterOtp';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/BusinessLogics/Redux/store';
import EditProfile from './src/Screens/EditProfile/editProfile';

GoogleSignin.configure({
  webClientId:
    '604550925314-idfu5462ea5d0arstbh0v8pimgjtecf6.apps.googleusercontent.com',
  forceCodeForRefreshToken: true,
});
const App = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={GeneralStyles.container}>
        <NavigationContainer>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <View style={GeneralStyles.container}>
                <AuthWrapper />
              </View>
            </PersistGate>
          </Provider>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
