import { BsCheckLg } from "react-icons/bs";
import { IoMdCloudUpload, IoMdClose } from "react-icons/io";
import Uploader from "./Uploader";
import { useCallback, useState } from "react";
import "./style.css";
import { motion } from "framer-motion";

export default function Question({ id, onDelete }) {
  //state where the uploads are stored
  const [image, setImage] = useState("");

  // get uploaded image file
  const onDropImage = useCallback((acceptedFiles) => {
    setImage(acceptedFiles[0].name);
  });

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      transition={{ bounce: 0, duration: 0.5 }}
      key={id}
      className="w-full flex flex-row gap-5 bg-question_bg h-56 py-4 px-6 rounded-lg border-2 border-question_border"
    >
      <div className="w-8/12 flex flex-col gap-2">
        <div className="w-full flex flex-row justify-between items-center text-darkest font-semibold">
          <div>Question 1</div>
          <IoMdClose
            size={20}
            className="fill-light_gray cursor-pointer hover:scale-125 transition-all ease-in-out"
            onClick={onDelete}
          />
        </div>
        <div className="w-full h-fit py-2 px-3 bg-white text-darker_gray text-sm font-semibold rounded-lg border border-question_border">
          Dust-filter respirators may be used for continuous protection while
          silica sand is used as the blasting abrasive.
        </div>
        <div className="answerWrapper">
          <div>True</div>
          <div className="flex flex-row gap-3">
            <input
              type="radio"
              name={"checkers" + id}
              className="right hidden"
              id={"right" + id}
            />
            <label
              className="bg-green-50 stroke-red-800 rounded-md p-1 transition-all ease-in-out"
              htmlFor={"right" + id}
            >
              <BsCheckLg size={16} className="fill-green-300 check" />
            </label>
            <input type="file" name="upload" className="hidden" id="file" />
            <label
              for="file"
              className="tooltip tooltip-bottom cursor-pointer before:text-black before:bg-white before:border before:border-light_gray"
              data-tip="Upload image"
            >
              <IoMdCloudUpload size={25} className="fill-dark_gray" />
            </label>
          </div>
        </div>
        <div className="answerWrapper">
          <div>False</div>
          <div className="flex flex-row gap-3">
            <input
              type="radio"
              name={"checkers" + id}
              className="wrong hidden"
              id={"wrong" + id}
            />
            <label
              className="bg-green-50 stroke-red-800 rounded-md p-1 transition-all ease-in-out"
              for={"wrong" + id}
            >
              <BsCheckLg size={16} className="fill-green-300 check" />
            </label>
            <input type="file" className="hidden" name="upload" id="file" />
            <label
              for="file"
              className="tooltip tooltip-bottom cursor-pointer before:text-black before:bg-white before:border before:border-light_gray"
              data-tip="Upload image"
            >
              <IoMdCloudUpload size={25} className="fill-dark_gray" />
            </label>
          </div>
        </div>
      </div>
      <div className="w-4/12 h-full flex flex-col">
        <div className="w-full flex flex-row justify-between items-center">
          <div className="text-darkest font-semibold">Question Image</div>
          <div className="text-xs text-light_gray font-medium">Optional</div>
        </div>
        <div className="w-full h-full mt-2">
          <Uploader
            accept={{ "image/*": [".jpg", ".png"] }}
            onDrop={onDropImage}
          />
        </div>
        {image != "" && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            transition={{ bounce: 0, duration: 0.5 }}
            className="w-full rounded-lg bg-green-500 px-2 py-1 my-1 flex flex-row justify-between items-center gap-2"
          >
            <div className="w-5/6">
              <div className="text-white font-medium text-xs">Completed</div>
              <div className="overflow-hidden text-white text-sm font-semibold whitespace-nowrap text-ellipsis">
                {image}
              </div>
            </div>
            <div
              className="p-1 bg-white rounded-full hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out"
              onClick={() => setImage("")}
            >
              <IoMdClose size={18} className="fill-light_gray" />
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
