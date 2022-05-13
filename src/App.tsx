import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import DailyRoutine from './pages/DailyRoutine';
import Login from "./pages/Login";
import SideBar from "./SideBar";


function App() {
  return (
    <Router>
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/routine" element={<DailyRoutine />}/>
      </Routes>
    </Router>
  );
}

export default App;
