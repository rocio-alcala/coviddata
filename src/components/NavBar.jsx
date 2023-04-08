function NavBar({setSelectedChart}) {
 function handleOnClick(choice){setSelectedChart(choice)}

    return <nav>
    <button onClick={() => handleOnClick("Line Chart")}>Reported cases</button>
    <button onClick={() => handleOnClick("Bar Chart")}>Ranked charts</button>
  </nav>;
}

export default NavBar;
