import { useState, useEffect, useCallback } from 'react';
import { Todo } from '../interfaces/Todo';
import api from '../api/axios';
import toast from 'react-hot-toast';
import { useDebounce } from './useDebounce';

export type FilterStatus = 'all' | 'active' | 'completed';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<FilterStatus>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const fetchTodos = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (filter !== 'all') {
        params.append('status', filter);
      }
      if (debouncedSearchQuery) {
        params.append('search', debouncedSearchQuery);
      }
      const response = await api.get(`/todos?${params.toString()}`);
      setTodos(response.data);
    } catch (error) {
      toast.error('Failed to fetch todos.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [filter, debouncedSearchQuery]);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const addTodo = async (title: string) => {
    try {
      const response = await api.post('/todos', { title });
      setTodos((prevTodos) => [response.data, ...prevTodos]);
      toast.success('Todo added successfully!');
    } catch (error) {
      toast.error('Failed to add todo.');
      console.error(error);
    }
  };

  const toggleTodo = async (id: string, completed: boolean) => {
    try {
      const response = await api.patch(`/todos/${id}`, { completed });
      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id === id ? response.data : todo))
      );
      toast.success(`Todo marked as ${completed ? 'completed' : 'active'}!`);
    } catch (error) {
      toast.error('Failed to update todo.');
      console.error(error);
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      await api.delete(`/todos/${id}`);
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      toast.success('Todo deleted successfully!');
    } catch (error) {
      toast.error('Failed to delete todo.');
      console.error(error);
    }
  };

  return {
    todos,
    loading,
    addTodo,
    toggleTodo,
    deleteTodo,
    filter,
    setFilter,
    searchQuery,
    setSearchQuery,
  };
};