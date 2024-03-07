// LoginComponent.js

import React, { useState } from 'react';
import "./Style.css"
import "./Header.css"
import axios from 'axios';

const LoginComponent = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [Email, setEmail] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePhonenumberChange = (e) => {
    setPhonenumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleLoginClick = async () => {
    try {
      const response = await axios.post('http://localhost:8555/submit', {
        username,
        phonenumber,
        email: Email,
      });
  
      console.log(response.data);
      // ทำสิ่งที่คุณต้องการกับ response จาก server
    } catch (error) {
      console.error('Error submitting data:', error.message);
    }
  };

  return (
    <div className="login-component">
      <h2>ข้อมูลผู้เข้าพัก</h2>
      <label>
        ชื่อผู้เข้าพัก:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <label>
        เบอร์โทรศัพท์:
        <input type="phonenumber" value={phonenumber} onChange={handlePhonenumberChange} />
      </label>
      <label>
        อีเมล:
        <input type="Email" value={Email} onChange={handleEmailChange} />
      </label>
      <button onClick={handleLoginClick}>ยืนยัน</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default LoginComponent;
