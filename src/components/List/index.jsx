import React from "react";
import Card from "../Card";
import Filter from "../Filter";

const List = ({ listTransactions, removeTransaction, setFilter }) => {
  return (
    <div className="divRight">
      <Filter setFilter={setFilter} />
      {listTransactions.length ? (
        <ul>
          {listTransactions.map((transaction, index) => (
            <Card
              transaction={transaction}
              key={index}
              removeTransaction={removeTransaction}
            />
          ))}
        </ul>
      ) : (
        <h5>Você ainda não possui nenhum lançamento</h5>
      )}
    </div>
  );
};

export default List;
