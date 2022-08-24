import React,{useRef} from 'react'
import "./WorkspCreate.css"
import  ReactDOM  from 'react-dom';
import  {useNavigate} from "react-router-dom"

export default function WorkspCreate({ handleModal,countnow}) {
    const emailRef = useRef()
    const navigate=useNavigate()
    const confirm = () =>{
        handleModal(countnow+"you there?")
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
      navigate("/Newspace")
            // handleModal(countnow)
            // handleRender(false)
        



    }
  return ReactDOM.createPortal(
    <div classname="bg">
      <div className="modalbg">
        {/* <button className='submit'></button> */}
        <div className='title'>
            <h1>Enter email of the member you want to join in.</h1>
            <div className='body'>
                <input type="email"></input>
                <div className='footer'>
                
                <button className='continue' onClick={confirm}>Continue</button>
                <button className='cancel' onClick={cancel} >Cancel</button>
                </div>
            </div>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  )
}