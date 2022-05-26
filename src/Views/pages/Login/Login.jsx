import React from "react";
import logo from "../../imgs/logo.jpg";

import { AuthContext } from "../../../Controllers/AuthContext";

import "../../sass/Style.scss";

const Login = () => {
  const { login, auth } = React.useContext(AuthContext);
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");

  const enterSubmit = (e) => {
    e.preventDefault();
    login(user, password);
  };
  return (
    <div id="Login">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <form onSubmit={enterSubmit}>
        <div className="item">
          <label htmlFor="login">Nome do Usuário</label>
          <input
            type="text"
            id="login"
            name="login"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div className="item">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="actions">
          <button type="submit">Entrar</button>
        </div>
      </form>

      {auth ? (
        <div className="error">
          <p>Usuário e(ou) Senha Incorretos</p>
          <p>Favor Visualizar o READEME.md(Dev)</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Login;
