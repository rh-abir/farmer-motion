import { motion } from "framer-motion";
import { useRef } from "react";

const Lesson1 = () => {
  const parent = {
    hidden: { x: 0, y: 0, opacity: 0 },
    visible: {
      x: [0, 300, -300, 0],
      y: [0, 300, -300, 0],
      rotate: [0, 300, -300, 0],

      opacity: 1,
      transition: {
        duration: 5,

        repeat: Infinity,
        ease: "linear",
        opacity: {
          duration: 0.5,
        },

        rotate: {
          delay: 1,
          repeat: Infinity,
        },
      },
    },

    hover: { opacity: 1 },
    tap: { scale: 1.1, boxShadow: "0px 10px 10px #000" },
  };

  //   const child = {
  //     hidden: { opacity: 0, scale: 0.1 },
  //     visible: {
  //       opacity: 1,
  //       scale: 1,
  //       transition: {
  //         ease: "easeInOut",
  //         duration: 5,
  //       },
  //     },
  //   };

  const prentRef = useRef(null);

  return (
    <div
      ref={prentRef}
      className="border border-red-500 size-[500px] flex justify-center items-center"
    >
      <motion.div
        className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
        variants={parent}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        drag
        dragElastic={0.7}
        dragConstraints={prentRef}
        whileDrag="tap"
      >
        {/* <motion.div
          variants={child}
          className="bg-cyan-400 size-20 rounded-sm"
        ></motion.div>
        <motion.div
          variants={child}
          className="bg-cyan-400 size-20 rounded-sm"
        ></motion.div>
        <motion.div
          variants={child}
          className="bg-cyan-400 size-20 rounded-sm"
        ></motion.div>
        <motion.div
          variants={child}
          className="bg-cyan-400 size-20 rounded-sm"
        ></motion.div> */}
      </motion.div>
    </div>
  );
};

export default Lesson1;
