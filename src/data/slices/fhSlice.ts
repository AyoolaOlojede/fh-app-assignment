
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GuestRooms } from 'src/domain/models/GuestRooms';
import { Room } from '../../domain/models/Room';

const initialState: GuestRooms = {
  rooms: [],
};
const fhSlice = createSlice({
  name: 'rooms',
  initialState,
  reducers: {
    addRoom(state, action: PayloadAction<Room>) {
        state.rooms.push(action.payload);
    },
    removeRoom(state, action:PayloadAction<string>) {
        let index = state.rooms.findIndex(({ id }) => id === action.payload);
        state.rooms.splice(index, 1);
    },
    getRooms(state, action) {
      return action.payload;
    },
    addChild(state, action: PayloadAction<number>) {
      let index = action.payload;
      const children = state.rooms[index].children;

      children?.push({
      ...children,
      age: 1,
    });
    },
    removeChild(state, action: PayloadAction<number>) {
      let index = action.payload;
      const children = state.rooms[index].children;
      children?.splice(index, 1);
    },
    updateChild(state, action: PayloadAction<{index: number,
      childIndex: number,
      age: number}>) {
      const children = state.rooms[action.payload.index].children;
      if(children)
      {
        children[action.payload.childIndex] = {age: action.payload.age};
        state.rooms[action.payload.index] = {
          ...state.rooms[action.payload.index],
          children,
        };
      }
      
  

    },
    updateGuestsCount(state, action: PayloadAction<Room>) {
      let index = state.rooms.findIndex(({ id }) => id === action.payload.id);
      state.rooms[index] = {
        ...state.rooms[index],
        ...action.payload,
      };
      console.log(state.rooms);
    },
  }
})

export const { addRoom, removeRoom ,
   updateGuestsCount ,addChild ,removeChild ,updateChild} = fhSlice.actions

export default fhSlice.reducer