import food from "../../assets/project/Food Tracker.png";
import foodBeverage from "../../assets/project/food and beverage (2).png";
import classCrafter from "../../assets/project/Class crafers.png";
import { motion } from "framer-motion";

import { GoArrowUpRight } from "react-icons/go";

const MyProject = () => {
  return (
    <>
      <h2
        id="projects"
        className=" w-fit text-5xl text-gray-200 mx-auto my-20 border-b-2 border-b-white pb-4"
      >
        My Projects
      </h2>
      <div className="max-w-screen-xl p-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <motion.div
          initial={{
            x: -200,
            y: 0,
            opacity: 0.5,
            scale: 0.1,
          }}
          whileInView={{
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className=" hover:p-3 hover:bg-[#050b16] hover:rounded-md hover:scale-90 hover:transform hover:lg:scale-110 transition-all ease-in-out duration-500"
        >
          <div className="relative ">
            <img
              src={food}
              alt=""
              className=""
            />
            <div className=" absolute -bottom-6 transition-all duration-300 hover:bg-teal-600 hover:rounded-lg z-20 right-10 bg-[#030303] p-2 text-white text-4xl">
              <a
                href="https://assignment-11-tan-xi.vercel.app/"
                target="blank"
              >
                <GoArrowUpRight />
              </a>
            </div>
            <div className="absolute inset-0 bg-black opacity-20 hover:opacity-10 transition-all ease-in-out duration-300 "></div>
          </div>
          <p className=" mt-7 mb-1  flex text-teal-400 items-center gap-4">
            <div className="relative flex w-5  items-center">
              <div className="flex-grow  border-t border-white"></div>
            </div>
            website
          </p>
          <h2 className=" text-2xl text-gray-400">
            Food Sharing Community Website
          </h2>
        </motion.div>
        <motion.div
          initial={{
            x: 200,
            y: 0,
            opacity: 0.5,
            scale: 0.1,
          }}
          whileInView={{
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className=" hover:p-3 hover:bg-[#050b16] hover:rounded-md hover:scale-90 hover:transform hover:lg:scale-110 transition-all ease-in-out duration-500"
        >
          <div className="relative ">
            <img
              src={classCrafter}
              alt=""
              className=""
            />
            <div className=" absolute -bottom-6 transition-all duration-300 hover:bg-teal-600 hover:rounded-lg z-20 right-10 bg-[#030303] p-2 text-white text-4xl">
              <motion.a
                initial={{
                  rotate: "0deg",
                  scale: 1,
                }}
                whileTap={{
                  rotate: "1.5deg",
                  scale: 0.9,
                }}
                whileHover={{
                  rotateX: "1deg",
                  scale: 1.1,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                href="https://final-assignment-tau.vercel.app/"
                target="blank"
              >
                <GoArrowUpRight />
              </motion.a>
            </div>
            <div className="absolute inset-0 bg-black opacity-20 hover:opacity-10 transition-all ease-in-out duration-300 "></div>
          </div>
          <p className=" mt-7 mb-1  flex text-teal-400 items-center gap-4">
            <div className="relative flex w-5  items-center">
              <div className="flex-grow  border-t border-white"></div>
            </div>
            website
          </p>
          <h2 className=" text-2xl text-gray-400">Online CLass Crafters</h2>
        </motion.div>
        <motion.div
          initial={{
            x: 200,
            y: 0,
            opacity: 0.5,
            scale: 0.1,
          }}
          whileInView={{
            scale: 1,
            x: 0,
            y: 0,
            opacity: 0.5,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          className=" hover:p-3 hover:bg-[#050b16] hover:rounded-md hover:scale-90 hover:transform hover:lg:scale-110 transition-all ease-in-out duration-500"
        >
          <div className="relative ">
            <img
              src={foodBeverage}
              alt=""
              className=""
            />
            <div className=" absolute -bottom-6 transition-all duration-300 hover:bg-teal-600 hover:rounded-lg z-20 right-10 bg-[#030303] p-2 text-white text-4xl">
              <motion.a
                initial={{
                  rotate: "0deg",
                  scale: 1,
                }}
                whileTap={{
                  rotate: "1.5deg",
                  scale: 0.9,
                }}
                whileHover={{
                  rotateX: "1deg",
                  scale: 1.1,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                href="https://final-assignment-tau.vercel.app/"
                target="blank"
              >
                <GoArrowUpRight />
              </motion.a>
            </div>
            <div className="absolute inset-0 bg-black opacity-20 hover:opacity-10 transition-all ease-in-out duration-300 "></div>
          </div>
          <p className=" mt-7 mb-1  flex text-teal-400 items-center gap-4">
            <div className="relative flex w-5  items-center">
              <div className="flex-grow  border-t border-white"></div>
            </div>
            website
          </p>
          <h2 className=" text-2xl text-gray-400">Food And Beverage</h2>
        </motion.div>
      </div>
    </>
  );
};

export default MyProject;
