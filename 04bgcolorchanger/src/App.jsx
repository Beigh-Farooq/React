import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{backgroundColor: color}}>
          <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
              <button 
                onClick={() =>setColor('red')}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
                style={{backgroundColor: "red"}}>Red</button>
              <button 
                onClick={() =>setColor('green')}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
                style={{backgroundColor: "green"}}>Green</button>
              <button 
                onClick={() =>setColor('blue')}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
                style={{backgroundColor: "Blue"}}>Blue</button>
              <button 
                onClick={() =>setColor('orange')}
                className={`bg-orange-400 outline-none px-4 py-1 rounded-full text-white`}>
                Orange
              </button>
              <button 
                onClick={() =>setColor('black')}
                className={`bg-black outline-none px-4 py-1 rounded-full text-white`}>
                Black
              </button>
              <button 
                onClick={() =>setColor('maroon')}
                className={`bg-amber-950 outline-none px-4 py-1 rounded-full text-white`}>
                Maroon
              </button>
              <button 
                onClick={() =>setColor('pink')}
                className={`bg-pink-500 outline-none px-4 py-1 rounded-full text-white`}>
                Pink
              </button>
              <button 
                onClick={() =>setColor('Grey')}
                className={`bg-gray-600 outline-none px-4 py-1 rounded-full text-white`}>
                Grey
              </button>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
