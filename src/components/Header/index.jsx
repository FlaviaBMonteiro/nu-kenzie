function Header({ setHome }) {
  return (
    <div className="topMenu">
      <nav>
        <h2>Nu Kenzie</h2>
        <button
          className="topMenu--button"
          onClick={() => {
            setHome(true);
          }}
        >
          Inicio
        </button>
      </nav>
    </div>
  );
}

export default Header;
