import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import DailyRoutine from './pages/DailyRoutine';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route
          path="/routine"
          element={
            <DailyRoutine />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
