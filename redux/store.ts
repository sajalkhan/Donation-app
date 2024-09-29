import { configureStore, combineReducers } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
// import { logger } from 'redux-logger';

import User from './reducers/User';

// Creating a rootReducer that combines all reducers in the app
const rootReducer = combineReducers({
  user: User,
});

// Configuring the redux-persist library to persist the root reducer with AsyncStorage
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};

// Creating a new persisted reducer with the configuration and root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const customMiddleWare = (defaultMiddleware: any) => {
  const middleware = defaultMiddleware({
    serializableCheck: false, // Disable serializable check to avoid serialization errors
  });

  // Add logger middleware to the array
  // middleware.push(logger);
  return middleware;
};

// Creating a new Redux store using the configureStore function
const store = configureStore({
  reducer: persistedReducer,
  middleware: customMiddleWare,
});

// Exporting the store to be used in the app
// Also exporting the persistor object created with the persistStore function from redux-persist
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
export default store;
