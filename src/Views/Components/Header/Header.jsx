import React from "react";
import { AuthContext } from "../../../Controllers/AuthContext";

import "../../sass/Style.scss";
import Logo from "../../imgs/logo.png";
import { ReactComponent as LogoutIcon } from "../../icons/logout.svg";

const Header = () => {
  const { userData, logout } = React.useContext(AuthContext);
  return (
    <header>
      <div className="left">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="title">
          <p>HitCommunications</p>
        </div>
      </div>
      <div className="right">
        <div className="desc">
          <p>
            Olá, <span>{userData.user}</span>
          </p>
        </div>
        <div className="logout" onClick={logout}>
          <LogoutIcon fill="red" title="Sair do sistema"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
