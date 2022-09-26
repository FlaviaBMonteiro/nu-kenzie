import React from "react";

const TotalMoney = ({ listTransactions }) => {
  const totalPrice = listTransactions.reduce((valorAnterior, valorAtual) => {
    if (listTransactions.type === "saída") {
      return valorAnterior - valorAtual.value;
    } else {
      return valorAnterior + valorAtual.value;
    }
  }, 0);

  return (
    <div className="left--moneyTotal">
      <div className="left--moneyTotal--value">
        <p>Valor Total:</p>
        <p className="left--moneyTotal--saldo">$ {totalPrice}</p>
      </div>
      <p>O valor se refere ao saldo</p>
    </div>
  );
};

export default TotalMoney;
