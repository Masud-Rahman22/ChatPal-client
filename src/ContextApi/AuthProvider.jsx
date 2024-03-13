import { createContext, useEffect } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase.config";
import { useState } from "react";
export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user,setUser] = useState({});
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const Register = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const Login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser);
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    },[])
    const Logout = () => {
        setLoading(true);
        return signOut(auth);
    }
    const authInformation = {
        googleLogin,
        loading,
        Register,
        Login,
        Logout,
        user
    }
    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;