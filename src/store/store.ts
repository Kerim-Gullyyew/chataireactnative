import {configureStore} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import loginReducer from './features/login/loginSlice';

const loginPersistConfig = {
  key: 'login',
  version: 1,
  storage: AsyncStorage,
  whitelist: ['isLoggedIn', 'user'],
};

const persistedLoginReducer = persistReducer(loginPersistConfig, loginReducer);

export const store = configureStore({
  reducer: {
    login: persistedLoginReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
