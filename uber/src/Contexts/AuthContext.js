import React, { useContext,useState ,useEffect} from 'react'
import {auth} from "../Components/firebase"
import {createUserWithEmailAndPassword} from 'firebase/auth'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export default function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();
    const [loading,setLoading] = useState(true)

    function signup(email,password){
        return createUserWithEmailAndPassword(auth,email,password)
    }

    useEffect(() => {
        const unssubscribe = auth.onAuthStateChanged(user => {
            
            setCurrentUser(user)
            setLoading(false)
            console.log("user here: ",user)
        })
        return unssubscribe
    },[])

  
    const value = {
        currentUser,
        signup
    }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
