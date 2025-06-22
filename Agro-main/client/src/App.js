import React from 'react'
import Component from './component';
import Hello from './hello';
import Form from './Form'
import Report from './Report'
import Profit from './profit'
import Contact from './Contact';
import { Route, Routes } from "react-router-dom";
import SignupPage from './Signup';
import './global.css'
import LoginPage from './Login';


function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Component />} /> */}
        <Route path="/" element={<Hello />} />
        <Route path="/form" element={<Form />} />
        <Route path="/report" element={<Report/>} />
        <Route path="/profit" element={<Profit/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        </Routes>
    </div>
  );
}

export default App;
