import React, { useState } from "react";
import Card from "./Card";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function Testimonials({ reviews }) {
    // retrive the reviews data from app.jsx using props
    const [index, setIndex] = useState(0); // intial the index is at 0

    function leftShiftHandler() {
        // this wraps the array
        if (index - 1 < 0) {
            // when the left button pressed if the index-1 < 0 it means we want we want to access the last index simply setIndex(array.lengt-1)
            setIndex(reviews.length - 1);
        } else {
            setIndex(index - 1); // else simplye setIndex(index-1);
        }
    }

    function rightShiftHandler() {
        if (index + 1 >= reviews.length) {
            // when the right button pressed if the index+1>=reviews.length it means we want to reach at the 0th index from the behind simple put the setIndex(0)
            setIndex(0);
        } else {
            setIndex(index + 1); // else increase the index+1
        }
    }

    function surpriseHandler() {
        let randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
        // This is the randomIndex using the Math.flor function
    }

    return (
        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 duration-700 rounded-md hover:shadow-2xl transition-all ease-in-out">
            <Card review={reviews[index]} />
            {/* send the reviews[index] a specifc index to the card */}

            <div className="flex text-3xl mt-8 gap-3 text-violet-400 font-bold justify-center">
                <button
                    onClick={leftShiftHandler}
                    className="cursor-pointer hover:text-violet-500"
                >
                    <MdKeyboardArrowLeft />
                </button>

                <button
                    onClick={rightShiftHandler}
                    className="cursor-pointer hover:text-violet-500"
                >
                    <MdKeyboardArrowRight />
                </button>
            </div>

            <div className="mt-4">
                <button
                    onClick={surpriseHandler}
                    className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
                >
                    Surprise Me
                </button>
            </div>
        </div>
    );
}

export default Testimonials;
