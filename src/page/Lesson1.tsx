import { motion } from "framer-motion";

const Lesson1 = () => {
  const parent = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: "easeInOut",
        duration: 2,
      },
    },

    hover: { scale: 1.1, transition: { duration: 1 } },
    click: { scale: 1, rotate: 45 },
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

  return (
    <div>
      <motion.div
        className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
        variants={parent}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="click"
        onHoverStart={() => console.log("hover start")}
        onHoverEnd={() => console.log("hover end")}
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
