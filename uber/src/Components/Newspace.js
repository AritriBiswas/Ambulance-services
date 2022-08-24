import React from 'react'
import "firebase/messaging"
import Header from "./Header"
import Sidebar from "./Sidebar"
import Chat from "./Chat"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default function Newspace() {
  return (
    <>
    <Header/>
    <Sidebar/>
    {/* <Router>
    <Routes>
      
      <Route path="/room/:roomId">
                    <Chat />
                  </Route>
                  <Route path="/">
                    <h1>Welcome</h1>
      </Route>
    </Routes>
    </Router>   */}
    </>
  )
}
