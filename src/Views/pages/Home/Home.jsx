import React from "react";

import { AuthContext } from "../../../Controllers/AuthContext";

const Home = () => {
  const { userData, logout } = React.useContext(AuthContext);

  return (
    <>
      <header>
        {userData.user}
        <button onClick={logout}>Sair</button>
      </header>
      <section>dash</section>
      <footer>footer</footer>
    </>
  );
};

export default Home;
