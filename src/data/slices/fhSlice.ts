
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Room } from '../../domain/models/Room';
import { DEFAULT_GUEST_ROOMS, GuestRoomsConverter } from 'src/utils/guestRoomUtil';


let inputParam ='';
const initialState: Room[] = GuestRoomsConverter(inputParam);
const fhSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    reset: () => initialState,
    addRoom(state, action: PayloadAction<Room>) {
        state.push(action.payload);
    },
    removeRoom(state, action:PayloadAction<string>) {
        let index = state.findIndex(({ id }) => id === action.payload);
        state.splice(index, 1);
    },
    getRooms(state, action) {
      return action.payload;
    },
    addChild(state, action: PayloadAction<number>) {
      let index = action.payload;
      const children = state[index].children;

      children?.push({
      ...children,
      age: 1,
    });
    },
    removeChild(state, action: PayloadAction<number>) {
      let index = action.payload;
      const children = state[index].children;
      children?.splice(index, 1);
    },
    updateChild(state, action: PayloadAction<{index: number,
      childIndex: number,
      age: number}>) {
      const children = state[action.payload.index].children;
      if(children)
      {
        children[action.payload.childIndex] = {age: action.payload.age};
        state[action.payload.index] = {
          ...state[action.payload.index],
          children,
        };
      }
      
  

    },
    updateGuestsCount(state, action: PayloadAction<Room>) {
      let index = state.findIndex(({ id }) => id === action.payload.id);
      state[index] = {
        ...state[index],
        ...action.payload,
      };
    },
  }
})

export const {reset, addRoom, removeRoom ,
   updateGuestsCount ,addChild ,removeChild ,updateChild} = fhSlice.actions

export default fhSlice.reducer