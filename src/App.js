import logo from './logo.svg';
import './App.css';
import { Login } from './components/login';
import { useState } from 'react';
import { Register } from './components/register';
function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="App text-center flex min-h-[100vh] items-center justify-center text-black bg-gradient-to-r from-purple-600 via-pink-300 to-orange-400 h-64">
      {currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />}
    </div>
  );
}

export default App;
