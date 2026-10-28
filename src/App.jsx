import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Framer Motion 01" },
    { id: 2, name: "Framer Motion 02" },
    // { id: 3, name: "Framer Motion 03" },
    // { id: 4, name: "Framer Motion 04" },
    // { id: 5, name: "Framer Motion 05" },
  ]);

  const addItem = () => {
    const newId = Date.now();
    setItems((prev) => [
      ...prev,
      { id: newId, name: `Framer Motion ${prev.length + 1}` },
    ]);
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const shuffleItems = () => {
    setItems((prev) => [...prev].sort(() => Math.random() - 0.5));
  };

  return (
    <div className="min-h-screen bg-emerald-50 py-16 px-4">
      {/* Header + Buttons */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold text-emerald-900 mb-6">
          Layout Animation Demo
        </h1>

        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={addItem}
            className="px-6 py-3 bg-emerald-700 text-white rounded-xl font-medium hover:bg-emerald-800 transition"
          >
            + Add Item
          </button>

          <button
            onClick={shuffleItems}
            className="px-6 py-3 bg-emerald-800 text-white rounded-xl font-medium hover:bg-emerald-900 transition"
          >
            Shuffle
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {items.map((item) => (
            <motion.div
              key={item.id}
              layout // ← layout animation
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                layout: { duration: 0.4, type: "spring", bounce: 0.3 },
                opacity: { duration: 0.25 },
              }}
              whileHover={{ scale: 1.04 }}
              className="relative bg-white p-8 rounded-2xl shadow-lg border-2 border-emerald-200 text-center cursor-pointer"
            >
              <h3 className="text-xl font-bold text-emerald-900">
                {item.name}
              </h3>

              {/* Remove button */}
              <button
                onClick={() => removeItem(item.id)}
                className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition text-sm font-bold"
              >
                ✕
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
