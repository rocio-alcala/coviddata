function NavBar({ setSelectedChart , selectedChart }) {
  function handleOnClick(choice) {
    setSelectedChart(choice);
    console.log("@selectedChart",selectedChart)
  }

  return (
    <>
      <button hola={selectedChart==="lineChart" ? "active" : "noactive"} onClick={() => handleOnClick("lineChart")}>Reported cases</button>
      <button hola={selectedChart==="barChart" ? "active" : "noactive"} onClick={() => handleOnClick("barChart")}>Ranked charts</button>
    </>
  );
}

export default NavBar;
