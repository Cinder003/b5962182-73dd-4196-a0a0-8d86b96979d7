import { FaTasks } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-sm">
        Vibrant Todo List
      </h1>
      <p className="text-gray-600 mt-2 text-lg flex items-center justify-center gap-2">
        <FaTasks className="text-purple-500" />
        <span>Organize your life with a splash of color!</span>
      </p>
    </div>
  );
};

export default Header;