import React,{useState} from 'react'
import {useMemo} from 'react'
export default function Memo() {
    const[data,setInputValue]=useState('');
    const expensiveCalculation=(data) =>{
        console.log("Performing Calculation");
        return data.toUpperCase();
    };

    const memolizedResult = useMemo(() =>expensiveCalculation(data),[data]);
  return (
    <div>
        <label>data</label>
        <input type="text" value={data} onChange={(e)=>setInputValue(e.target.value)}/>
        <p>Original data: {data}</p>
        <p>Memolized Result: {memolizedResult}</p>
    </div>
  );
}
