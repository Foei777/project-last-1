import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function Projects() {
  const [roomNumber, setRoomNumber] = useState('');
  const [roomPrice, setRoomPrice] = useState('');

  const handleReservation = async (number, price) => {
    try {
      const response = await axios.post('http://localhost:9000/reservation', {
        roomNumber: number,
        roomPrice: price,
      });

      console.log(response.data);
    } catch (error) {
      console.error('เกิดข้อผิดพลาดในการจองห้อง:', error.message);
    }
  };

  return (
    <>
      {/* ... โค้ดเดิม ... */}
      <div class="col-xl-4 col-lg-5">
        <div class="featured-text text-center text-lg-left">
          <h4>แนวห้องที่1 </h4>
          <p class="text-black-100 mb-0">ราคา 500฿/คืน</p>
          <p class="text-black-100 mb-0">หมายเลขห้องที่ 101 </p>
          <button onClick={() => handleReservation('101', 500)}>จองห้องที่1</button>
        </div>
      </div>
      {/* ... โค้ดเดิม ... */}
    </>
  );
}

export default Projects;
