import React, { useState } from 'react';
import axios from 'axios';

function BookingForm() {
  const [bookingData, setBookingData] = useState({
    roomNumber: '',
    checkInDate: '',
    checkOutDate: '',
    // อื่น ๆ ตามที่คุณต้องการ
  });

  const handleInputChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleBookingSubmit = async () => {
    try {
      // POST ข้อมูลไปยัง Express server
      const response = await axios.post('http://localhost:9000/api/bookings', bookingData);
      console.log(response.data.message);
      // ทำการจัดการต่อไปตามที่คุณต้องการ, เช่นแสดงข้อความ "จองห้องสำเร็จ"
    } catch (error) {
      console.error('เกิดข้อผิดพลาดในการจองห้อง:', error.message);
      // ทำการจัดการข้อผิดพลาดต่อไปตามที่คุณต้องการ
    }
  };

  return (
    <div>
      <h2>แบบฟอร์มการจองห้อง</h2>

      <input type="text" name="roomNumber" placeholder="หมายเลขห้อง" onChange={handleInputChange} />
      <input type="text" name="checkInDate" placeholder="วันที่เช็คอิน" onChange={handleInputChange} />
      <input type="text" name="checkOutDate" placeholder="วันที่เช็คเอาท์" onChange={handleInputChange} />
      <button onClick={handleBookingSubmit}>จองห้อง</button>
    </div>
  );
}

export default BookingForm;
