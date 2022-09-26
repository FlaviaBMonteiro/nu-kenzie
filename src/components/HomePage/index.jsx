import "./index.css";
import home from "./home.svg";

function Home({ setHome }) {
  return (
    <div className="homePage">
      <div className="homeLeft">
        <h1>Nu Kenzie</h1>
        <p className="homeLeft--text">
          Centralize o controle das suas finanças
        </p>
        <span className="homeLeft--span">de forma rápida e segura</span>
        <p></p>
        <button
          className="homeLeft--button"
          onClick={() => {
            setHome(false);
          }}
        >
          Iniciar
        </button>
      </div>
      <div className="homeRight">
        <img src={home} alt="Diversos Cards" />
      </div>
    </div>
  );
}

export default Home;
