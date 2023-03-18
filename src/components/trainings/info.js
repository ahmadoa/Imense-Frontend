import { RiDeleteBin7Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import VCA from "../../assets/VCA.svg";
import Uploader from "./Uploader";
import { useCallback, useState } from "react";
import { motion } from "framer-motion";

function Info() {
  //state where the uploads are stored
  const [image, setImage] = useState("");
  const [media, setMedia] = useState("");

  // get uploaded image file
  const onDropImage = useCallback((acceptedFiles) => {
    setImage(acceptedFiles[0].name);
  });

  // get uploaded media file
  const onDropMedia = useCallback((acceptedFiles) => {
    setMedia(acceptedFiles[0].name);
  });

  return (
    <div className="w-full h-[20rem] mt-4 flex flex-row gap-3">
      {/*Training details section*/}
      <div className="w-6/12 h-full bg-white rounded-xl p-3 flex flex-col justify-between overflow-auto shadow-md shadow-gray-200">
        <div className="w-full flex flex-row gap-2">
          {/*category selector*/}
          <div className="categorySelect form-control w-4/12">
            <label className="label pt-0 pb-1 px-0">
              <span className="label-text text-darker_gray font-semibold">
                Category
              </span>
              <button className="label-text-alt text-dark_blue font-semibold">
                Add new +
              </button>
            </label>
            <select className="selectWrap">
              <option disabled defaultValue>
                Pick Category
              </option>
              <option className="text-darkest font-medium">Safety</option>
            </select>
          </div>
          {/*Topic selector*/}
          <div className="TopicSelect form-control w-5/12">
            <label className="label pt-0 pb-1 px-0">
              <span className="label-text text-darker_gray font-semibold">
                Topic
              </span>
              <button className="label-text-alt text-dark_blue font-semibold">
                Add new +
              </button>
            </label>
            <select className="selectWrap">
              <option disabled defaultValue>
                Pick Topic
              </option>
              <option className="text-darkest font-medium">CVA</option>
            </select>
          </div>
          {/*validation years selector*/}
          <div className="ValidationSelect form-control w-3/12">
            <label className="label pt-0 pb-1 px-0">
              <span className="label-text text-darker_gray font-semibold">
                Valid For
              </span>
            </label>
            <select className="selectWrap">
              <option className="text-darkest font-medium">1 year</option>
              <option className="text-darkest font-medium">2 year</option>
              <option className="text-darkest font-medium">3 year</option>
            </select>
          </div>
        </div>
        <div className="w-full flex flex-row gap-2">
          {/*Training type*/}
          <div className="flex flex-col w-8/12">
            <div className="text-darker_gray font-semibold">Training</div>
            <div className="h-9 min-h-[2.25rem] flex flex-row justify-between items-center border border-light_gray mt-1 py-1 px-2 rounded-lg text-darkest">
              <div>Working at height</div>
              <div className="flex flex-row gap-2">
                <img src={VCA} className="w-6" />
                <button>
                  <RiDeleteBin7Line size={20} className="fill-red-500" />
                </button>
              </div>
            </div>
          </div>
          {/*Assigning selector*/}
          <div className="AssingingSelect flex flex-col w-4/12">
            <div className="text-darker_gray font-semibold mb-1">Assign To</div>
            <select className="selectWrap">
              <option className="text-darkest font-medium">
                Internal workers
              </option>
              <option className="text-darkest font-medium">
                External workers
              </option>
            </select>
          </div>
        </div>
        <div className="w-full flex flex-row gap-3">
          <div className="w-4/12 flex flex-col gap-2">
            {/*Departments selector*/}
            <div className="DepartmentSelect form-control w-full">
              <label className="label pt-0 pb-1 px-0">
                <span className="label-text text-darker_gray font-semibold">
                  Departments
                </span>
                <span className="label-text-alt text-light_gray font-medium">
                  Optional
                </span>
              </label>
              <select className="selectWrap" value="dis">
                <option disabled value="dis">
                  Select departments
                </option>
              </select>
            </div>
            {/*Functions selector*/}
            <div className="FunctionSelect form-control w-full">
              <label className="label pt-0 pb-1 px-0">
                <span className="label-text text-darker_gray font-semibold">
                  Functions
                </span>
                <span className="label-text-alt text-light_gray font-medium">
                  Optional
                </span>
              </label>
              <select className="selectWrap" value="fun">
                <option disabled value="fun">
                  Select functions
                </option>
              </select>
            </div>
          </div>
          {/*Description textarea*/}
          <div className="w-8/12">
            <div className="Description form-control w-full h-full max-h-full">
              <label className="label pt-0 pb-1 px-0">
                <span className="label-text text-darker_gray font-semibold">
                  Description
                </span>
              </label>
              <textarea
                className="w-full textarea textarea-bordered bg-white border-light_gray h-full max-h-full"
                placeholder="Bio"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      {/*upload image section*/}
      <div className="w-4/12 h-full bg-white rounded-xl p-3 flex flex-col justify-between shadow-md shadow-gray-200">
        <div className="text-darker_gray font-semibold">Image</div>
        <div className="w-full h-4/6 mt-1">
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
        <div className="text-medium_gray text-xs text-center">
          *Only JPG, PNG files are allowed. Image must be less than 2 MB
        </div>
      </div>
      {/*upload training file section*/}
      <div className="w-3/12 h-full bg-white rounded-xl p-3 flex flex-col justify-between shadow-md shadow-gray-200">
        <div className="text-darker_gray font-semibold">Training file</div>
        <div className="w-full h-[40%]">
          <Uploader
            accept={{
              "application/pdf": [".pdf"],
              "video/mp4": [".mp4"],
              "application/vnd.ms-powerpoint": [".ppt"],
            }}
            onDrop={onDropMedia}
            file={true}
          />
        </div>
        {media != "" && (
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
                {media}
              </div>
            </div>
            <div
              className="p-1 bg-white rounded-full hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out"
              onClick={() => setMedia("")}
            >
              <IoMdClose size={18} className="fill-light_gray" />
            </div>
          </motion.div>
        )}
        <div className="text-medium_gray text-xs">
          *Only Video, PDF and SlideShow files are allowed
        </div>
        <div className="divider h-1 my-0 text-sm font-semibold text-dark">
          OR
        </div>
        <div className="flex flex-col">
          <label className="text-darker_gray font-semibold mb-1">
            Media URL
          </label>
          <input
            type="url"
            className="bg-white text-darkest placeholder:text-medium_gray placeholder:text-sm border border-light_gray focus:outline-none rounded-lg p-1"
            placeholder="https://youtu.be/1g4hoZx8-o4"
          />
        </div>
      </div>
    </div>
  );
}

export default Info;
