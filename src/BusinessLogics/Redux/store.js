import logger from 'redux-logger';
import {
  configureStore,
  createSlice,
  combineReducers,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import storage from '@react-native-community/async-storage';
import {startMapper} from 'react-native-reanimated';

export const AuthSlice = createSlice({
  name: 'auth',
  // initialState,
  initialState: {
    count: 0,
    authDataArray: [],
    token: null,
    apimatrics: [],
    finalmetrics: [],
    token_auth: null,
    welcomBrands: [],
    latitude: null,
    customer: '',
    Loading: false,
    currentScreen: '',
    currentProductCode: '',
    menu: [],
    isProfileCompleted: false,
    role: null,
    id: {},
  },
  reducers: {
    Latitude: {
      reducer: (state, action) => {
        state.latitude += 1;
      },
    },

    Customer: {
      reducer: (state, action) => {
        state.customer = action.payload;
      },
    },
    setCurrentScreen: {
      reducer: (state, action) => {
        state.currentScreen = action.payload;
      },
    },
    setCurrentProductCode: {
      reducer: (state, action) => {
        state.currentProductCode = action.payload;
      },
    },
    setLoading: {
      reducer: (state, action) => {
        state.Loading = action.payload;
      },
    },
    setMenu: {
      reducer: (state, action) => {
        state.menu = action.payload;
      },
    },
    Auth_Metrics: {
      reducer: (state, action) => ({
        ...state,
        finalmetrics: [...state.finalmetrics, action.payload],
      }),
    },
    Welcom_Brands: {
      reducer: (state, action) => ({
        welcomBrands: [action.payload],
      }),
    },

    log_out: {
      reducer: (state, action) => {
        state.token = null;
      },
    },
    setToken: {
      reducer: (state, action) => {
        state.token = action.payload;
      },
    },
    setIsProfileCompleted: {
      reducer: (state, action) => {
        state.isProfileCompleted = action.payload;
      },
    },
    setRole: {
      reducer: (state, action) => {
        state.role = action.payload;
      },
    },

    setId: {
      reducer: (state, action) => {
        state.id = action.payload;
      },
    },
  },
});

export const HomeSlice = createSlice({
  name: 'home',
  // initialState,
  initialState: {
    favoriteBrads: [],
    productList: [],
    newTranding: [],
    Recommended: [],
  },
  reducers: {
    log_out: {
      reducer: (state, action) => {
        state.favoriteBrads = action.payload;
      },
    },
  },
});

export const CartSlice = createSlice({
  name: 'card',
  // initialState,
  initialState: {
    cardList: [],
    cardCount: 0,
  },
  reducers: {
    totalCounter: {
      reducer: (state, action) => {
        return {
          ...state,
          cardCount: state.cardCount + action.payload,
        };
      },
    },
    cardDetals: {
      reducer: (state, action) => {
        const product_Id = action.payload.id;

        const productExists = state.cardList.some(
          item => item.id === product_Id,
        );

        if (productExists) {
          return {
            ...state,
            cardList: state.cardList,
          };
        } else {
          return {
            ...state,
            cardList: [...state.cardList, action.payload],
          };
        }
      },
    },
    increment: {
      reducer: (state, action) => {
        const Latest = action.payload;
      },
    },
    decrement: {
      reducer: (state, action) => {
        const Latest = action.payload;
      },
    },
  },
});

const reducer = combineReducers({
  auth: AuthSlice.reducer,
  home: HomeSlice.reducer,
  card: CartSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['Image_Scan_Handler'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(logger),
});

export const persistor = persistStore(store);
