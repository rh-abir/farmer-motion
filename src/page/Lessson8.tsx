import { motion, useScroll } from "framer-motion";

const Lessson8 = () => {
  const { scrollY, scrollYProgress } = useScroll();

  return (
    <motion.div
      className="h-2 w-full fixed top-0 bg-green-500"
      style={{ scaleX: scrollYProgress }}
    ></motion.div>
  );
};

export default Lessson8;
