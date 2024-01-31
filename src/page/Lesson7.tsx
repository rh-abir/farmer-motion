import { motion, useMotionValue, useTransform } from "framer-motion";

const Lesson7 = () => {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-200, 200], [0.5, 1.5]);
  const rotate = useTransform(x, [-200, 200], [0, 180]);

  return (
    <div className="border border-red-500 size-[600px] flex flex-col justify-center items-center">
      <motion.div
        style={{ x, scale, rotate }}
        drag="x"
        dragSnapToOrigin
        dragConstraints={{ left: 0, right: 0 }}
        className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5"
      ></motion.div>
    </div>
  );
};

export default Lesson7;
