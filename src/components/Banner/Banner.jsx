import axios from "axios";
import fileDownload from "js-file-download";
import { motion } from "framer-motion";

const Banner = () => {
  const handleDownload = (url, filename) => {
    axios
      .get(url, {
        responseType: "blob",
      })
      .then((res) => {
        console.log(res.data);
        fileDownload(res.data, filename);
      });
  };

  return (
    <div className=" ">
      <div className=" max-w-screen-xl p-4 mx-auto">
        <p className=" text-teal-300 text-sm ">
          Hi, my name is Shajjad hossan.
        </p>
        <p className=" my-7 capitalize text-5xl text-gray-100">
          I am a front-end developer.
        </p>
        <p className=" text-5xl capitalize text-gray-300">
          I build things for web.
        </p>
        <p className=" my-8 max-w-xl capitalize text-gray-400 text-sm">
          I&apos;m a junior front-end web developer.currently focused on
          building different application by using technologies
          <span className=" text-teal-300">
            &nbsp;(Html,tailwind Css,react,express js,MongoDB)
          </span>{" "}
          what i have learned till now.I am enjoying exploring Tailwind CSS with
          React.
        </p>
        <motion.button
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
          onClick={() =>
            handleDownload("https://i.ibb.co/VWD4k0T/images.jpg", "image.jpg")
          }
          className=" border border-teal-300 text-teal-300 rounded-md px-10 py-2"
        >
          Download My CV
        </motion.button>
      </div>
    </div>
  );
};

export default Banner;
