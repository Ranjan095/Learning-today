import logo from './logo.svg';
import './App.css';
import PinTab from './Components/PinTab';
import Counter from './Components/Counter';
import { useState } from 'react';

function App() {
  let [otp,setOtp]=useState('')
  return (
    <div className="App">
      <PinTab length={3} maxChar={3} setOtp={setOtp}/>
      <h3>OTP: {otp}</h3>
    </div>
  );
}

export default App;
