import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen";
import MyJourney from "./Pages/Home/MyJourney";
import Courses from "./Pages/Courses";
import CourseYoga from "./Pages/CourseYoga";
import CourseSound from "./Pages/CourseSound";
import CourseMassage from "./Pages/CourseMassage";
import CourseNutrition from "./Pages/CourseNutrition";
import Contact from "./Pages/Home/Contact";
import Retreat from "./Pages/Home/Retreat";

function App() {
  return (
    <div
      className="App"
      style={{ background: "#f1ebeb" }}
      // style={{
      //   backgroundImage: "../img/back.webp",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/my-journey" element={<MyJourney />}></Route>
            <Route path="/yoga-retreat" element={<Retreat />} />
            <Route path="/courses/yoga" element={<CourseYoga />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/courses/massage" element={<CourseMassage />}></Route>
            <Route
              path="/courses/nutrition"
              element={<CourseNutrition />}
            ></Route>
            <Route
              path="/courses/sound-healing"
              element={<CourseSound />}
            ></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
