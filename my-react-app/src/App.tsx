import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Header from './components/Header';
import Sidebar from "./components/Sidebar";
import Hello from "./components/Hello";
import Account from "./components/Account";
import Exchange from "./components/Exchange";
import Home from "./components/Home";

function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [istrue, setIstrue] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) setIstrue(true);
  };

  return (
    <Router>
      <div className="flex h-screen bg-[#17171C]">
        <div className={`flex-grow transition-all duration-300 ${isExpanded ? 'mr-[380px]' : 'mr-[60px]'}`}>
          <Header />
          <div id="main-content">
            <Routes>
              <Route path="/home" element={<div className="p-4"><Home /></div>} />
              <Route path="/exchange" element={<div className="p-4"><Exchange /></div>} />
              <Route path="/account" element={<div className="p-4"><Account /></div>} />
            </Routes>
          </div>
          <div className="mt-4">
          </div>
        </div>
        {istrue && <Hello isExpanded={isExpanded} />}
        <Sidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
      </div>
    </Router>
  )
}

export default App;