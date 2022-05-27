import React from "react";
import db from "../../../data/data.json";
import TitleFilter from "./TitleFilter/TitleFilter";
import DataTicket from "./DataTicket/DataTicket";

import "../../sass/Style.scss";
import DataTicketModal from "./DataTicketModal/DataTicketModal";

const Main = () => {
  const [data, setData] = React.useState(null);
  const [filter, setFilter] = React.useState("");
  const [orientation, setOrientation] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  const [itemModal, setItemModal] = React.useState(null);

  React.useEffect(() => {
    setData(db.tickets);
  }, []);
  return (
    <>
      <main>
        <TitleFilter
          setFilter={setFilter}
          setOrientation={setOrientation}
          orientation={orientation}
        />
        <DataTicket
          data={data}
          filter={filter}
          orientation={orientation}
          setModal={setModal}
          setItemModal={setItemModal}
        />
      </main>
      <DataTicketModal data={data} modal={modal} setModal={setModal} itemModal={itemModal} />
    </>
  );
};

export default Main;
