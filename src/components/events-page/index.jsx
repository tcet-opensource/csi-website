import React from "react";
import { eventDetails } from "./eventDetails";
import "../events-page/events.css";
export default function EventsPage() {
  const eventDetail = eventDetails.map((details) => {
    return (
      <div className="card">
        <img src={details.image} />
        <div className="info">
          <h1>{details.name}</h1>
          <p>{details.detail}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="flex flex-col bg-[url('/csi-website.png')] bg-fixed pt-20">
      <div className=" bg-black">
        <img
          src="./images/zephrbanner.png"
          alt="zephyr-banner"
          className="object-cover hidden md:block w-auto h-1/2"
        />
      </div>
      <div className="text-white py-8 ">
        <p className="mx-10 border-2 rounded border-gray-500 py-2 px-6 md:px-10 text-center text-sm md:text-base lg:text:lg xl:text-xl">
          Zephyr is a 3-day annual technical festival of Thakur College of
          Engineering and Technology. It was established in 2004 as a platform
          where students could exhibit and enhance their technical expertise.
          Over the years, it has gained immense popularity by broadening its
          horizon to include fun events and tournaments, both technical and
          impromptu. Do you want to gain technical finesse and learn a new
          skill? Are you a gamer who wants to compete and prove you're better
          than the rest? Or, do you want to do it all and have a memorable time
          meeting new people? If your answer is "yes" to any of the above
          questions, Zephyr is the perfect place for you. Be it students,
          academicians or the general public, Zephyr can be attended by anyone
          and everyone! Come join us for Zephyr 2022-23, and experience the
          thrill yourself!
        </p>
      </div>

      <p className="text-white text-center font-bold text-5xl mb-8 mt-4 w-auto ">EVENTS</p>
      <div className="wrapper py-8 md:py-12">{eventDetail}</div>
    </div>
  );
}
