function NavBar({ setSelectedChart }) {
  function handleOnClick(choice) {
    setSelectedChart(choice);
  }

  return (
    <>
      <button onClick={() => handleOnClick("lineChart")}>Reported cases</button>
      <button onClick={() => handleOnClick("barChart")}>Ranked charts</button>
    </>
  );
}

export default NavBar;
