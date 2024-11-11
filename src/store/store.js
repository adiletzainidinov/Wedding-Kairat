import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { weldingSlice } from './slices/WeldingSlice';

export const rootReducer = combineReducers({
  [weldingSlice.name]: weldingSlice.reducer,
});

const persistConfig = {
  key: 'welding',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

 export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;