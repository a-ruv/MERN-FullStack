import './App.css';
import Main from './views/Main'
import Detail from './views/Detail'
import { Routes, Route } from 'react-router-dom';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <Routes>
        <Route element={<Main />} path="/" />
        <Route element={<Detail />} path="/products/:id" />
        <Route element={<Update />} path="/products/:id/edit" />
      </Routes>
    </div>
  );
}

export default App;
