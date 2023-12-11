import { useScroll, useSpring, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MyProject from "../MyProject/MyProject";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
const Home = () => {
  const { scrollYProgress } = useScroll();
  const background = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 1],
    ["rgb(94 234 212)", "rgb(45 212 191)", "rgb(20 184 166)", "rgb(15 118 110)"]
  );
  const scaleX = useSpring(scrollYProgress);
  return (
    <div className="bg-[#0f172a] scroll-smooth">
      <motion.div
        style={{
          scaleX: scaleX,
          background,
        }}
        className="sticky origin-left top-0  w-full h-2 "
      ></motion.div>

      <Header></Header>
      <div className=" mt-10 h-[65vh]">
        <Banner></Banner>
      </div>
      <Skills></Skills>
      <MyProject></MyProject>
      <Education></Education>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
