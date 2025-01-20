import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

function Header() {
    const [activeButton, setActiveButton] = useState<string | null>(null);
    const navigate = useNavigate();

    return (
        <>
            <div className=" flex flex-row text-0 left-0 right-0 items-center p-[15px] w-full h-[60px]">
                <div className="flex flex-1 font-inter font-bold text-[17px] min-w-[75px] text-center text-white">
                    <button
                        onClick={() => {
                            setActiveButton("home");
                            navigate("/home");
                        }}
                    >
                        국두두
                    </button>
                </div>
                <div className="flex flex-row justify-center font-inter font-bold leading-[21px] text-center px-[10px] gap-[25px] min-w-[800px] h-[40px] text-[13.75px] text-[#76767A]">
                    <div className="flex flex-row justify-center items-center gap-[35px] w-[184px] h-[45px]">
                        <button
                            onClick={() => {
                                setActiveButton("home");
                                navigate("/home");
                            }}
                            className={`hover:text-white ${activeButton === "home" ? "text-white" : "text-[#76767A]"
                                }`}
                        >
                            홈
                        </button>
                        <button
                            onClick={() => {
                                setActiveButton("exchange");
                                navigate("/exchange");
                            }}
                            className={`hover:text-white ${activeButton === "exchange" ? "text-white" : "text-[#76767A]"
                                }`}
                        >
                            거래소
                        </button>
                        <button
                            onClick={() => {
                                setActiveButton("account");
                                navigate("/account");
                            }}
                            className={`hover:text-white ${activeButton === "account" ? "text-white" : "text-[#76767A]"
                                }`}
                        >
                            내 계좌
                        </button>
                    </div>
                    <div className="flex flex-row justify-center items-center px-[70px] py-[5px] gap-[10px] w-[203px] h-[37px] bg-[#26262D] rounded-[25px] text-[#76767A]">
                        검색
                    </div>
                </div>
                <div className="flex flex-1 justify-end ">
                    <button className=" hover:bg-blue-600 text-white text-center  text-[12.5px] font-inter font-bold  leading-[15px]  text-[#E1E1E4] justify-center items-center min-w-[60px] h-[33px] bg-[#3485FA] rounded-[10px]">
                        로그인
                    </button>
                </div>
            </div>
        </>
    );
}

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/home" element={<div className="p-4"></div>} />
                <Route path="/exchange" element={<div className="p-4"></div>} />
                <Route path="/account" element={<div className="p-4"></div>} />
            </Routes>
        </Router>
    );
}

export default App;
