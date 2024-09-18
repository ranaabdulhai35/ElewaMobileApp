import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Messages from '../Screens/Messages/messages';
import MessageScreen from '../Screens/MessageScreen/messageScreen';
import MyTabs from './bottomNavigation';
import JobPost from '../Screens/JobPost/jobPost';
import Contract from '../Screens/Contract/contract';
import CompanyProfile from '../Screens/CompanyProfile/compannyProfile';
import AllContracts from '../Screens/AllContracts/allContracts';
import TransactionHistory from '../Screens/TransactionHistory/transactionHistory';
import EndContract from '../Screens/EndContract/endContract';
import { useSelector } from 'react-redux';
import Login from '../Screens/AuthenticationStack/login/login';
import AuthNavigation from './authNavigation';
import EditProfile from '../Screens/EditProfile/editProfile';
const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const state = useSelector(state => state.auth);
  const isProfileCompleted = state?.isProfileCompleted;
  return (
    <>
      <Stack.Navigator
        initialRouteName={"BottomTab"}
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          cardOverlayEnabled: true,
          animationEnabled: true,
        }}>
        <Stack.Screen name="BottomTab" component={MyTabs} />
        <Stack.Screen name="AuthNavigator" component={AuthNavigation} />
        <Stack.Screen name="Messages" component={Messages} />
        <Stack.Screen name="MessageScreen" component={MessageScreen} />
        <Stack.Screen name="JobPost" component={JobPost} />
        <Stack.Screen name="Contract" component={Contract} />
        <Stack.Screen name="CompannyProfile" component={CompanyProfile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="AllContracts" component={AllContracts} />
        <Stack.Screen name="TransactionHistory" component={TransactionHistory} />
        <Stack.Screen name="EndContract" component={EndContract} />
      </Stack.Navigator>
    </>
  );
};

export default StackNavigation;
