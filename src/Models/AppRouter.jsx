import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import { AuthProvider, AuthContext } from "../Controllers/AuthContext";

import Home from "../Views/pages/Home/Home";
import Login from "../Views/pages/Login/Login";

const AppRouter = () => {
  const Private = ({ children }) => {
    const { authenticated, loading } = React.useContext(AuthContext);
    
    if(loading){
      return <div className="loading">Carregando...</div>
    }
    if (!authenticated) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/"
            element={
              <Private>
                <Home />
              </Private>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRouter;
