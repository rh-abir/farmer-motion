import { motion } from "framer-motion";

const Lesson1 = () => {
  const initla = { rotate: 0 };
  const animate = { rotate: 360 };

  return (
    <div>
      <motion.div
        className="size-64 bg-indigo-500 rounded-lg"
        initial={initla}
        animate={animate}
        transition={{ duration: 2 }}
      ></motion.div>
    </div>
  );
};

export default Lesson1;
