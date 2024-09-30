import React from "react";
import "./wc.css";
import { motion } from "framer-motion";
import { te } from "./tehead";
import { se } from "./wc";

function WC() {
  const TEDetail = te.map((details) => {
    return (
      <div className="postn mx-6 my-4 flex flex-col " key={details.name}>
        <motion.div
          className="rounded-xl w-7/12 px-2 items-center justify-center sm:11/12"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1}}
          transition={{
            duration: 1,
            delay: 0.25,
            ease: [0, 0.71, 0.2, 1.01],
          }}>
          <img
            src={details.image}
            className=" rounded-xl h-[300px] w-[300px] md:h-[300px] sm:h-[200px]"
          />
        </motion.div>
        <div className="font-semibold pt-5 text-xl">{details.name}</div>
      </div>
    );
  });
  const SEDetail = se.map((sedetails) => {
    return (
      <div className="postn mx-6 my-4 flex flex-col " key={sedetails.name}>
        <motion.div
          className="rounded-xl w-7/12 px-2 items-center justify-center sm:11/12"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1}}
          transition={{
            duration: 1,
            delay: 0.25,
            ease: [0, 0.71, 0.2, 1.01],
          }}>
          <img
            src={sedetails.image}
            className="rounded-xl h-[300px] w-[300px] md:h-[300px] sm:h-[200px]"
          />
        </motion.div>

        <div className="font-semibold pt-5 text-xl">{sedetails.name}</div>
      </div>
    );
  });
  
  return (
      <div className="bg-[url('/csi-website.png')] bg-fixed bg-[#020005] pt-20">
        <h1 className="text-center text-3xl m-5 p-5 text-white font-bold underline underline-offset-2">
          The TE Team
        </h1>
        <div className="mt-8 mx-8 grid grid-cols-1 items-center justify-center sm:grid-cols-2 lg:grid-cols-3 gap-x-4 text-white">
          {TEDetail}
      </div>
      <h1 className="text-center text-3xl m-5 p-5 text-white font-bold underline underline-offset-2">
          The SE Team
        </h1>
        <div className="mt-8 mx-8 grid grid-cols-1 items-center justify-center sm:grid-cols-2 lg:grid-cols-3 gap-x-4 text-white">
          {SEDetail}
        </div>
      </div>
    
  );
}

export default WC;
