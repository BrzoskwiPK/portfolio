import { motion } from "framer-motion";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        src="avatar2.jpg"
        alt="Photo of the developer"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          I'm Gabriel. You might know me as a sophomore based in Kraków, Poland.
          I've been coding for over 6 years now. My favourite technologies are
          React and TypeScript. Nevertheless I am also interested in backend,
          that's why my commercial position is Full-stack Software Engineer. I
          like building modern scalable applications that not only work well,
          but also look decent. I love my job and feel extremely satisfied in
          giving people what they need to promote their brand. Don't hesitate to
          contact me if you want to reach something special together!
        </p>
      </div>
    </motion.div>
  );
};

export default About;
