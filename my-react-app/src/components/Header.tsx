import React from 'react';

function Header() {

    return (
        <> 
            <div className="fixed flex flex-row text-0 left-0 right-0 items-center p-[15px] w-full h-[60px] text-[13.5px]">
                <div className="flex flex-1 justify-center font-inter font-bold text-[17px] min-w-[75px] text-center text-white">
                    국두두
                </div>
                <div className="flex flex-1 flex-row justify-center items-center px-[10px] gap-[25px] min-w-[1200px] h-[40px]">
                    <div className="flex flex-row justify-center items-center p-0 gap-[35px] w-[184px] h-[45px]">
                        <span className="font-inter font-bold leading-[21px] text-center text-[#76767A]">
                            홈
                        </span>
                        <span className="font-inter font-bold leading-[21px] text-center text-[#76767A]">
                            거래소
                        </span>
                        <span className="font-inter font-bold leading-[21px] text-center text-[#76767A]">
                            내 계좌
                        </span>
                    </div>
                    <div className="flex flex-row justify-center items-center px-[70px] py-[5px] gap-[10px] w-[203px] h-[37px] bg-[#26262D] rounded-[25px]">
                        <input
                            type="text"
                            placeholder="검색"
                            className="w-[32px] h-[21px] font-inter font-bold leading-[21px] text-center text-[#76767A] bg-transparent border-none focus:outline-none"
                        />
                    </div>
                </div>
                <div className="flex-1">
                    로그인인
                </div>
            </div>

        </>
    )
}

export default Header