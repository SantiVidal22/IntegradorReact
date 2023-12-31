import {configureStore, combineReducers} from '@reduxjs/toolkit'
import persistReducer from 'redux-persist/es/persistReducer'
import categoriesReducer from './categories/categoriesSlice';
import productsReducer from './products/productSlice'
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';
import cartReducer from './cart/cartSlice';
import userReducer from './user/userSlice';
import ordersReducer from './orders/ordersSlice';
import recomendadosreducer from './recomendados/recomendadoSlice'

const reducers = combineReducers({
    categories: categoriesReducer,
    Products: productsReducer,
    cart: cartReducer,
    user: userReducer,
    orders: ordersReducer,
    Recomendados: recomendadosreducer,
  });

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'user'],
  };

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);