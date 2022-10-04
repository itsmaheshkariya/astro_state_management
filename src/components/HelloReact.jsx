import { useState } from "react";
import { useStore } from '@nanostores/react';

import { counter, increaseCounter } from '../store/counter.js';
const HelloReact = () => {
    const [count, setCount] = useState(0);
    const commonCounter = useStore(counter);
    return (
        <div>
            <button 
            className="py-2 px-4 
                    bg-purple-500 
                    text-white 
                    font-semibold 
                    rounded-lg 
                    shadow-md 
                    hover:bg-purple-700 
                    focus:outline-none 
                    focus:ring-2 
                    focus:ring-purple-400 
                    focus:ring-opacity-75" 
            onClick={() => {
                setCount(count + 1)
                increaseCounter()
            }}>
               React clicks: {count} {commonCounter.value}
            </button>
        </div>
    );
}


export default HelloReact 