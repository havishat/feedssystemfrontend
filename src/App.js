import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationPage from './components/RegistrationPage'

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
        <Route path="/register" component={<RegistrationPage />} />
        <Route path="/login" component={<LoginPage />} />
        <Route path="/home" component={<HomePage />} />
        <Route path="/" component={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
