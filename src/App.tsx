import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import DailyRoutines from './pages/DailyRoutines';
// import Login from './pages/Login';
import Music from './pages/Music/Music';
import SideBar from "./SideBar";

function App() {
  return (
    <Router>
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Login" element={<Login />} /> */}
        <Route path="/routine" element={<DailyRoutines />} />
        <Route path="/music" element={<Music />} />
      </Routes>
    </Router>
  );
}

export default App;
