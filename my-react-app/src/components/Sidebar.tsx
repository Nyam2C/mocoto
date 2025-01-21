import React from "react";

interface SidebarProps {
    isExpanded: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isExpanded, toggleSidebar }) => {
    return (
        <div
            className={`w-[60px] bg-[#000000] text-white h-screen fixed right-0 top-0 transition-all duration-300`}
        >
            <div className={`flex justify-center text-center`}>
                <ul className="mt-4 space-y-4">
                    <li>
                        <button
                            onClick={toggleSidebar}
                            className="flex flex-col justify-center items-center p-[7px] gap-[10px] w-[45px] h-[45px] hover:bg-[#37373F] rounded-[10px]"
                        >
                        </button>
                        <span className="text-[10px]">
                            내 투자
                        </span>
                    </li>
                    <li>
                        <button
                            onClick={toggleSidebar}
                            className="flex flex-col justify-center items-center p-[7px] gap-[10px] w-[45px] h-[45px] hover:bg-[#37373F] rounded-[10px]"
                        >
                        </button>
                        <span className="text-[10px]">
                            관심
                        </span>
                    </li>
                    <li>
                        <button
                            onClick={toggleSidebar}
                            className="flex flex-col justify-center items-center p-[7px] gap-[10px] w-[45px] h-[45px] hover:bg-[#37373F] rounded-[10px]"
                        >
                        </button>
                        <span className="text-[10px]">
                            최근 본
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;