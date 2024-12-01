import { useState } from "react"
import Scorecard from "./Scorecard";



const Key = () => {
    const [isPlayer,setIsPlayer] = useState(true);
  return (
    <div className="p-2 bg-gray-900 rounded-md text-white w-1/5 h-[250px]  ml-10 mt-10">
        {isPlayer ? ( 
            <Scorecard key="player1" playerName ="Player1"/>
        ) : (
            <Scorecard key="player2"  playerName ="Player2"/>
         )}
         <button className="bg-white mt-16 ml-20 font-semibold text-black p-2 rounded-lg" onClick={()=>setIsPlayer((prevPlayer)=>!prevPlayer)}>Change Player</button>
    </div>
  )
}
/*
here without key prop the virtual dom will do no change in the score because the structure is same virtual dom didnt know if any changes have been made thats why there is no change in the score while the player name is changing because the structure is same.
  <div className="p-2 bg-gray-900 rounded-md text-white w-1/5 h-[250px]  ml-10 mt-10">
        {isPlayer ? ( 
            <Scorecard playerName ="Player1"/>
        ) : (
            <Scorecard  playerName ="Player2"/>
         )}
         <button className="bg-white mt-16 ml-20 font-semibold text-black p-2 rounded-lg" onClick={()=>setIsPlayer((prevPlayer)=>!prevPlayer)}>Change Player</button>
    </div>
*/
export default Key