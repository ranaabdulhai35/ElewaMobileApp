import axios from 'axios';
import {
  requestHandler,
  successHandler,
  errorHandler,
} from './requestModifications';
import {BASE_URL} from '@env';
const httpRequest = (
  config = {
    headers: {contentType: 'application/json'},
  },
) => {
  const instance = axios.create({
    baseURL: `${BASE_URL}`,
    headers: {
      'Content-Type': config.headers.contentType || 'application/json',
    },
  });

  instance.interceptors.request.use(requestHandler);
  instance.interceptors.response.use(successHandler, errorHandler);
  return instance;
};

export default httpRequest();
