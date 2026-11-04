import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';

function App() {
  return (
    <>
      <h1 className="text-4xl font-bold text-red-500 underline">
        Tailwind работает
      </h1>
      <Header />
      <Main />
    </>
  );
}

export default App