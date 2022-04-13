
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
  }
})

export const { addRoom, removeRoom } = fhSlice.actions

export default fhSlice.reducer