import ReactDOM from 'react-dom';
import { StrictMode } from 'react';

const App = () => {
  return (
    <header className="w-full mb-10 text-center p-7 bg-gradient-to-b from-purple-400 to-red-500">
      Portfolio
    </header>);
}

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);