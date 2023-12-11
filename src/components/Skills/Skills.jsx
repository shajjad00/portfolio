import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/javascript-icon.png";
import tailwindIcon from "../../assets/tailwind-css-icon.svg";
import reactIcon from "../../assets/react-js-icon.png";
import mongodbIcon from "../../assets/mongodb-icon.svg";
import firebaseIcon from "../../assets/google-firebase-icon.svg";
import expressIcon from "../../assets/express-js-icon.svg";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className=" mb-10">
      <h2 className=" text-4xl w-fit mt-6 border-b-2 border-b-white pb-4 text-gray-100 text-center mx-auto capitalize">
        My skills are
      </h2>
      <p className=" capitalize text-center mt-3 mb-20 text-teal-300">
        Skills that i have learned till now
      </p>
      <div>
        <div className=" flex gap-4 justify-center">
          <motion.img
            initial={{
              x: -200,
              y: 0,
              opacity: 0.5,
              scale: 0.1,
            }}
            whileInView={{
              x: 0,
              y: 0,
              opacity: [0, 0.5, 1],
              scale: 1,
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
            }}
            className="w-20 h-20"
            src={htmlIcon}
          ></motion.img>
          <motion.img
            initial={{
              y: -200,
              x: 0,
              opacity: 0.1,
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
            className="w-20 h-20"
            src={cssIcon}
          ></motion.img>
          <motion.img
            initial={{
              x: 200,
              y: 0,
              opacity: 0.1,
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
            className="w-20 h-20"
            src={tailwindIcon}
          ></motion.img>
        </div>
        <div className=" mt-8 flex gap-4 justify-center">
          <motion.img
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
              ease: "backInOut",
            }}
            className="w-20 h-20"
            src={jsIcon}
          ></motion.img>
          <motion.img
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
            className="w-20 h-20"
            src={reactIcon}
          ></motion.img>
          <motion.img
            initial={{
              y: 150,
              x: 0,
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
            className="w-20 h-20"
            src={mongodbIcon}
          ></motion.img>

          <motion.img
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
            className="w-20 h-20"
            src={firebaseIcon}
          ></motion.img>

          <motion.img
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
            className="w-20 h-20"
            src={expressIcon}
          ></motion.img>
        </div>
      </div>
    </div>
  );
};

export default Skills;
