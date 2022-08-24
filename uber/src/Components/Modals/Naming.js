import React,{useRef,useState} from 'react'
import "./WorkspCreate.css"
import  ReactDOM  from 'react-dom';
import { useNavigate } from 'react-router-dom';
import {useAuth} from "../../Contexts/AuthContext"

export default function Naming({handleRender}) {
    let navigate=useNavigate()
    let userEmail = useRef()
    let userPassword = useRef()
    const {inviteUser} = useAuth()
    const [error,setError] = useState('')


    async function confirm (e){
        e.preventDefault()
        handleRender(false)
        navigate("/Newspace")

        try{
            setError('')
            await inviteUser()
        }catch{
            setError('Failed to invite')
        }
        // if(changestate==="increment"){
        //     handleModal(countnow+1);
        //     handleRender(false)
        // }
        // else if(changestate==="decrement"){

        //     handleModal(countnow-1);
        //     handleRender(false)
        // }

    }

    const cancel = () =>{
            // handleModal(countnow)
            handleRender(false)




    }
  return ReactDOM.createPortal(
    <div classname="bg">
      <div className="modalbg">
        {/* <button className='submit'></button> */}
        <div className='title'>
            <h1>Name of your company</h1>
            <div className='body'>
                <input type="name" ref={userEmail}></input>
                <div className='footer'>
                
               
                </div>
            </div>
            
            <button className='continue' onClick={confirm}>Confirm</button>
            <button className='cancel' onClick={cancel} >Cancel</button>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  )
}