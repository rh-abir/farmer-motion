import { useAnimate } from "framer-motion";
import { useEffect } from "react";
const Lesson5 = () => {
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate([
      [scope.current, { rotate: 45 }],
      [scope.current, { opacity: 0 }],
      [scope.current, { rotate: 45 }],
      [scope.current, { opacity: 1 }],
      [scope.current, { rotate: 90 }],
      [scope.current, { x: 200 }],
      [scope.current, { x: -200 }],
      [scope.current, { x: 0 }],
    ]);
  }, []);

  return (
    <div className="border border-red-500 size-[600px] flex flex-col justify-center items-center">
      <div
        ref={scope}
        className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5"
      ></div>
    </div>
  );
};
export default Lesson5;
