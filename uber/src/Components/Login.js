import React, { useRef ,useState} from 'react';
import "./Signup.css"
import {useAuth} from "../Contexts/AuthContext"
import {Link,useNavigate }from "react-router-dom"
import Alert from './Alert';



// const googlesignIn =()=>{
  

// }


export default function Login() {
  const emailRef=useRef();
  const passwordRef=useRef();
  
  const {login} = useAuth()
  const [error,setError] = useState('')
  const [loading,setLoading] = useState(false)
  let navigate = useNavigate();


  async function handleSubmit(e){
    e.preventDefault()
  
    

    try{
      setError('')
    await login(emailRef.current.value,passwordRef.current.value)
    console.log("login")
    navigate("/Workspace")
    }catch{
      setError('Failed to login')
    }
    setLoading(false)
  }
  
  return (
    <body className="bg">
        <div className="login" >
            <div className="login__container">
                <img
                    src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png"
                    alt="logo"
                />

                <h1 className='signin'>LogIn</h1>
                {error && <Alert/>}
                
                
                
                
             <div className='form'>
                <form id="email">
              
              <input className="email" style={{width: '270px',padding:"8px 10px",color:"white",height:"30px", borderRadius:"15px",backdropFilter:"blur(5px)", backgroundColor:"rgb(56, 56, 56)", border:"none"}} name="email" type="email" ref={emailRef}  required placeholder="Email" />
            </form>

            <form id="password">
              
              <input className="password" style={{width: '270px',position:"relative",padding:"8px 10px",color:"white",height:"30px", borderRadius:"15px",backdropFilter:"blur(5px)", backgroundColor:"rgb(56, 56, 56)", border:"none"}} name="password" type="password"  ref={passwordRef} required placeholder="Password" />
            </form>

            {/* <form id="conf-password">
              
              <input classname="conf-password"  style={{width: '270px',padding:"8px 10px",color:"white",height:"30px", borderRadius:"15px",backdropFilter:"blur(5px)", backgroundColor:"rgb(56, 56, 56)", border:"none"}} name ="confpassword"  type="password" ref={confpasswordRef}  required placeholder="Confirm Password" />
            </form> */}
            
            </div>
            <button diasbled={loading} onClick={handleSubmit} className='signup'>LogIn</button>
            
            <p>Forgot password?</p>
           
            <Link to="/" style={{padding:"12px", textDecoration:"none",  margin: "12px", color:"pink"}}>Create new workspace?</Link>
            </div>
            {/* <h3>Error {formaterrors()}</h3> */}
        </div >
        </body>


  )
}
