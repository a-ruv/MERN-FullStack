import './App.css';
import Main from './views/Main'
import Detail from './views/Detail'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Detail />} path="/products/:id" />
      </Routes>
    </div>
  );
}

export default App;
