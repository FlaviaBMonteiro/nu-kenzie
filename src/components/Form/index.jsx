import React, { useState } from "react";

const Form = ({ addTransactions }) => {
  const [formData, setformData] = useState({
    value: 0,
    description: "",
    type: "entrada",
  });

  function onSubmit(e) {
    e.preventDefault();
    if (formData.value === 0 || formData.description.length === 0) {
      alert("Preencha todos os campos");
    } else {
      addTransactions(formData);
    }
  }
  return (
    <div className="left--form">
      <form onSubmit={onSubmit}>
        <label>Descrição:</label>
        <input
          className="left--form--descrip"
          type="text"
          value={formData.description}
          placeholder="Digite sua descrição"
          onChange={(e) =>
            setformData({ ...formData, description: e.target.value })
          }
        />
        <p className="left--form--exemp">Ex: Compra de Roupas</p>
        <div className="left--wrap">
          <div className="left--form--value">
            <label>Valor:</label>
            <div className="left--wrap">
              <input
                className="left--form--value--input"
                type="number"
                value={formData.value}
                onChange={(e) =>
                  setformData({ ...formData, value: parseInt(e.target.value) })
                }
              />
              <div className="left--form--value--moeda">R$</div>
            </div>
          </div>

          <div className="left--form--value">
            <label>Tipo de valor</label>
            <div className="left--wrap">
              <select
                className="left--form--value--select"
                onChange={(e) =>
                  setformData({ ...formData, type: e.target.value })
                }
              >
                <option value={"entrada"}>Entrada</option>
                <option value={"saída"}>Saída</option>
              </select>
            </div>
          </div>
        </div>
        <button className="left--form--button" type="submit">
          Inserir Valor
        </button>
      </form>
    </div>
  );
};

export default Form;
