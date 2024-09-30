import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { events } from "./timelinedata";

// const zephyrEvents = events.map(event => (
//     <VerticalTimelineElement
//         contentStyle={{border: 0, background: '#2e243c' }}
//         contentArrowStyle={{ borderRight: '7px solid #502D6A', marginTop:40 }}
//         iconStyle={{ background: '#502D6A', marginTop:40 }}
//     >
// <div className='w-40 sm:w-60 md:w-80 lg:w-88 h-auto ml:10 lg:ml-20 font-["Inconsolata"] rounded-lg shadow-lg shadow-[#deb5fb] hover:shadow-[#574069]'>
//     <div className='w-auto h-8 md:h-12 rounded-t-lg bg-gradient-to-b from-[#9B36EA] to-[#502D6A] shadow-md shadow-gray-500'>
//         <p className='text-white pl-4 py-2 sm:py-2.5 md:py-4'>{event.date}</p>
//     </div>
//     <div className='h-20 md:h-24 bg-white border-4 border-[#502D6A] rounded-b-lg pl-4'>
//         <p className='text-black'>{event.name}</p>
//         <p className='text-black'>{event.type}</p>
//     </div>
// </div>

//     </VerticalTimelineElement>
// ))

// const zephyrEvents = events.map(event => (
//     <VerticalTimelineElement
//     contentStyle={{ background: 'rgb(33, 150, 243)', color: '#2e243c'}}
//     // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
//     iconStyle={{ background: '#502D6A' }}
//   >
//     <div className='w-40 sm:w-60 md:w-80 lg:w-88 h-auto ml:10 lg:ml-20 font-["Inconsolata"]  shadow-lg shadow-[#deb5fb] hover:shadow-[#574069]'>
//             <div className='w-auto h-8 md:h-12 rounded-t-lg bg-gradient-to-b from-[#9B36EA] to-[#502D6A] shadow-md shadow-gray-500'>
//                 <p className='text-white pl-4 py-2 sm:py-2.5 md:py-4'>{event.date}</p>
//             </div>
//             <div className='h-20 md:h-24 bg-white border-4 border-[#502D6A] rounded-b-lg pl-4'>
//                 <p className='text-black'>{event.name}</p>
//                 <p className='text-black'>{event.type}</p>
//             </div>
//         </div>
//   </VerticalTimelineElement>
// ))
const zephyrEvents = events.map((event) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "transparent",
      border: "none",
      boxShadow: "none",
    }}
    contentArrowStyle={{ borderRight: "7px solid #502D6A", marginTop: 40 }}
    iconStyle={{ background: "#502D6A", marginTop: 40 }}>
    <div className='font-["Inconsolata"] rounded-lg shadow-lg shadow-[#deb5fb] hover:shadow-[#574069] bg-white'>
      <div className="rounded-t-lg bg-gradient-to-b from-[#9B36EA] to-[#502D6A] shadow-md shadow-gray-500">
        <p className="text-white pl-4 py-2 sm:py-2.5 md:py-4">{event.date}</p>
      </div>
      <div className="border-4 border-[#502D6A] rounded-b-lg pl-4">
        <p className="text-black">{event.name}</p>
        <p className="text-black">{event.type}</p>
      </div>
    </div>
  </VerticalTimelineElement>
));
export default function Timeline() {
  return (
    <div className="box-border mx-10">
      <h1 className="text-center text-white m-20 text-3xl font-bold">
        TIMELINE
      </h1>
      <VerticalTimeline>{zephyrEvents}</VerticalTimeline>
    </div>
  );
}
