import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../src/Firebase/firebase.config";
import useAxiosPublic from '../src/hooks/useAxiosPublic';

export const AuthContext = createContext(null);
const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();
    const googleProvider = new GoogleAuthProvider();


    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const registerUser = (email, password) => {
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password);
    }


    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logoutUser = () => {
        setLoading(true);
        return signOut(auth)
    }
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=> {
            setUser(currentUser);
            const userInfo ={email: currentUser?.email};
            if(currentUser){
                axiosPublic.post('/jwt', userInfo)
                .then(res =>{
                    if(res.data.AccessToken){
                        localStorage.setItem('accessToken', res.data?.AccessToken)
                    }
                })

            } else{
                // Remove token: if token stored in the client side like: localStorage, caching, in memory;
                localStorage.removeItem('accessToken');
            }
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };

    },[axiosPublic])
    const authInfo = {
        user,
        loading,
        registerUser,
        loginUser,
        googleLogin,
        logoutUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;