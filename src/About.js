import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // เพิ่ม Routes เข้ามา
import "./About.css"
import Projects from './Projects';

function About() {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numGuests, setNumGuests] = useState(1);

  const handleCheckInDateChange = (e) => {
    setCheckInDate(e.target.value);
  };

  const handleCheckOutDateChange = (e) => {
    setCheckOutDate(e.target.value);
  };

  const handleNumGuestsChange = (e) => {
    setNumGuests(e.target.value);
  };

  const handleReservationSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:9000/reservation', {
        checkInDate,
        checkOutDate,
        numGuests,
      });

      console.log(response.data);
      console.log('Check-in Date:', checkInDate);
      console.log('Check-out Date:', checkOutDate);
      console.log('Number of Guests:', numGuests);

      // ไม่ต้องทำการ redirect ที่นี่
    } catch (error) {
      console.error('เกิดข้อผิดพลาดในการส่งข้อมูล', error.message);
    }
  };

  return (
    <Router>
      <>
        <section className="about-section text-center" id="about">
          <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 justify-content-center">
              <div className="col-lg-8">
                <h2 className="text-white mb-4">โปรดเลือกการจองของคุณ</h2>
                <p className="text-white-50">
                  <a href="https://startbootstrap.com/theme/grayscale/">the preview page.</a>
                  The theme is open source, and you can use it for any purpose, personal or commercial.
                </p>
                <form>
                  <label htmlFor="checkInDate">วันที่เข้าที่พัก :</label>
                  <input
                    type="date"
                    id="checkInDate"
                    value={checkInDate}
                    onChange={handleCheckInDateChange}
                  />
                  <br />

                  <label htmlFor="checkOutDate">วันออกที่พัก :</label>
                  <input
                    type="date"
                    id="checkOutDate"
                    value={checkOutDate}
                    onChange={handleCheckOutDateChange}
                  />
                  <br />

                  <label htmlFor="numGuests">จำนวนผู้เข้าพัก :</label>
                  <input
                    type="number"
                    id="numGuests"
                    value={numGuests}
                    onChange={handleNumGuestsChange}
                  />
                  <br />

                  <div>
                    <Link to="/projects">
                      <button type="button" onClick={handleReservationSubmit}>
                        Next
                      </button>
                    </Link>
                  </div>
                  <Routes>
                    <Route path="/projects" element={<Projects />} />
                  </Routes>

                </form>
              </div>
            </div>
    
          </div>
        </section>
      </>
    </Router>
  );
}

export default About;
