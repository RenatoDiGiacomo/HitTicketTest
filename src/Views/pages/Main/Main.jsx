import React from "react";
import moment from "moment";
import db from "../../../data/data.json";
import "../../sass/Style.scss";

const Main = () => {
  const [data, setData] = React.useState(null);
  const [filter, setFilter] = React.useState("");

  React.useEffect(() => {
    console.log();
    setData(db.tickets);
  }, []);

  return (
    <main>
      <div className="title">
        <h2>Página Inicial</h2>
        <div className="filter">
          <label htmlFor="status">Filter por Status do Chamado:</label>
          <select name="" id="status" onChange={(e) => setFilter(e.target.value)}>
            <option value="">-Selecione o filtro-</option>
            <option value="closed">Fechados</option>
            <option value="open">Abertos</option>
            <option value="pending">Pendentes</option>
          </select>
        </div>
      </div>
      <div className="content">
        {data &&
          data
            .filter((item) => {
              if (filter === "") return item;
              return item.status === filter;
            })
            .map((item) => (
              <div className="attBlock" key={item.id}>
                <div className="desc">
                  <p>Contato: {item.contact.name}</p>
                  <p>
                    Atendimento Criado:
                    {moment(item.createdAt).format("DD/MM/YYYY")} <span> - </span>
                    {moment.parseZone(item.createdAt).format("HH:mm:ss")}
                  </p>
                </div>
                <div className="status" style={{backgroundColor:"red"}}>{item.status}</div>
              </div>
            ))}
      </div>
    </main>
  );
};

export default Main;
