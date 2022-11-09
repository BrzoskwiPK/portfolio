import { motion } from "framer-motion";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center sm:pt-[100px] md:pt-[150px] lg:pt-[200px]"
    >
      <div className="absolute border border-[#333333] rounded-full h-[150px] w-[150px] sm:h-[200px] sm:w-[200px] md:h-[200px] md:w-[200px] lg:h-[200px] lg:w-[200px] mt-52 animate-ping" />
      <div className="rounded-full border border-[#333333] rounded-full h-[300px] w-[300px] sm:h-[300px] sm:w-[300px] md:h-[300px] md:w-[300px] lg:h-[300px] lg:w-[300px] absolute mt-52" />
      <div className="rounded-full border border-[#333333] rounded-full h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[450px] md:w-[450px] lg:h-[500px] lg:w-[500px] absolute mt-52" />
      <div className="rounded-full border border-[#F7AB0A] opacity-20 h-[375px] w-[375px] sm:h-[500px] sm:w-[500px] md:h-[575px] md:w-[575px] lg:h-[650px] lg:w-[650px] absolute mt-52 animate-pulse" />
      <div className="rounded-full border border-[#333333] h-[425px] w-[425px] sm:h-[600px] sm:w-[600px] md:h-[700px] md:w-[700px] lg:h-[800px] lg:w-[800px] absolute mt-52" />
    </motion.div>
  );
};

export default BackgroundCircles;
