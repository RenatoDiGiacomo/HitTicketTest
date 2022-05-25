import React from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = React.useState(null);

  const login = (user, password) => {
    console.log("login auth", { user, password });
    if(user === 'admin' && password === "admin"){
        setUserData({ id: "123", user });
        navigate("/")
    }

   
  };
  const logout = () => {
    console.log("logout");
    setUserData(null);
    navigate('/login')
  };
  return (
    <AuthContext.Provider value={{ authenticated: !!userData, userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
