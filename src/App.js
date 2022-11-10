import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main-nav";
import Inbox from "./components/pages/Inbox";
import Today from "./components/pages/Today";
import Upcoming from "./components/pages/Upcoming";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div id="grid">
        <Router>
          <div id="main-nav">
            <Main />
          </div>
          <div id="sidebar">
            <Sidebar />
          </div>
          <div id="right-content">
            <Routes>
              <Route exact path="/" element={<Inbox />}></Route>
              <Route exact path="/today" element={<Today />}></Route>
              <Route exact path="/upcoming" element={<Upcoming />}></Route>
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
