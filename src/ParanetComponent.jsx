import {useState } from "react";
import ChildComponent from "./ChildComponent";

function ParanetComponent() {
    const [childData, setChildData] = useState('');

    const handleChildData = (data) => {
        setChildData(data);
    };


    return (
        <div>
            <p>{childData}</p>
            <ChildComponent sendFunction={handleChildData} />
        </div>
    );
}

export default ParanetComponent;
