import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

const Lesson2 = () => {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start((i) => ({ x: 200, transition: { delay: i * 1 } }));
    controls;
  }, []);

  return (
    <div className="border border-red-500 size-[600px] flex flex-col justify-center items-center">
      <motion.div
        animate={controls}
        custom={1}
        onMouseEnter={() => controls.stop()}
        className="size-40 bg-indigo-500 rounded-lg flex flex-wrap gap-5"
      ></motion.div>
      <motion.div
        animate={controls}
        custom={2}
        className="size-40 bg-indigo-500 rounded-lg flex flex-wrap gap-5"
      ></motion.div>
      <motion.div
        animate={controls}
        custom={3}
        className="size-40 bg-indigo-500 rounded-lg flex flex-wrap gap-5"
      ></motion.div>
    </div>
  );
};

export default Lesson2;
