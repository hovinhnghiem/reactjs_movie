import React, { useState } from "react";
import SeatRow from "./SeatRow";
import { useDispatch, useSelector } from "react-redux";
import { confirmBooking } from "../store/seatSlice";


const BookingForm = ({ danhSachGhe }) => {
  const dispatch = useDispatch();
  const { selectedSeats, bookings } = useSelector(state => state.seat);
  const [name, setName] = useState("");

  // Flatten danhSachGhe để tra cứu giá ghế
  const allSeats = danhSachGhe.flatMap(row => row.danhSachGhe || []);
  const selectedSeatObjects = allSeats.filter(seat => selectedSeats.includes(seat.soGhe));
  const totalPrice = selectedSeatObjects.reduce((total, seat) => total + seat.gia, 0);

  const handleConfirm = () => {
    if (!name || selectedSeats.length === 0) return;
    dispatch(confirmBooking({ name, totalPrice }));
    setName("");
  };

  return (
    <div className="min-h-screen text-white p-6" >
      {/* FORM INPUT */}
      <div className="flex justify-center gap-6 mb-6 items-end">
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-64 px-4 py-2 border border-white bg-transparent text-white rounded-md focus:outline-none"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">
            Number of Seats <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            readOnly
            value={selectedSeats.length}
            className="w-64 px-4 py-2 border border-white bg-transparent text-white rounded-md"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Total Price</label>
          <input
            type="text"
            readOnly
            value={totalPrice.toLocaleString() + " VND"}
            className="w-64 px-4 py-2 border border-white bg-transparent text-white rounded-md"
          />
        </div>

        <button
          onClick={handleConfirm}
          disabled={!name || selectedSeats.length === 0}
          className="mt-5 px-6 py-2 rounded-md bg-orange-500 text-black font-semibold hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Start Selecting
        </button>
      </div>

      {/* GHẾ */}
      <div className="flex justify-center w-full overflow-x-auto mb-8">
        <div className="inline-block">
          {danhSachGhe.map((row, idx) => (
            <SeatRow key={idx} row={row} />
          ))}
        </div>
      </div>
      {/* SCREEN THIS WAY */}
      <div className="flex justify-center mt-6 mb-10">
        <div className="bg-orange-500 text-black text-xl font-semibold tracking-widest py-4 px-60 uppercase text-center">
          Screen this way
        </div>
      </div>

      {/* BẢNG THÔNG TIN */}
      <table className="w-1/2 mx-auto border border-blue text-sm text-center">
        <thead className="bg-gray-800">
          <tr>
            <th className="border border-white p-2">Name</th>
            <th className="border border-white p-2">Seats</th>
            <th className="border border-white p-2">Total Price</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b, i) => (
            <tr key={i}>
              <td className="border border-white text-black bg-gray-300 p-2">{b.name}</td>
              <td className="border border-white text-black bg-gray-300 p-2">{b.seats.join(", ")}</td>
              <td className="border border-white text-black bg-gray-300 p-2">{(b.totalPrice || 0).toLocaleString()} VND</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingForm;
