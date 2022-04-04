import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header-Section/Header';
import Home from './Components/Home/Home';
import Review from './Components/Review-Section/Review';
import Dashboard from './Components/Dashboard/Dashboard';
import Blogs from './Components/Blogs/Blogs';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/Review' element={<Review></Review>} ></Route>
        <Route path='/Dashboard' element={<Dashboard></Dashboard>} ></Route>
        <Route path='/Blogs' element={<Blogs></Blogs>} ></Route>
        <Route path='*' element={<NotFound></NotFound>} > </Route>
      </Routes>
    </div>
  );
}

export default App;
