import React from 'react'
import { useState } from 'react';

const OtpPopup = ({ onClose, onSubmit }) => {
  const [otp, setOtp] = useState('');

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(otp);
  };

  return (
    <div className="otp-popup">
      <h2>กรอกรหัส OTP</h2>
      <input type="text" value={otp} onChange={handleOtpChange} />
      <button onClick={handleSubmit}>ยืนยัน</button>
      <button onClick={onClose}>ปิด</button>
    </div>
  )
}

export default OtpPopup
