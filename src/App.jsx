import { motion } from "framer-motion";

const App = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-emerald-100 h-screen flex items-center justify-center text-5xl font-bold text-emerald-900 text-shadow-emerald-200 shadow-sm"
    >
      <span className="flex item-center justify-center p-10 bg-emerald-50 rounded-[25px] shadow-2xl shadow-emerald-600">
        Hello Frammer Motion!
      </span>
    </motion.div>
  );
};

export default App;
