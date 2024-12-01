import { useState } from "react"


const Scorecard = ({playerName}:any) => {
    const[score,setScore] = useState(0);
  return (
    <div>
        <h1 className="text-2xl font-bold ml-24 ">{playerName}</h1>
        <div className="  flex space-x-5 p-2 ml-16 mt-6 text-4xl">
        <button className="bg-white text-black  h-10 w-10 flex items-center justify-center" onClick={()=>setScore((prevScore) => prevScore > 0 ? prevScore - 1 : 0)}>-</button>
        <span>{score}</span>        
        <button className="bg-white text-black  h-10 w-10 flex items-center justify-center" onClick={()=>setScore((prevScore) => prevScore + 1)}>+</button>
        </div>
    </div>
  )
}

export default Scorecard