import React from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [userData, setUserData] = React.useState(null);
  const [auth, setAuth] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const recoveruser = localStorage.getItem("user");
    if (recoveruser) {
      setUserData(JSON.parse(recoveruser));
    }
    setLoading(false);
  }, []);

  const login = (user, password) => {
    const loggeduser = {
      id: "123",
      user,
      password,
    };
    localStorage.setItem("user", JSON.stringify(loggeduser));

    if (user === "admin" && password === "admin") {
      setUserData(loggeduser);
      setAuth(false);
      navigate("/");
    } else {
      setAuth(true);
    }
  };
  const logout = () => {
    setUserData(null);
    localStorage.clear()
    navigate("/login");
  };
  return (
    <AuthContext.Provider
      value={{ authenticated: !!userData, userData, auth, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
