import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home";
import Nav from "./components/NavBar/Nav";
import ManageBeat from "./components/Pages/ManageBeat";
import UploadBeat from "./components/Pages/UploadBeat";
import Footer from "./components/Footer/Footer";
import TransferOwner from "./components/Pages/TransferOwner";

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/manage-beat" element={<ManageBeat />} />
        <Route path="/upload" element={<UploadBeat />} />
        <Route path="/transfer-owner" element={<TransferOwner />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
