import { useState } from "react";

function ChiledComponent({ sendFunction }) {
    const [addToParent, setAddToParent] = useState('');

    const handleParentData = () => {
        sendFunction(addToParent);
        setAddToParent('')
        
    };

    return (
        <div>
            <input
                onChange={(e) => setAddToParent(e.target.value)}
                type="text"
                value={addToParent}
            />
            <button onClick={handleParentData}>Add to Parent</button>
        </div>
    );
}

export default ChiledComponent;
