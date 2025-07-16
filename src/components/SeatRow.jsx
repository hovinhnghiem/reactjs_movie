import React from "react";
import Seat from "./Seat";

const SeatRow = ({ row }) => {
  if (row.hang === "") {
    // Dòng đầu tiên là header số ghế
    return (
      <div className="flex justify-center items-center my-2">
        <span className="w-[45px]"></span> {/* Ô trống cho phần chữ cái bên trái */}
        <div className="flex gap-3">
          {row.danhSachGhe.map((seat, idx) => (
            <div key={idx} className="text-white font-bold w-10 text-center">{idx + 1}</div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center my-2">
      <span className="w-[40px] text-xl font-bold text-white">{row.hang}</span>
      <div className="flex gap-3">
        {row.danhSachGhe.map((seat) => (
          <Seat key={seat.soGhe} seat={seat} />
        ))}
      </div>
    </div>
  );
};

export default SeatRow;
