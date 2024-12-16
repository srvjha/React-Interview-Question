import { useState } from "react";
import Card from "./utils/Card";
import Playground from "./Playground";

function App() {
  const cards = new Array(1).fill(null); // Creates an array of 8 elements
  const [onToast,setOnToast] = useState(false);


  return (
    <>
      <div className="flex flex-col bg-blue-400 h-screen">
        <div className="flex justify-center items-center rounded-lg ml-[560px] mt-5 bg-blue-950 text-white shadow-2xl shadow-black p-2 w-1/4 h-[60px]">
          <h1 className="font-semibold text-xl">Custom React Components</h1>
        </div>
        <div className="mt-14 h-screen w-full p-10">
          {!onToast ? 
          <div className=" grid grid-cols-4 gap-4 p-4" onClick={()=>setOnToast(true)}>
          {cards.map((_, index) => (
            <Card key={index} />
          ))}
        </div>:
        <Playground/>  
        }
          
        </div>
      </div>
    </>
  );
}

export default App;


