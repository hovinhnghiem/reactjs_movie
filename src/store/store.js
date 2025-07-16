import { configureStore } from "@reduxjs/toolkit";
import seatReducer from "./seatSlice";

export default configureStore({
  reducer: {
    seat: seatReducer,
  },
});
