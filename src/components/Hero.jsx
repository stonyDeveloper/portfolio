import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { textVariant, fadeIn } from "../utils/motion";

const Hero = () => {
  return (
    <section className="relative w-full h-[110vh] mx-auto">
      <motion.div
        className={` absolute inset-0 top-[30%] left-[7%] max-w-7xl mx-auto flex  items-start gap-5`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5 }}
      >
        {/* <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-black" />
          <div className="w-1 sm:h-80 h-40 black-gradient" />
        </div> */}

        <div className="mt-8">
          {/* <p className={`text-gray-300  font-medium text-[18px]`}>
           <span className="">Hi, my name is </span> 
          </p> */}
          <h1 className="text-[#B006AF] text-[75px] -ml-[8px] font-bold leading-[1.1] tracking-widest">
            Frontend <br />
            Developer.
          </h1>
          <p className="text-[#b1e7d3] mt-5 text-[16px] tracking-widest leading-8">
            Product-centric software engineer specializing
            in building <br /> exceptional digital experiences. I like to craft solid <br /> and
            scalable frontend products with great user experiences.
          </p>
          {/* <p className={`${styles.heroSubText} mt-4 `}>
            I develop 3D visuals, user <br className="sm:block hidden" />{" "}
            interfaced and web applications
          </p> */}
        </div>
      </motion.div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[32px] h-[60px] rounded-3xl border-2 border-secondary border-[#B006AF] flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 rounded-full bg-[#b1e7d3] mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
