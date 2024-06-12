import React from "react";
import Testimonials from "./Components/Testimonials";
import reviews from "./Components/data";

function App() {
  return (
    <div className="h-screen flex flex-col w-[100vw] justify-center items-center bg-gray-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Testimonials</h1>
        <div className="bg-violet-400 h-[3px] w-1/5 mt-2 mx-auto"></div>
        <Testimonials reviews={reviews}/>
      </div>
    </div>
  );
}

export default App;
