import Navbar from "../components/trainings/navbar";
import TrainingInfo from "../components/trainings/info";
import Quiz from "../components/trainings/quiz";
import Carousel from "../components/trainings/carousel";
import { motion } from "framer-motion";

function trainings() {
  return (
    <div className="w-full h-fit flex flex-col">
      <Navbar />
      <motion.div
        className="w-full h-fit my-5 px-28"
        initial={{
          y: 50,
          opacity: 0,
        }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, bounce: 0, duration: 1 }}
      >
        {/*title & cancel/save buttons*/}
        <div className="w-full flex justify-between items-center">
          <div className="text-dark text-lg font-semibold">
            Edit Training "Working At Height"
          </div>
          <div className="flex flex-row items-center gap-7">
            <button className="text-medium_gray font-semibold hover:scale-105 transition-all ease-in-out duration-300">
              Cancel
            </button>
            <button className="text-white bg-orange-500 py-2 px-5 rounded-lg font-semibold hover:scale-105 transition-all ease-in-out duration-300">
              Update & Save
            </button>
          </div>
        </div>
        {/*training info section*/}
        <TrainingInfo />
        {/*Quiz section*/}
        <Quiz />
        {/*Carousel section*/}
        <Carousel />
      </motion.div>
    </div>
  );
}

export default trainings;
