import { Todo } from '../interfaces/Todo';
import TodoItem from './TodoItem';
import { AnimatePresence } from 'framer-motion';
import EmptyState from './ui/EmptyState';

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: string, completed: boolean) => void;
  deleteTodo: (id: string) => void;
}

const TodoList = ({ todos, toggleTodo, deleteTodo }: TodoListProps) => {
  if (todos.length === 0) {
    return <EmptyState />;
  }

  return (
    <ul className="space-y-3 h-[400px] overflow-y-auto pr-2 custom-scrollbar">
      <AnimatePresence>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default TodoList;