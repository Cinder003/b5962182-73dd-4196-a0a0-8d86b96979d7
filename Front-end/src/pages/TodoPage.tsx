import Header from '../components/Header';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import Loader from '../components/ui/Loader';
import { useTodos } from '../hooks/useTodos';
import TodoActions from '../components/TodoActions';

const TodoPage = () => {
  const {
    todos,
    loading,
    addTodo,
    toggleTodo,
    deleteTodo,
    filter,
    setFilter,
    searchQuery,
    setSearchQuery,
  } = useTodos();

  return (
    <main className="w-full max-w-3xl mx-auto">
      <div className="bg-white/50 backdrop-blur-xl p-6 md:p-8 rounded-3xl shadow-2xl shadow-purple-200/50 border border-white/30">
        <Header />
        <TodoForm addTodo={addTodo} />
        <TodoActions
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filter={filter}
          setFilter={setFilter}
        />
        <div className="mt-4">
          {loading ? (
            <Loader />
          ) : (
            <TodoList
              todos={todos}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default TodoPage;