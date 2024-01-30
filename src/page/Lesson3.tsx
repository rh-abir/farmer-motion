import { motion, useCycle } from "framer-motion";

const Lesson3 = () => {
  const boxAnimation = [
    { x: 0, y: 0, opacity: 1 },
    { x: 100, y: 100, opacity: 0.5 },
    { x: -100, y: 100, opacity: 0.25 },
    { x: -100, y: -100, opacity: 0 },
  ];
  const [animate, cycle] = useCycle(...boxAnimation);

  return (
    <div className="border border-red-500 size-[600px] flex flex-col justify-center items-center">
      <motion.div
        animate={animate}
        onTap={() => cycle()}
        className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5"
      ></motion.div>
    </div>
  );
};

export default Lesson3;
