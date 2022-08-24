

import React ,{useState} from 'react'
import {useAuth} from "../Contexts/AuthContext"
import {useNavigate} from "react-router-dom"
import Alert from "./Alert"
import Naming from "./Modals/Naming"
import "./Workspace.css"


export default function Workspace() {
  
    const {currentUser,logout} = useAuth()
    const[error,setError] = useState()
    const[render,setRender] = useState(false)
    const [count,setCount] = useState("i am here");
    const [change,setChange] = useState();


    let navigate = useNavigate()
    

    async function handleLogout(){
            


        setError("")
        try{
            await logout()
            navigate("/Login")
        }catch{
            setError("Failed to logout")
        }
    }

    function newspace(){
      setRender(true);
      setCount("hii")
     
        
    }
  return (
    <div className='container'>
      <div className="body">
          {/* {currentUser.email} */}
          {error && <Alert/>}
        <button onClick={newspace}>Create new workspace </button>
        <button onClick={handleLogout}>Logout</button>

        <div className='overlay'>
          {render && <Naming handleRender={setRender}/>}
        </div>
      </div>
    </div>
  )
}
