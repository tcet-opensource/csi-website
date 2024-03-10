// // import React from "react";
// // import { Route, Routes } from "react-router-dom";
// // import "./App.css";
// // import { Teams, Home, Sponsors, Events, WComittee } from "./components/pages";

// // export default function App() {
// //   return (
// //     <div className="App">
// //       <Routes>
// //           <Route path="/home" element={<Home />} />
// //           <Route path="/" element={<Home />} />
// //           <Route path="/events" element={<Events />} />
// //           <Route path="/sponsors" element={<Sponsors />} />
// //           <Route path="/teams" element={<Teams />} />
// //           <Route path="/wc" element={<WComittee />} />
// //       </Routes>
// //     </div>
// //   );
// // }



// import { useState } from 'react'
// import './App.css'
// import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'
// import Home from './components/Home/Home'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
     
      
//     </>
//   )
// }

// export default App
import "./App.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,Router,
  Routes,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
// import { Teams, Home, Sponsors, Events, WComittee } from "./components/pages";
import { Home } from "./components/Home";
import Spons from "./components/sponsor/Spons";
import EventsPage from "./components/events-page";
import Core from "./components/core-team/Core";
import WComittee from "./components/working/index"


const router = createBrowserRouter(
  createRoutesFromElements(
    // <Router>
    // <Routes>
    <>
    
      <Route path="" element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="/events" element={<Events />} /> */}
        <Route path="/events" element={<EventsPage />} />
        {/* <Route path="/sponsors" element={<Sponsors />} /> */}
        <Route path="/sponsors" element={<Spons />} />
        {/* <Route path="/teams" element={<Teams />} /> */}
        <Route path="/teams" element={<Core />} />
        <Route path="/wc" element={<WComittee />} />
      </Route>
      {/* </Routes> */}
       {/* </Router > */}
      </>
  )
);
export default router;