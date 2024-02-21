import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaLongArrowAltRight,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Dots from "./Dots";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import proile from "/images/mirshe.jpg";
const Nav = () => {
  return (
    <div className="w-full mt-16">
      <div className="w-full flex flex-col-reverse lg:flex-row justify-start items-center gap-4 lg:gap-10">
        <div className="w-full space-y-6">
          <strong className="text-base tracking-widest w-full">
            <span>Hello,</span>
            <span className="uppercase text-blue-600">my name is </span>
          </strong>
          <h1 className="text-lg font-medium md:text-xl md:font-semibold">
            <span className="uppercase tracking-widest">
              Abdikafi Isse Isak
            </span>
            <span className="tracking-widest hidden md:inline"> - Miirshe</span>
          </h1>
          <h5 className="text-base font-extralight italic">
            I'm MERN stack developer
          </h5>
          <p className="text-base font-normal tracking-widest leading-10">
            I'm a MERN stack developer. Proficient in both front-end and
            back-end development
          </p>
          <div className="w-full flex flex-row justify-start items-center gap-5 mt-5">
            <Link to="https://github.com/Miirshe" target="_blank">
              {" "}
              <FaGithub size={20} />{" "}
            </Link>
            <Link to="https://twitter.com/miirshe" target="_blank">
              {" "}
              <FaTwitter size={20} />{" "}
            </Link>
            <Link to="https://www.linkedin.com/in/miirshe" target="_blank">
              {" "}
              <FaLinkedin size={20} />{" "}
            </Link>
          </div>
          <button className="px-4 py-2 rounded shadow bg-blue-600 text-white mt-16">
            <Link to="./miirshe.pdf" target="_blank" className="inline">
              Dowload CV{" "}
              <FaLongArrowAltRight className="ml-3 inline" size={20} />{" "}
            </Link>{" "}
          </button>
        </div>
        <div className="w-full rounded-full border-4 border-slate-50 dark:border-slate-500 shadow">
          {proile ? (
            <img
              className="w-full bg-cover  object-center rounded-full"
              src={proile}
              alt="miirshe"
            />
          ) : (
            <Skeleton className="w-full rounded-full" />
          )}
        </div>
      </div>
      <Dots />
    </div>
  );
};

export default Nav;
