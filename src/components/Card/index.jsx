import React from "react";
import { FaTrash } from "react-icons/fa";
import "./index.css";

const Card = ({ transaction, removeTransaction }) => {
  return (
    <li className={transaction.type === "entrada" ? "entradas" : "saidas"}>
      <div className="lista">
        <h4>{transaction.description}</h4>
        <span>
          {transaction.value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button onClick={() => removeTransaction(transaction)}>
          <FaTrash className="listaIcon" />
        </button>
      </div>
      <p className="listaTipo">{transaction.type}</p>
    </li>
  );
};

export default Card;
