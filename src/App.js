import logo from './logo.svg';
import './App.css';
import ScheduleEmail from './components/ScheduleEmail';
import ScheduledMeetings from './components/ScheduledMeetings';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import WorkingHours from './components/WorkingHours';

function App() {
  return (
    <div >
     
      <Router>
        <Navbar/>
         <Routes>
            <Route path="/" element={<ScheduledMeetings/>} />
            <Route path="/emails" element={<ScheduleEmail/>} />
            <Route path="/workhours" element={<WorkingHours/>} />
         </Routes>
      </Router>
    </div>
  );
}

export default App;
