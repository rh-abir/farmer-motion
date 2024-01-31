import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Lesson9 = () => {
  const [visible, setVisible] = useState(true);

  const box = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
      },
    },
    exit: {
      opacity: 0,

      y: 200,
      transition: {
        duration: 1.5,
      },
    },
  };

  return (
    <div className="border border-red-500 size-[500px] flex flex-col justify-center items-center">
      <AnimatePresence>
        <motion.button layout onClick={() => setVisible(!visible)}>
          Toglge
        </motion.button>
        {visible && (
          <motion.div
            className="size-52 bg-indigo-500 rounded-lg flex flex-wrap gap-5"
            variants={box}
            initial="hidden"
            animate="visible"
            exit="exit"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Lesson9;
