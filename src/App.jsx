/* eslint-disable no-restricted-globals */
import "./App.css";
import { useState } from "react";
import List from "./components/List";
import Form from "./components/Form";
import TotalMoney from "./components/TotalMoney";
import Header from "./components/Header";
import Home from "./components/HomePage";

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);
  const [filter, setFilter] = useState("");

  const newListTransactions = listTransactions.filter((transaction) =>
    filter === "" ? true : transaction.type === filter
  );

  const [home, setHome] = useState(true);

  function addTransactions(formData) {
    if (
      !listTransactions.find(
        (transaction) => transaction.description === formData.description
      )
    ) {
      formData.value = Math.abs(formData.value);
      if (formData.type === "saída") {
        formData.value = -formData.value;
        console.log(formData.value);
      } else {
        formData.value = +formData.value;
        console.log(formData.value);
      }
      setListTransactions([...listTransactions, formData]);
    } else {
      alert("Já existe uma transação com esse nome");
    }
  }

  function removeTransaction(currentTransaction) {
    const newlistTransaction = listTransactions.filter(
      (transaction) => transaction !== currentTransaction
    );
    if (confirm("Confirma a exclusão de " + currentTransaction.description)) {
      setListTransactions(newlistTransaction);
    }
  }
  return (
    <>
      {home ? (
        <Home setHome={setHome} />
      ) : (
        <div className="App">
          <Header setHome={setHome} />
          <div className="divBody">
            <div className="divLeft">
              <Form
                listTransactions={listTransactions}
                addTransactions={addTransactions}
              />
              <TotalMoney listTransactions={listTransactions} />
            </div>
            <List
              listTransactions={newListTransactions}
              removeTransaction={removeTransaction}
              setFilter={setFilter}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
