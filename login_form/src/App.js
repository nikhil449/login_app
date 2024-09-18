
import './App.css';
import Signup from './components/Signup';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Login from './components/Login';


function App() {
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Signup></Signup>}></Route>
          <Route path="/Login" element={<Login></Login>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
