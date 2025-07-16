import { createSlice } from "@reduxjs/toolkit";

const seatSlice = createSlice({
  name: "seat",
  initialState: {
    selectedSeats: [],
    bookings: [],
  },
  reducers: {
    toggleSeat: (state, action) => {
      const seat = action.payload;
      const exists = state.selectedSeats.includes(seat);
      if (exists) {
        state.selectedSeats = state.selectedSeats.filter(s => s !== seat);
      } else {
        state.selectedSeats.push(seat);
      }
    },
    confirmBooking: (state, action) => {
      const { name } = action.payload;
      state.bookings.push({ name, seats: [...state.selectedSeats], totalPrice: action.payload.totalPrice });
      state.selectedSeats = [];
    },
    resetSeats: (state) => {
      state.selectedSeats = [];
    },
  },
});

export const { toggleSeat, confirmBooking, resetSeats } = seatSlice.actions;
export default seatSlice.reducer;
