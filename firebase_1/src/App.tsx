import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Main } from './pages/main';
import { Login } from './pages/login';
import { NavBar } from './components/navbar';

/*
  npm install react-router-dom
  npm install firebase
  npm install react-firebase-hooks

*/
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
