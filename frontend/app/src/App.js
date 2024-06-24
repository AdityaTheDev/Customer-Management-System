import './App.css';
import AddCustomer from './routes/AddCustomer';
import Home from './routes/Home'
import SearchCustomer from './routes/SearchCustomer';
import DisplayCustomer from './routes/DisplayCustomer';
import DeleteCustomer from './routes/DeleteCustomer';
import UpdateCustomer from './routes/UpdateCustomer';
import {Routes,Route, BrowserRouter} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/AddCustomer" element={<AddCustomer/>}></Route>
        <Route path="/SearchCustomer" element={<SearchCustomer/>}></Route>
        <Route path="/DisplayCustomer" element={<DisplayCustomer/>}></Route>
        <Route path="DeleteCustomer" element={<DeleteCustomer/>}></Route>
        <Route path="/UpdateCustomer" element={<UpdateCustomer/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
