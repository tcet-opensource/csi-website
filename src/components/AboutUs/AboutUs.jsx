import React from "react";
import "animate.css";

function AboutUs() {
  return (
    <>
      <h1 className="text-center text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-6 ">ABOUT US</h1>
      <div className=" w-auto mt-10  h-full mx-12 md:mx-16 lg:mx-20 xl:mx-24 flex flex-col-reverse md:flex-row align-center justify-center animate__animated animate__fadeIn text-white">
        <div className="p-2 md:p-0 text-justify text-lg sm:text-lg md:text-xl xl:text-xl md:mr-10 md:w-1/2 lg:w-3/5 xl:leading-10">
          CSI-TCET is the student branch of the Computer Society of India
          (CSI) at Thakur College of Engineering and Technology (TCET),
          Mumbai. The mission of CSI is to facilitate research, knowledge
          sharing, learning and innovation, career enhancement and nurturing
          new talents. Today, CSI has members from all over the nation
          including famous industry leaders, brilliant scientists and
          dedicated academicians. CSI-TCET has more than 250 registered
          members and the chapter is growing day by day. Activities are being
          continuously planned and conducted and CSI-TCET has further gone on
          to become one of the most active student organizations at TCET.
        </div>
        <img src="/home.jpg" className="rounded-lg mb-2 md:w-1/2 lg:w-2/5  md:mb-0" />
      </div>
    </>
  );
}

export default AboutUs;
