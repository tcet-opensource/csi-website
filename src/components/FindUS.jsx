import React from "react";
import "../App.css";
import "animate.css";

function FindUS() {
  return (
    <>
    <div className="flex flex-row mt-10 sm:mt-12 md:mt-16 xl:mt-20 justify-center "> 
      <img src="/pin.svg" className="w-8 h-8 md:w-12 md:h-12"/>
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">Find Us</h1>
    </div>
    <div className="flex flex-col sm:flex-row py-6 justify-center align-middle mx-12 md:mx-16 lg:mx-20 xl:mx-24">
      <div className="flex justify-center">
        <iframe
          className="rounded md:rounded-md sm:mr-8 md:w-5/8"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.7458391065666!2d72.87203067510374!3d19.20630028202532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0e57647569d%3A0xc0aec329c82d3555!2sThakur%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1694790431300!5m2!1sen!2sin"           
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="flex flex-col text-white text-sm sm:text-base md:text-lg xl:text-xl  md:w-2/5">
        <div className="pt-4"> 
          <span className="font-bold">Thakur College of Engineering and Technology, </span>
          Thakur Campus, Kandivali East, Gate No:5, Mumbai: 400101
        </div><br/>
        <div className="flex flex-row items-center">
          <img src="/mail.svg" className="w-8 h-8 pr-2 "/>
          <span className="">officialcsitect@gmail.com</span>
        </div>                  
        <div className="flex flex-row">
          <img src="/call.svg" className="w-8 h-8 pr-2 "/>
          <span className="pt-1.5 flex"><p className="font-semibold">Purvashi Shah</p>: 9552276964</span>
        </div>
        <div className="flex flex-row">
          <img src="/call.svg" className="w-8 h-8 pr-2 "/>
          <span className="pt-1.5 flex"><p className="font-semibold">Yogesh Yadav</p>: 9820454730</span> 
        </div>
      </div>
    </div>
    </>
  );
}

export default FindUS;
