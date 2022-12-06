import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page/Home';
import Appointment from './page/appointment/Appoinment';
import Create from './page/appointment/Create';
import Detail from './page/appointment/Detail';
import MenuBar from './component/MenuBar';
import FooterMenu from './component/FooterMenu';

function App() {
  return (
    <div>
      <BrowserRouter>
        <MenuBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/appointment" exact element={<Appointment />} />
          <Route path="/appointment/create" exact element={<Create />} />
          <Route path="/appointment/detail/:id" exact element={<Detail />} />
        </Routes>
        <FooterMenu />
      </BrowserRouter>
    </div>
  );
}

export default App;
