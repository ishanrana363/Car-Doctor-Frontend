import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {

    return createUserWithEmailAndPassword(auth, email, password);

  }
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth,email, password);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,currentUser=>{
      setUser(currentUser);
      console.log("current user",currentUser);
      setLoading(false);
    });
    return ()=>{
      unsubscribe();
    }
  }, []);
  const authInfo = {
    user,
    loading,
    createUser,
    loginUser
  }
  return (
    <div>
      <AuthContext.Provider value={authInfo} >
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
