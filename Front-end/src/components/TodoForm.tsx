import { useState, FormEvent } from 'react';
import { FaPlus } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface TodoFormProps {
  addTodo: (title: string) => void;
}

const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-grow p-4 bg-white/80 border-2 border-transparent rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all duration-300 shadow-sm placeholder-gray-500 text-gray-800"
      />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="flex items-center justify-center px-6 py-4 bg-gradient-to-r from-pink-500 to-orange-400 text-white font-bold rounded-xl shadow-lg shadow-pink-200 hover:shadow-xl hover:shadow-pink-300 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!title.trim()}
      >
        <FaPlus className="mr-2" />
        Add
      </motion.button>
    </form>
  );
};

export default TodoForm;