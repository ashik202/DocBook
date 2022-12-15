
import './App.css';
import { BrowserRouter,Routes, Route  } from "react-router-dom";
import UserSignupPage from './Pages/UserSignupPage';

import UserLogin from './Pages/UserLoginPage';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      
      <Route path="/usersignup" element={ <UserSignupPage/> } />
      <Route path="/userlogin" element={ <UserLogin/> } />
      
      </Routes>
      </BrowserRouter>
    

      
      
    </div>
  );
}

export default App;
