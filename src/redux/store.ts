import { configureStore } from '@reduxjs/toolkit';

// @ts-ignore
import { shazamCoreApi } from './services/shazamCore';
// @ts-ignore
import playerReducer from './features/playerSlice';

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleware),
});