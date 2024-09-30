import React from "react";
import "./style.css"

export default function Landing(){
    return(
        <div className="relative w-screen m-0 min-h-screen">
        <div
          className="absolute inset-0 bg-opacity-50 bg-black bg-no-repeat bg-cover bg-fixed" 
          style={{ backgroundImage: 'url("./images/landingg.png")'}}
        ></div>
        <div className="cssanimation sequence fadeInBottom absolute inset-0 flex flex-col items-center justify-center text-white">
          <p className="text-purple-400 text-xl md:text-2xl font-semibold">WELCOME TO</p>
          <p className="self-center text-4xl md:text-5xl lg:text-6xl font-bold">COMPUTER SOCIETY OF INDIA</p>
          <p className="self-center md:text-xl  lg:text-2xl">THAKUR COLLEGE OF ENGINEERING AND TECHNOLOGY</p>
        </div>
      </div>
    )
}