import { FiSearch, FiFilter } from 'react-icons/fi';
import { FilterStatus } from '../hooks/useTodos';
import { twMerge } from 'tailwind-merge';

interface TodoActionsProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filter: FilterStatus;
  setFilter: (filter: FilterStatus) => void;
}

const filterOptions: { label: string; value: FilterStatus }[] = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Completed', value: 'completed' },
];

const TodoActions = ({ searchQuery, setSearchQuery, filter, setFilter }: TodoActionsProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-6">
      {/* Search Bar */}
      <div className="relative flex-grow">
        <FiSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search for a todo..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-white/80 border-2 border-transparent rounded-xl focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all duration-300 shadow-sm placeholder-gray-500 text-gray-800"
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex items-center justify-center bg-white/80 p-1 rounded-xl shadow-sm gap-1">
        {filterOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => setFilter(option.value)}
            className={twMerge(
              'px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-2',
              filter === option.value
                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-200'
                : 'text-gray-600 hover:bg-purple-100'
            )}
          >
            <FiFilter />
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TodoActions;