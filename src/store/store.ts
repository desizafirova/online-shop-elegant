import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './cart-slice';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

// this type has to describe how dispatchING will work, or which kind of data will be involved with dispatching in the application
export type AppDispatch = typeof store.dispatch;
