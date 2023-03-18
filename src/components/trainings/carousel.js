import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useState } from "react";
import {
  AiOutlineInfoCircle,
  AiOutlinePlus,
  AiOutlineMinus,
  AiFillCheckCircle,
} from "react-icons/ai";
import { IoDiceOutline } from "react-icons/io5";
import { BiCameraHome } from "react-icons/bi";
import {
  MdOutlineTimer,
  MdOutlineTimelapse,
  MdOutlineLoop,
} from "react-icons/md";

export default function Carousel() {
  const [random, setRandom] = useState(10);
  const [timer, setTimer] = useState(45);
  const [score, setScore] = useState(80);
  const [timelapse, setTimelapse] = useState(30);
  const [attempts, setAttempts] = useState(3);

  return (
    <div className="w-full h-fit overflow-auto">
      <Splide
        options={{
          type: "slide",
          gap: 5,
          perPage: 7,
          breakpoints: {
            1024: {
              perPage: 3,
            },
            1440: {
              perPage: 5,
            },
          },
          perMove: 1,
          pagination: false,
          drag: true,
          wheel: true,
        }}
        aria-label="Controls slider"
      >
        {/*Random questions*/}
        <SplideSlide>
          <div className="w-48 h-48 p-3 bg-white rounded-lg flex flex-col justify-between shadow-md shadow-gray-200">
            <AiOutlineInfoCircle
              size={20}
              className="self-end fill-dark_gray"
            />
            <div className="w-full flex flex-col justify-center items-center">
              <IoDiceOutline
                size={45}
                className="stroke-sky-700 fill-sky-700"
              />
              <div className="mt-2 text-darkest font-semibold">
                Random questions
              </div>
            </div>
            <div className="w-full h-8 flex flex-row gap-1">
              <div
                className="w-3/12 bg-control_gray rounded-lg flex justify-center items-center"
                onClick={() => {
                  random > 0 && setRandom((count) => count - 1);
                }}
              >
                <AiOutlineMinus size={20} />
              </div>
              <div className="flex items-center justify-center text-dark_blue font-semibold w-6/12 bg-white border border-dark_blue rounded-lg">
                {random}
              </div>
              <div
                className="w-3/12 bg-control_gray rounded-lg flex justify-center items-center"
                onClick={() => {
                  setRandom((count) => count + 1);
                }}
              >
                <AiOutlinePlus size={20} />
              </div>
            </div>
          </div>
        </SplideSlide>
        {/*timer component*/}
        <SplideSlide>
          <div className="w-48 h-48 p-3 bg-white rounded-lg flex flex-col justify-between shadow-md shadow-gray-200">
            <div
              className="self-end tooltip tooltip-bottom cursor-pointer before:text-black before:bg-white before:border before:border-light_gray"
              data-tip="When the countdown is finished, the system will automatically move to the next question."
            >
              <AiOutlineInfoCircle size={20} className="fill-dark_gray" />
            </div>

            <div className="w-full flex flex-col justify-center items-center">
              <MdOutlineTimer size={45} className="fill-orange-500" />
              <div className="mt-2 text-darkest font-semibold">
                Time per question{" "}
              </div>
            </div>
            <div className="w-full h-8 flex flex-row gap-1">
              <div
                className="w-3/12 bg-control_gray rounded-lg flex justify-center items-center"
                onClick={() => {
                  timer > 0 && setTimer((count) => count - 1);
                }}
              >
                <AiOutlineMinus size={20} />
              </div>
              <div className="flex items-center justify-center text-dark_blue font-semibold w-6/12 bg-white border border-dark_blue rounded-lg">
                {timer}s
              </div>
              <div
                className="w-3/12 bg-control_gray rounded-lg flex justify-center items-center"
                onClick={() => {
                  timer < 60 && setTimer((count) => count + 1);
                }}
              >
                <AiOutlinePlus size={20} />
              </div>
            </div>
          </div>
        </SplideSlide>
        {/*score component*/}
        <SplideSlide>
          <div className="w-48 h-48 p-3 bg-white rounded-lg flex flex-col justify-between shadow-md shadow-gray-200">
            <AiOutlineInfoCircle
              size={20}
              className="self-end fill-dark_gray"
            />
            <div className="w-full flex flex-col justify-center items-center">
              <AiFillCheckCircle size={45} className="fill-green-500" />
              <div className="mt-2 text-darkest font-semibold">
                Passing score
              </div>
            </div>
            <div className="w-full h-8 flex flex-row gap-1">
              <div
                className="w-3/12 bg-control_gray rounded-lg flex justify-center items-center"
                onClick={() => {
                  timer > 0 && setScore((count) => count - 1);
                }}
              >
                <AiOutlineMinus size={20} />
              </div>
              <div className="flex items-center justify-center text-dark_blue font-semibold w-6/12 bg-white border border-dark_blue rounded-lg">
                {score}%
              </div>
              <div
                className="w-3/12 bg-control_gray rounded-lg flex justify-center items-center"
                onClick={() => {
                  score < 100 && setScore((count) => count + 1);
                }}
              >
                <AiOutlinePlus size={20} />
              </div>
            </div>
          </div>
        </SplideSlide>
        {/*webcam component*/}
        <SplideSlide>
          <div className="w-48 h-48 p-3 bg-white rounded-lg flex flex-col justify-between shadow-md shadow-gray-200">
            <AiOutlineInfoCircle
              size={20}
              className="self-end fill-dark_gray"
            />
            <div className="w-full flex flex-col justify-center items-center">
              <BiCameraHome size={50} className="fill-red-400" />
              <div className="mt-2 text-darkest font-semibold">
                Webcam validation
              </div>
            </div>
            <div className="w-full h-8 flex justify-center items-center">
              <input type="checkbox" className="toggle toggle-error" />
            </div>
          </div>
        </SplideSlide>
        {/*expected time componenet*/}
        <SplideSlide>
          <div className="w-48 h-48 p-3 bg-white rounded-lg flex flex-col justify-between shadow-md shadow-gray-200">
            <AiOutlineInfoCircle
              size={20}
              className="self-end fill-dark_gray"
            />
            <div className="w-full flex flex-col justify-center items-center">
              <MdOutlineTimelapse size={50} className="fill-purple-700" />
              <div className="mt-2 text-darkest font-semibold">
                Time Expected
              </div>
            </div>
            <div className="w-full h-8 flex flex-row gap-1">
              <div
                className="w-3/12 bg-control_gray rounded-lg flex justify-center items-center"
                onClick={() => {
                  timelapse > 0 && setTimelapse((count) => count - 1);
                }}
              >
                <AiOutlineMinus size={20} />
              </div>
              <div className="flex items-center justify-center text-dark_blue font-semibold w-6/12 bg-white border border-dark_blue rounded-lg">
                {timelapse}min
              </div>
              <div
                className="w-3/12 bg-control_gray rounded-lg flex justify-center items-center"
                onClick={() => {
                  timelapse < 60 && setTimelapse((count) => count + 1);
                }}
              >
                <AiOutlinePlus size={20} />
              </div>
            </div>
          </div>
        </SplideSlide>
        {/*attempts component*/}
        <SplideSlide>
          <div className="w-48 h-48 p-3 bg-white rounded-lg flex flex-col justify-between shadow-md shadow-gray-200">
            <AiOutlineInfoCircle
              size={20}
              className="self-end fill-dark_gray"
            />
            <div className="w-full flex flex-col justify-center items-center">
              <div className="bg-gray-100 p-2 rounded-full">
                <MdOutlineLoop size={30} className="fill-dark_gray" />
              </div>
              <div className="mt-2 text-darkest font-semibold">Attempts</div>
            </div>
            <div className="w-full h-8 flex flex-row gap-1">
              <div
                className="w-3/12 bg-control_gray rounded-lg flex justify-center items-center"
                onClick={() => {
                  attempts > 0 && setAttempts((count) => count - 1);
                }}
              >
                <AiOutlineMinus size={20} />
              </div>
              <div className="flex items-center justify-center text-dark_blue font-semibold w-6/12 bg-white border border-dark_blue rounded-lg">
                {attempts}
              </div>
              <div
                className="w-3/12 bg-control_gray rounded-lg flex justify-center items-center"
                onClick={() => {
                  attempts < 10 && setAttempts((count) => count + 1);
                }}
              >
                <AiOutlinePlus size={20} />
              </div>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}
