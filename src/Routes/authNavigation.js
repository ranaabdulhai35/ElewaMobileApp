import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/AuthenticationStack/login/login';
import SignUp from '../Screens/AuthenticationStack/signUp/signUp';
import VerifyEmail from '../Screens/AuthenticationStack/veifyEmail/verifyEmail';
import CompleteAccount from '../Screens/AuthenticationStack/accountSetupScreens/completeAccount';
import ProfessionInfo from '../Screens/AuthenticationStack/accountSetupScreens/accountInformation';
import AcademicInfo from '../Screens/AuthenticationStack/accountSetupScreens/accountInformation(Edu and Skills)';
import StackNavigation from './stackNavigation';
import EnterOtp from '../Screens/AuthenticationStack/otp/enterOtp';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  const state = useSelector(state => state.auth);
  const token = state?.token;
  return (
    <Stack.Navigator
      initialRouteName={token ? 'ProfessionInfo' : 'Login'}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        cardOverlayEnabled: true,
        animationEnabled: true,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Verify" component={VerifyEmail} />
      <Stack.Screen name="CompleteAccount" component={CompleteAccount} />
      <Stack.Screen name="ProfessionInfo" component={ProfessionInfo} />
      <Stack.Screen name="AcademicInfo" component={AcademicInfo} />
      <Stack.Screen name="EnterOtp" component={EnterOtp} />
      <Stack.Screen name="StackNavigator" component={StackNavigation} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
