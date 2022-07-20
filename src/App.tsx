import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import DailyRoutines from './pages/DailyRoutines';
import MusicList from './pages/MusicList/MusicList';
import SideBar from "./SideBar";

function App() {
  return (
    <Router>
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/routine" element={<DailyRoutines />} />
        <Route path="/music" element={<MusicList />} />
      </Routes>
    </Router>
  );
}

export default App;
