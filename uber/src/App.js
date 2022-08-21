
import './App.css';
import Signup from './Components/Signup';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthProvider from './Contexts/AuthContext';

function App() {

  
  
  return (
    <>
    
    <AuthProvider>
      
      <Router>
        <Routes>
          <Route path="/" element={<Signup/>} />
        </Routes>
      </Router>
      
   
    </AuthProvider>
    </>
  );
}

export default App;
