// import {clearAuthStorage} from '../redux/UserSlice';
// import {store} from '../redux/Store';
// import Config from "react-native-config";
import {TOKEN} from '@env';

export const requestHandler = request => {
  // const state = store.getState();

  // console.log(state, 'sssssssssssssssssssss///////////');

  const token = TOKEN;
  if (token) request.headers.Authorization = `Bearer ${token}`;
  return request;
};

export const successHandler = response => {
  return {
    ...response,
    data: response.data,
  };
};
export const errorHandler = error => {
  const {status} = error.response;
  if (status === 401) {
    // const {dispatch} = store;
    // dispatch(clearAuthStorage());
  }
  return Promise.reject(error);
};
