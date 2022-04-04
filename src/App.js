import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './Components/Header-Section/Header';
import Home from './Components/Home/Home';
import Review from './Components/Review-Section/Review';
import Dashboard from './Components/Dashboard/Dashboard';
import Blogs from './Components/Blogs/Blogs';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/Review' element={<Review></Review>} ></Route>
        <Route path='/Dashboard' element={<Dashboard></Dashboard>} ></Route>
        <Route path='/Blogs' element={<Blogs></Blogs>} ></Route>
        
      </Routes>
    </div>
  );
}

export default App;
