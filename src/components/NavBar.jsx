function NavBar({ setSelectedChart }) {
  function handleOnClick(choice) {
    setSelectedChart(choice);
  }

  return (
    <nav>
      <button onClick={() => handleOnClick("lineChart")}>
        Reported cases
      </button>
      <button onClick={() => handleOnClick("barChart")}>Ranked charts</button>
    </nav>
  );
}

export default NavBar;
