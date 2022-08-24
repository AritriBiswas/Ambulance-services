import React, { useContext,useState ,useEffect} from 'react'
import {auth} from "../Components/firebase"
import {createUserWithEmailAndPassword, sendSignInLinkToEmail, signInWithEmailAndPassword, signOut} from 'firebase/auth'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}


// export function useAuthState (){
//         const auth = useContext(AuthContext)
//         return {...auth,isAuthenticated:auth.user != null}

// }

export default function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();
    const [loading,setLoading] = useState(true)

    function signup(email,password){
        return createUserWithEmailAndPassword(auth,email,password)
        
    }

    function inviteUser(userEmail,userPassword){
        return sendSignInLinkToEmail(auth,userEmail,userPassword)
    }

    function login(email,password){
        return signInWithEmailAndPassword(auth,email,password);
    }

    function logout(){
        return signOut(auth)
    }

    function creatingSpace(){
        return 
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            
            setCurrentUser(user)
            setLoading(false)
            console.log("user here: ",user)
        })
        return unsubscribe
    },[])


  
    const value = {
        currentUser,
        signup,
        login,
        logout,
        inviteUser
    }


  return (
    <AuthContext.Provider value={value}>
      {children}

    </AuthContext.Provider>
  )
}
