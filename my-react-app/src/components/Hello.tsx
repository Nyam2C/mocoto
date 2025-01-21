import React, { useState, useEffect } from "react";

interface HelloProps {
    isExpanded: boolean;
}

const Hello: React.FC<HelloProps> = ({ isExpanded }) => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    return (
        <div
            className={`w-[320px] bg-[#000000] text-white h-screen fixed right-0 top-0 transition-transform duration-300 transform ${hasMounted ? (isExpanded ? "animate-slideIn" : "animate-slideOut") : ""}`}
        >
            Hello
        </div>
    );
};

export default Hello;