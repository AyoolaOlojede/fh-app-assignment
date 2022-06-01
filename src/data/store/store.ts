import {configureStore} from  '@reduxjs/toolkit';
import { DEFAULT_GUEST_ROOMS } from 'src/utils/guestRoomUtil';
import fhSlice from '../slices/fhSlice';


export const store = configureStore({
    reducer: {
        rooms:fhSlice
    },
    preloadedState : {
        rooms: DEFAULT_GUEST_ROOMS
    }
        
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch