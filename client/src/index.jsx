import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

function Counter() {
  const [count, setCount] = useState(0);

  // Подібно до componentDidMount та componentDidUpdate:
  useEffect(() => {
    // Оновлюємо заголовок документа, використовуючи API браузера
    document.title = `Ви натиснули ${count} разів`;
  });

  return (
    <div>
      <p>Ви натиснули {count} разів</p>
      <button onClick={() => setCount(count + 1)}>
        Натисни мене
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counter />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
