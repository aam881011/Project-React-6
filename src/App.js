import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Files from "./component/Files/Files";
import Courses from "./component/Courses/Courses";
import Friends from "./component/Friends/Friends";
// import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
import Navbar from "./component/Navbar/Navbar";
import Plans from "./component/Plans/Plans";
import Projects from "./component/Projects/Projects";
import Settings from "./component/Settings/Settings";
import Sidbar from "./component/Sidbar/Sidbar";
import Dashboard from "./component/Dashboard/Dashboard";
import Profile from "./component/Profile/Profile";

function App() {
  return (
    <div className="App">
      <div className="clasCont">
        <Sidbar />
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Courses" element={<Courses />} />
            <Route path="/Friends" element={<Friends />} />
            <Route path="/Files" element={<Files />} />
            <Route path="/Plans" element={<Plans />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
