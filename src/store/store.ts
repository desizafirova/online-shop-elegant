import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './cart-slice';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

// this type has to describe how dispatchING will work, or which kind of data will be involved with dispatching in the application
export type AppDispatch = typeof store.dispatch;

// Therefore RootState now is a function type. We are actually interested in the return value of that function though, not in the overall function. And thankfully, TypeScript has a utility type - Return type(part of TS)
export type RootState = ReturnType<typeof store.getState>;
