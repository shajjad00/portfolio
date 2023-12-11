// import { useEffect, useRef, useState } from "react";
// import Header from "../Header/Header";
// import {
//   motion,
//   AnimatePresence,
//   MotionConfig,
//   useAnimationControls,
//   useInView,
// } from "framer-motion";

// const About = () => {
//   const ref = useRef();
//   const view = useInView(ref);

//   useEffect(() => {
//     console.log(view);
//   }, [view]);
//   // const controls = useAnimationControls();
//   // const [isVisible, setIsVisible] = useState(true);
//   // const handleClick = () => {
//   //   controls.start("flip");
//   // };
//   return (
//     <>
//       <Header></Header>
//       <button
//         onClick={() => setIsVisible(!isVisible)}
//         className="px-10 py-2 bg-teal-500 cursor-pointer"
//       >
//         show/hide
//       </button>
//       <AnimatePresence>
//         {isVisible && (
//           <motion.div
//             initial={{
//               rotate: "0 deg",
//               scale: 0,
//               x: 0,
//               y: 0,
//             }}
//             animate={{
//               rotate: "180deg",
//               scale: 1,
//               x: 200,
//               y: [0, 150, -150, -150, 200],
//             }}
//             exit={{
//               rotate: "0deg",
//               scale: 0,
//               x: 0,
//               y: 0,
//             }}
//             transition={{
//               duration: 1,
//               ease: "backInOut",
//               times: [0, 0.25, 0.5, 0.85, 1],
//             }}
//             style={{
//               width: 150,
//               height: 150,
//               background: "teal",
//               marginBlock: 100,
//               marginInline: "auto",
//             }}
//           ></motion.div>
//         )}
//       </AnimatePresence> */}
//       {/* <div className=" grid place-content-center h-screen">
//         <MotionConfig
//           transition={{
//             duration: 0.1,
//             ease: "easeInOut",
//           }}
//         >
//           <motion.button
//             whileHover={{
//               scale: 1.05,
//             }}
//             whileTap={{
//               scale: 0.95,
//               rotate: "2.5deg",
//             }}
//             className=" px-10 py-2 bg-teal-500 cursor-pointer"
//           >
//             click
//           </motion.button>
//           <motion.button
//             whileHover={{
//               scale: 1.15,
//             }}
//             whileTap={{
//               scale: 0.85,
//               rotate: "-2.5deg",
//             }}
//             className=" px-10 py-2 mt-1 bg-deep-orange-500 cursor-pointer"
//           >
//             click
//           </motion.button>
//         </MotionConfig>
//       </div> */}
//       {/* <div className=" grid place-content-center h-screen">
//         <button
//           onClick={handleClick}
//           className="px-10 py-2 bg-teal-500 cursor-pointer"
//         >
//           show/hide
//         </button>
//         <motion.div
//           variants={{
//             initial: {
//               rotate: "0deg",
//             },
//             flip: {
//               rotate: "360deg",
//             },
//             banana: {
//               rotate: "360deg",
//             },
//           }}
//           whileHover="banana"
//           initial="initial"
//           animate={controls}
//           className=" w-40 mt-2 h-24 bg-black"
//         ></motion.div>
//       </div>
//       <div className=" h-[300vh] grid place-content-center">
//         <div className="h-[100vh]"></div>
//         <motion.div
//           initial={{
//             opacity: 0,
//           }}
//           whileInView={{
//             opacity: 1,
//           }}
//           transition={{
//             duration: 3,
//           }}
//           className=" bg-black h-[50vh] w-screen"
//         ></motion.div>
//         <div
//           ref={ref}
//           className=" h-[100vh] w-screen bg-green-500 transition-all duration-100"
//         ></div>
//       </div>
//     </>
//   );
// };

// export default About;
