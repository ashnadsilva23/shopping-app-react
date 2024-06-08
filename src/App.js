import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './components/AddProduct';
import DeleteProduct from './components/DeleteProduct';
import SearchProduct from './components/SearchProduct';
import ViewAll from './components/ViewAll';
import ViewProduct from './components/ViewProduct';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddProduct/>}/>
      <Route path='/search' element={<SearchProduct/>}/>
      <Route path='/delete' element={<DeleteProduct/>}/>
      <Route path='/view' element={<ViewAll/>}/>
      <Route path='/viewproduct' element={<ViewProduct/>}/>

      </Routes></BrowserRouter>
    </div>
  );
}

export default App;
