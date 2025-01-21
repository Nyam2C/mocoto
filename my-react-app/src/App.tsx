import React, { useState } from "react";
import Header from './components/Header';
import Sidebar from "./components/Sidebar";
import Hello from "./components/Hello";

function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [istrue, setIstrue] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
    if(!isExpanded) setIstrue(true);
  };

  return (
    <div className="flex h-screen bg-[#17171C]">
      <div className={`flex-grow transition-all duration-300 ${isExpanded ? 'mr-[380px]' : 'mr-[60px]'}`}>
        <Header />
        <div className="mt-4">
        </div>
      </div>
      {istrue && <Hello isExpanded={isExpanded} />}
      <Sidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
    </div>
  )
}

export default App;