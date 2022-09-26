import React from "react";

const Filter = ({ setFilter }) => {
  return (
    <div className="right--transations">
      <p>Resumo Financeiro</p>
      <div className="right--transitionsFilter">
        <button
          className="right--transitionsFilter--buttons--all"
          onClick={() => setFilter("")}
        >
          Todos
        </button>
        <button
          className="right--transitionsFilter--buttons"
          onClick={() => setFilter("entrada")}
        >
          Entrada
        </button>
        <button
          className="right--transitionsFilter--buttons"
          onClick={() => setFilter("saída")}
        >
          Saída
        </button>
      </div>
    </div>
  );
};

export default Filter;
