import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const Lesson4 = () => {
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref, { once: true });

  return (
    <div className="border border-red-500 size-[600px] flex flex-col justify-center items-center">
      <motion.div
        ref={ref}
        animate={
          inView
            ? { opacity: 1, x: 0, transition: { delay: 1 } }
            : { opacity: 0, x: -500 }
        }
        className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5"
      ></motion.div>
    </div>
  );
};

export default Lesson4;
