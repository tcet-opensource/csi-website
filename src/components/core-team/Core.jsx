import React from "react";
import "./core.css";
import { coreDetails } from "./team";
import { motion } from "framer-motion";

function Core() {
  const coreDetail = coreDetails.map((details) => {
    return (
      <div className="postn mx-6 my-4 flex flex-col ">
        <motion.div
          className="rounded-full w-7/12 px-2 items-center justify-center sm:11/12"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1}}
          transition={{
            duration: 1,
            delay: 0.25,
            ease: [0, 0.71, 0.2, 1.01],
          }}>
          <img
            src={details.image}
            className="rounded-full"
          />
        </motion.div>

        <div className="font-semibold pt-5 text-xl">{details.name}</div>
        <div className="underline underline-offset-4">{details.position}</div>
        <div className="social flex flex-row space-between">
          <a href={details.instagram}>
            <img src="/icons/instagram.svg" className="w-5 h-5 m-1" />
          </a>
          <a href={details.linkedIn}>
            <img src="/icons/linkedin.svg" className="w-5 h-5 m-1" />
          </a>
          <p>{details.detail}</p>
        </div>
      </div>
    );
  });
  return (
    
      <div className="bg-[url('/csi-website.png')] bg-fixed bg-[#020005]">
        <h1 className="text-center text-3xl p-2 text-white"><b>OUR TEAM</b></h1>
        <h1 className="text-center text-3xl m-5 p-5 text-white">
          FACULTY IN-CHARGE
        </h1>
        <div className="flex flex-col items-center justify-center md:flex-row">
          <div className="flex flex-col align-center justify-center items-center my-10 mx-10 w-1/2 md:w-1/4 text-white border-2 border-stone-50 rounded-lg shadow-lg hover:shadow-gray-500">
            <img
              src="/faculty/ss.JPG"
              className="image rounded-full w-1/2 m-5"
            />
            <h3 className="text-center font-4xl font-semibold ">
              Prof. Shailesh Sangle
            </h3>
            <span>Asst Prof-Comp Dept</span>
          </div>
          <div className="flex flex-col align-center justify-center items-center my-10 mx-10 w-1/2 md:w-1/4 text-white border-2 border-stone-50 rounded-lg shadow-lg hover:shadow-gray-500">
            <img
              src="/faculty/vs.JPG"
              className="image rounded-full w-1/2 m-5"
            />
            <h3 className="text-center font-4xl font-semibold ">Prof. Vikas Singh</h3>
            <span>Asst Prof-Comp Dept</span>
          </div>
        </div>
        <h1 className="text-center text-3xl m-5 p-5 text-white">
          The Core Team
        </h1>
        <div className="mt-8 mx-8 grid grid-cols-1 items-center justify-center sm:grid-cols-2 lg:grid-cols-3 gap-x-4 text-white">
          {coreDetail}
        </div>
      </div>
    
  );
}

export default Core;
