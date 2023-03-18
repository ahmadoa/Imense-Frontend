import "./style.css";
import Logo from "../../assets/logo.svg";
import UKFlag from "../../assets/UKFlag.png";
import SpainFlag from "../../assets/SpainFlag.png";
import NetherlandFlag from "../../assets/NetherlandFlag.png";
import GermanFlag from "../../assets/GermanFlag.png";
import FranceFlag from "../../assets/FranceFlag.png";
import Profile from "../../assets/profile.svg";
import { FiSearch } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaRegBell, FaCog } from "react-icons/fa";
import { BsShieldExclamation } from "react-icons/bs";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { motion } from "framer-motion";

const Languages = [
  {
    lang: "English",
    short: "EN",
    flag: UKFlag,
  },
  {
    lang: "Francais",
    short: "FR",
    flag: FranceFlag,
  },
  {
    lang: "Nederlands",
    short: "NL",
    flag: NetherlandFlag,
  },
  {
    lang: "Español",
    short: "ES",
    flag: SpainFlag,
  },
  {
    lang: "Deutsch",
    short: "DE",
    flag: GermanFlag,
  },
];

function navbar() {
  return (
    <motion.div
      initial={{
        y: -50,
        opacity: 0,
      }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ bounce: 0, duration: 0.8 }}
      className="navWrapper"
    >
      <div className="w-3/4 flex flex-row justify-between items-center">
        <img src={Logo} className="w-28" />
        <div className="searchBoxWrapper">
          <FiSearch size={22} className="stroke-medium_gray mx-3" />
          <input
            placeholder="Quick search ..."
            className="w-full placeholder-light_gray bg-transparent outline-none pr-2 text-black"
          />
        </div>
        <div className="min-w-[45%] flex flex-row">
          <ul className="navLinkWrapper">
            <li className="hover:text-dark_blue hover:scale-105 transition-all ease-in-out duration-300">
              <a href="#">Dashboard</a>
            </li>
            <li className="text-dark_blue">
              <a href="#">Trainings</a>
            </li>
            <li className="hover:text-dark_blue hover:scale-105 transition-all ease-in-out duration-300">
              <a href="#">Users</a>
            </li>
            <li className="flex flex-row justify-center items-center cursor-pointer">
              More
              <MdKeyboardArrowDown size={20} className="self-end ml-1" />
            </li>
          </ul>
        </div>
      </div>
      <div className="profileSection">
        {/*notifications bell*/}
        <FaRegBell size={22} className="fill-bell_gray" />
        {/*languages Dropdown*/}
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost focus:bg-transparent p-0 hover:bg-transparent rounded-btn"
          >
            <div className="w-6 h-6 relative rounded-full overflow-hidden">
              <img src={UKFlag} className="h-full w-full bg-cover" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content shadow py-1 bg-white rounded-box w-44"
          >
            {Languages.map((language) => (
              <button
                key={language.short}
                className={
                  language.short != "EN"
                    ? `flex flex-row items-center text-bell_gray py-2 px-3 hover:bg-lighter_gray transition-all duration-300`
                    : `flex flex-row items-center py-1 px-3 hover:bg-lighter_gray transition-all duration-300`
                }
              >
                <div className="w-5 h-5 relative rounded-full overflow-hidden mr-2">
                  <img
                    src={language.flag}
                    className="h-full w-full bg-cover"
                  ></img>
                </div>
                <span>
                  {language.lang} ({language.short})
                </span>
              </button>
            ))}
          </ul>
        </div>
        {/*profile Dropdown*/}
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost p-0 focus:bg-transparent hover:bg-transparent w-fit"
          >
            <img src={Profile} className="w-10 mr-1" />
            <div className="flex flex-col text-start">
              <div className="text-base capitalize text-darker_gray">
                blaise defloo
              </div>
              <div className="text-xs capitalize text-dark_gray">
                administrator
              </div>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content py-3 gap-2 shadow bg-white rounded-box w-56 mt-1"
          >
            <div className="px-3 flex flex-col">
              <div className="text-darkest font-semibold">BESIX Group</div>
              <div className="text-dark">besix.group@besix.be</div>
            </div>
            <div className="px-3 divider my-1"></div>
            <div className="flex flex-col">
              <button className="flex flex-row items-center px-3 py-2 text-darkest font-medium hover:bg-lighter_gray transition-all duration-300">
                <FaCog size={25} className="mr-3 fill-dark" />
                Profile settings
              </button>
              <button className="flex flex-row items-center px-3 py-2 text-darkest font-medium hover:bg-lighter_gray transition-all duration-300">
                <BsShieldExclamation size={25} className="mr-3 fill-dark" />
                Our policies
              </button>
            </div>
            <div className="px-3 divider my-1"></div>
            <div className="flex flex-row items-center px-3 py-1 text-darkest font-medium cursor-pointer hover:bg-lighter_gray transition-all duration-300">
              <RiLogoutBoxRFill size={25} className="mr-3 fill-dark" />
              Log out
            </div>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default navbar;
