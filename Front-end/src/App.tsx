import TodoPage from './pages/TodoPage';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <div className="min-h-screen w-full bg-gradient-to-br from-cyan-100 via-purple-100 to-pink-200 p-4 flex items-center justify-center font-sans">
        <TodoPage />
      </div>
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              background: 'linear-gradient(to right, #6ee7b7, #34d399)',
              color: '#047857',
            },
            iconTheme: {
              primary: '#047857',
              secondary: 'white',
            },
          },
          error: {
            style: {
              background: 'linear-gradient(to right, #fca5a5, #f87171)',
              color: '#b91c1c',
            },
            iconTheme: {
              primary: '#b91c1c',
              secondary: 'white',
            },
          },
        }}
      />
    </>
  );
}

export default App;