import React from "react";
import "./mission.css"

export default function Mission(){
    const csi = [
        {
            image:"challenge.svg",
            title:"Challenge",
            content:"Overcoming hurdles in computer engineering demands will and innovation, propelling us to new heights."
        },
        {
            image:"seizee.svg",
            title:"Seize",
            content:"To seize opportunities in tech, embrace change, stay agile, and leverage emerging technologies for success."
        },
        {
            image:"innovate.svg",
            title:"Innovate",
            content:"Innovation drives computer engineering, creating cutting-edge solutions that reshape our digital world."
        }
    ]
    const missions = csi.map(mission => {
        return(
            <div className="relative group">
            <div className="parent flex flex-col border-2 border-gray-400 p-4 text-white relative z-10 shadow-md shadow-gray-500">
                <img src={`/images/mission/${mission.image}`} alt="" className="w-32 h-32 md:w-40 md:h-40 self-center" />
                <span className="text-center font-bold text-lg md:text-lg lg:text-2xl uppercase">{mission.title}</span>
                <span className="text-center mt-2 md:mt-3 text-xs sm:text-sm lg:text-base xl:text-xl ">{mission.content}</span>
            </div>
            <div className="absolute top-0 left-0 w-full h-full opacity-0 gradient-dark-to-light transform  group-hover:opacity-100 group-hover:transform translate-x-0 z-0"></div>
        </div>    
        )
    })
    
    return(
        <div className="flex flex-col mt-10 sm:mt-12 md:mt-16 xl:mt-20">
        <span className="self-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">MISSION</span>
        <div className="grid gap-y-10 sm:gap-x-10 mt-16 mx-12 md:mx-16 lg:mx-20 xl:mx-24 grid-cols-1 sm:grid-cols-3">
            {missions}
        </div>
        </div>
    )
}