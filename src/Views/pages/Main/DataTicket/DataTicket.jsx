import React from "react";
import moment from "moment";
import "../../../sass/Style.scss";

const DataTicket = ({ data, filter, orientation, setModal, setItemModal }) => {
  const handleItem = (event) => {
    setModal(true);
    const dataId = event.target.dataset.id;
    setItemModal(dataId);
  };
  return (
    <>
      <div className={`content ${orientation ? "column" : ""}`}>
        {data &&
          data
            .filter((item) => {
              if (filter === "") return item.status;
              return filter === item.status;
            })
            .map((item, index) => (
              <div className="attBlock" key={item.id}>
                <div className="desc">
                  <p>
                    Contato: <span>{item.contact.name}</span>
                  </p>
                  <p>
                    Atendimento Criado:
                    <span>
                      {moment(item.createdAt).format("DD/MM/YYYY")} <span> - </span>
                      {moment.parseZone(item.createdAt).format("HH:mm:ss")}
                    </span>
                  </p>
                  <div className="completeDesc">
                    <p data-id={index} onClick={handleItem}>
                      Detalhes
                    </p>
                  </div>
                </div>
                <div className={`status ${item.status}`}>{item.status}</div>
              </div>
            ))}
      </div>
    </>
  );
};

export default DataTicket;
