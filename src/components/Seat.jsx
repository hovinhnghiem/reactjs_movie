import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSeat } from "../store/seatSlice";

const Seat = ({ seat }) => {
  const dispatch = useDispatch();
  const { selectedSeats, bookings } = useSelector(state => state.seat);

  const isBooked = seat.daDat || bookings.some(b => b.seats.includes(seat.soGhe));
  const isSelected = selectedSeats.includes(seat.soGhe);

  // let seatClass = "ghe";
  // if (isBooked) seatClass = "gheDuocChon";
  // else if (isSelected) seatClass = "gheDangChon";

  return (
   <button
  className={`w-10 h-10 text-sm rounded border-2 ${
    isBooked
      ? "bg-orange-500 text-black border-orange-500 cursor-not-allowed"
      : isSelected
      ? "bg-green-500 text-black border-green-500"
      : "bg-white text-black border-orange-500 hover:scale-105 transition"
  }`}
  disabled={isBooked}
  onClick={() => dispatch(toggleSeat(seat.soGhe))}
>
  {seat.soGhe}
</button>
  );
};

export default Seat;
