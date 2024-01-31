import { motion, useDragControls } from "framer-motion";

const Lesson6 = () => {
  const controle = useDragControls();

  return (
    <div
      onPointerDown={(e) => controle.start(e)}
      className="border border-red-500 size-[600px] flex flex-col justify-center items-center"
    >
      <motion.div className="w-64 h-10 bg-green-500 rounded-lg flex flex-wrap gap-5"></motion.div>
      <motion.div
        drag="x"
        dragControls={controle}
        className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5"
      ></motion.div>
    </div>
  );
};

export default Lesson6;
