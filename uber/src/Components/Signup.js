import React, { useRef ,useState} from 'react';
import "./Signup.css"
import {useAuth} from "../Contexts/AuthContext"
import Alert from "./Alert"

const googlesignIn =()=>{
  

}


export default function Signup() {
  const emailRef=useRef();
  const passwordRef=useRef();
  const confpasswordRef=useRef();
  const {signup} = useAuth()
  const [error,setError] = useState('')
  const [loading,setLoading] = useState(false)


  async function handleSubmit(e){
    e.preventDefault()
  
    if(passwordRef.current.value!==confpasswordRef.current.value){
      return setError('passwords do not match')
    }

    try{
      setError('')
    await signup(emailRef.current.value,passwordRef.current.value,confpasswordRef.current.value)
    }catch{
      setError('Failed to create an account')
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

                <h1 className='signin'>SignIn</h1>
                {error && <Alert/>}
                
                <button diasbled={loading} onClick={googlesignIn}>Sign in with Google</button>
                <p>OR</p>
             <div className='form'>
                <form id="email">
              
              <input classname="email" style={{width: '270px',padding:"8px 10px",color:"white",height:"30px", borderRadius:"15px",backdropFilter:"blur(5px)", backgroundColor:"rgb(56, 56, 56)", border:"none"}} name="email" type="email" ref={emailRef}  required placeholder="Email" />
            </form>

            <form id="password">
              
              <input classname="password" style={{width: '270px',position:"relative",padding:"8px 10px",color:"white",height:"30px", borderRadius:"15px",backdropFilter:"blur(5px)", backgroundColor:"rgb(56, 56, 56)", border:"none"}} name="password" type="password"  ref={passwordRef} required placeholder="Password" />
            </form>

            <form id="conf-password">
              
              <input classname="conf-password"  style={{width: '270px',padding:"8px 10px",color:"white",height:"30px", borderRadius:"15px",backdropFilter:"blur(5px)", backgroundColor:"rgb(56, 56, 56)", border:"none"}} name ="confpassword"  type="password" ref={confpasswordRef}  required placeholder="Confirm Password" />
            </form>
            
            </div>
            <button onClick={handleSubmit} className='signup'>SignUp</button>
            
            <p>Forgot password?</p>
            <p>Already using Slack?</p>
            <a href="/Signin" style={{padding:"12px", textDecoration:"none",  margin: "12px", color:"pink"}}>Sign In to an existing workspace</a>
            </div>
            {/* <h3>Error {formaterrors()}</h3> */}
        </div >
        </body>


  )
}
