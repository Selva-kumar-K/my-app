import { configureStore } from '@reduxjs/toolkit';
import productSlice from '../features/counter/productSlice';
import formSlice from '../features/counter/formSlice';


export const store = configureStore({
  reducer: {
    product : productSlice,
    form : formSlice
  },
});
