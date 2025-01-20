import React, { useState } from "react";
import Header from './components/Header';
import Sidebar from "./components/Sidebar";

function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex h-screen bg-[#17171C]">
      <div className={`flex-grow transition-all duration-300 ${isExpanded ? 'mr-[300px]' : 'mr-[55px]'}`}>
        <Header />
        <div className="mt-4">
        </div>
      </div>
      <Sidebar isExpanded={isExpanded} toggleSidebar={toggleSidebar} />
    </div>
  )
}

export default App;