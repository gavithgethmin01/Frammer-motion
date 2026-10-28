import { motion } from "framer-motion";

const spanTags = [
  { id: 1, name: "Framemer Motion 01" },
  { id: 2, name: "Framemer Motion 02" },
  { id: 3, name: "Framemer Motion 03" },
  { id: 4, name: "Framemer Motion 04" },
  { id: 5, name: "Framemer Motion 05" },
];

const App = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      // whileHover={{ scale: 1.1 }}
      className="bg-emerald-100 h-screen grid items-center justify-center text-5xl font-bold text-emerald-900 text-shadow-emerald-200 shadow-sm "
    >
      {spanTags.map((spanTag) => {
        return (
          <motion.span
            key={spanTag.id}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="flex item-center gap-6 justify-center p-10 bg-emerald-50 rounded-[25px] shadow-2xl selection:bg-emerald-800 selection:text-emerald-100 border-2 border-solid border-emerald-800"
          >
            {spanTag.name}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export default App;
