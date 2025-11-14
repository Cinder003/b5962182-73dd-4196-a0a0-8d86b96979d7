import { FaClipboardList } from 'react-icons/fa';
import { motion } from 'framer-motion';

const EmptyState = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center h-[400px] text-center bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 rounded-xl p-8"
    >
      <FaClipboardList className="text-6xl text-purple-400 mb-4" />
      <h3 className="text-2xl font-bold text-gray-700">No Todos Yet!</h3>
      <p className="text-gray-500 mt-2">
        Looks like your list is empty. Add a new todo to get started!
      </p>
    </motion.div>
  );
};

export default EmptyState;