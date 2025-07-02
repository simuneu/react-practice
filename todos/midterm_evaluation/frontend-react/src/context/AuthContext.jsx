import React, {children, createContext, useContext, useEffect, useState} from "react";

//login context 
const AuthContext = createContext();

//auth provider component
export const AuthProvider = ({children})=>{
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const user = localStorage.getItem('currentUser')
    if(user){
      setCurrentUser(JSON.parse(user));
    }
  }, [])

  const login = (userData)=>{
    setCurrentUser(userData);
    localStorage.setItem('currentUser', JSON.stringify(userData));
  }

  const logout = (userData)=>{
    setCurrentUser(null);
    localStorage.removeItem('currentUser')
  }

  const value = {
    currentUser, 
    loading, 
    login, 
    logout
  }
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth=()=>{
  const context = useContext(AuthContext)
  if(!context){
    throw new Error("error !!!!!!!!!!!!!!!")
  }
  return context
}