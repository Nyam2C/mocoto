import React from "react";

interface SidebarProps {
    isExpanded: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isExpanded, toggleSidebar }) => {
    return (
        <div
            className={`${isExpanded ? "w-[300px]" : "w-[55px]"} bg-gray-800 text-white h-screen fixed right-0 top-0 transition-all duration-300`}
        >
            <button
                onClick={toggleSidebar}
                className="p-4 hover:bg-blue-600 text-white w-full"
            >
            </button>
            <ul className="mt-4 space-y-4">
                <li>
                    <button
                        onClick={toggleSidebar}
                        className="p-4 hover:bg-blue-600 text-white w-full"
                    >
                    </button>
                </li>
                <li>
                    <button
                        onClick={toggleSidebar}
                        className="p-4 hover:bg-blue-600 text-white w-full"
                    >
                    </button>
                </li>
                <li>
                    <button
                        onClick={toggleSidebar}
                        className="p-4 hover:bg-blue-600 text-white w-full"
                    >
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;