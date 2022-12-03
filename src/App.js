import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import AddEvents from './pages/AddEvents/AddEvents';
import OrganizerProfile from './pages/OrganizerProfile/OrganizerProfile';
import LoginPage from './pages/LoginPage/LoginPage';
import { Nav } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-event" element={<AddEvents />} />
          <Route path="/apply-organizer" element={<LoginPage />} />
          <Route path="/organizer-profile" element={<OrganizerProfile />} />
        </Routes>
        </Router>
    </div>
  );
}

export default App;
