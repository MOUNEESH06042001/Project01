import React from 'react'
import { useState,useCallback } from 'react';
    const Callback=()=>{
        const[count,setCount]=useState(0);
    const handleClick = useCallback(()=>{
        console.log(`button clicked. count: ${count}`);
    },[count]);
  return (
    <div>
        <button onClick={handleClick}>CLICK ME</button>
        <p>Count: {count}</p>
        <button onClick={() =>setCount(count+1)}>INCREMENT</button>
    </div>
  );
};
export default Callback;
