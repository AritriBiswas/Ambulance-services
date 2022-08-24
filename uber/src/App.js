
import './App.css';
import Signup from './Components/Signup';
import { BrowserRouter as Router, Route, Routes,Link} from "react-router-dom";
import "firebase/messaging"
import AuthProvider from './Contexts/AuthContext';
import {useAuth,useAuthState} from "./Contexts/AuthContext"
import Login from "./Components/Login"
import Workspace from './Components/Workspace';
// import Newspace from './Components/Newspace';
// import PrivateRoute from "./Components/PrivateRoute"
import WorkspCreate from './Components/Modals/WorkspCreate';
import { useStateValue } from './Contexts/StateProvider';
import Newspace from "./Components/Newspace"
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat';
import PrivateRoute from "./Components/PrivateRoute"
// import {useAuth} from "./Contexts/AuthContext"

// const AuthenticatedRoute = ({component : Component, ...props}) => {
//   const {isAuthenticated} = useAuthState()
//   return(
//     <Route
//     {...props}
//     render={routeProps => 
//     isAuthenticated ? <Component {...routeProps}/>:<Link to="/Ligin"/>
//     }
//     />
//   )
// }


function App() {
  // console.log(currentUser)
  const [{user},dispatch] = useStateValue()
  // console.log(user)
  
  
  
  return (
    <>
    
    <AuthProvider>
      {/* <Router>
        <Routes>
          <Route path="/Login" element={<Login/>}/>
        </Routes>
        
      </Router> */}
    {/* <Router>
        {!user ? (
          <Routes>
          <Route path="/" element={<Signup/>}/>
          <Route path="/Login" element={<Login/>}/>
          {console.log("userinfo",user)}
          </Routes>
        ) : (

            <>
            {console.log("userinfo",user)}
              <Route path="/Workspace" element={<Workspace/>}/>
              <Header />
              <div className="app__body">
                <Sidebar />
                <Routes>
                  <Route path="/room/:roomId">
                    <Chat />
                  </Route>
                  <Route path="/">
                    <h1>Welcome</h1>
                  </Route>

                </Routes>
              </div>
            </>
          )}
      </Router>
    */}

    <Router>
      <Routes>
        <Route exact path="/" element={<Signup/>}/>
        <Route  exact path="/Login" element={<Login/>}/>
        <Route  exact path="/Workspace" element={<Workspace/>}/>
        <Route  exact path="/Newspace" element={<Newspace/>}/>
      </Routes>
    </Router>
    </AuthProvider>
    </>
  );
}

export default App;
