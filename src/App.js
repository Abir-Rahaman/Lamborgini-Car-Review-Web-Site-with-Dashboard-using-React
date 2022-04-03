import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './Components/Header-Section/Header';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        
      </Routes>
    </div>
  );
}

export default App;
