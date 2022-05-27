import React from "react";
import "../../../sass/Style.scss";

import { ReactComponent as Row } from "../../../icons/row.svg";
import { ReactComponent as Column } from "../../../icons/column.svg";

const TitleFilter = ({ setFilter, setOrientation, orientation }) => {
  return (
    <div id="title">  
      <h2>Página Inicial</h2>

      <div className="filter">
        <div className="orientation">
          <div className={!orientation ? "active" : ""} onClick={() => setOrientation(false)}>
            <Row />
          </div>
          <div className={orientation ? "active" : ""} onClick={() => setOrientation(true)}>
            <Column />
          </div>
        </div>
        <select name="" id="status" onChange={(e) => setFilter(e.target.value)}>
          <option value="">-Todos-</option>
          <option value="open">Open</option>
          <option value="pending">Pending</option>
          <option value="closed">Closed</option>
        </select>
      </div>
    </div>
  );
};

export default TitleFilter;
