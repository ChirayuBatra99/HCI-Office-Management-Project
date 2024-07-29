import logo from './logo.svg';
import styles from './App.module.scss';
import ScheduleEmail from './components/ScheduleEmail';
import ScheduledMeetings from './components/ScheduledMeetings';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import WorkingHours from './components/WorkingHours';
import Hero from './components/hero'
// import NavBar from './components/NavBar1';

function App() {
  return (
    <div className={styles.app}>
      {/* <Navbar/> */}
      <Router>
        <Navbar/>
         <Routes>
         <Route path="/home" element={<Hero/>} />
            <Route path="/" element={<ScheduledMeetings/>} />
            <Route path="/emails" element={<ScheduleEmail/>} />
            <Route path="/workhours" element={<WorkingHours/>} />
         </Routes>
      </Router>
    </div>
  );
}

export default App;
