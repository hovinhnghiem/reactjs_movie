import BookingForm from "./components/BookingForm";
import danhSachGhe from "../danhSachGhe.json";
import './assets/BaiTapBookingTicket.css';
import bgImage from "./assets/bgmv.jpeg";

const App = () => {
  return (
    <div className="p-6 bg-cover bg-center" style={{
        backgroundImage: `url(${bgImage})`,
      }}> 
      <h1 className="flex justify-center text-5xl text-white">Movie Seat Booking</h1>
      <BookingForm danhSachGhe={danhSachGhe} />
    </div>
  );
};

export default App;
