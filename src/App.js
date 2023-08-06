// import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Addpackage from './Pages/Addpackage/Addpackage';
import Package from './Pages/Package/Package';
import Book from './Pages/Book/Book';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
import Edit from './Pages/Edit/Edit';
import Viewpackage from './components/ViewPackage/Viewpackage';
import Services from './Pages/Services/Services';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/addpackage' element={<Addpackage/>}></Route>
      <Route path='/package' element={<Package/>}></Route>
      <Route path='/book' element={<Book/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/registration' element={<Registration/>}></Route>
      <Route path='/edit-package/:id' element={<Edit/>}></Route>
      <Route path='/viewpackage/:name' element={<Viewpackage/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
    </Routes>
      
    </>
  );
}

export default App;
