import { Todo } from '../interfaces/Todo';
import { FaTrash, FaCheck, FaUndo } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: string, completed: boolean) => void;
  deleteTodo: (id: string) => void;
}

const TodoItem = ({ todo, toggleTodo, deleteTodo }: TodoItemProps) => {
  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className={twMerge(
        'flex items-center p-4 mb-3 rounded-xl shadow-md transition-all duration-300',
        todo.completed
          ? 'bg-gradient-to-r from-green-100 to-emerald-100 border-l-4 border-emerald-400'
          : 'bg-white/90 border-l-4 border-purple-400'
      )}
    >
      <span
        className={twMerge(
          'flex-grow text-gray-800 transition-all duration-300',
          todo.completed ? 'line-through text-gray-500' : ''
        )}
      >
        {todo.title}
      </span>
      <div className="flex items-center gap-3 ml-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => toggleTodo(todo.id, !todo.completed)}
          className={twMerge(
            'p-2 rounded-full text-white transition-all duration-300 shadow-md',
            todo.completed
              ? 'bg-yellow-400 hover:bg-yellow-500 shadow-yellow-200'
              : 'bg-green-500 hover:bg-green-600 shadow-green-200'
          )}
          aria-label={todo.completed ? 'Mark as active' : 'Mark as completed'}
        >
          {todo.completed ? <FaUndo /> : <FaCheck />}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => deleteTodo(todo.id)}
          className="p-2 rounded-full bg-red-500 hover:bg-red-600 text-white transition-all duration-300 shadow-md shadow-red-200"
          aria-label="Delete todo"
        >
          <FaTrash />
        </motion.button>
      </div>
    </motion.li>
  );
};

export default TodoItem;