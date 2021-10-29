import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])


    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    
    //Sign out
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({});
            
        })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        signInUsingGoogle,
        isLoading,
        logOut
    }
}

export default useFirebase;