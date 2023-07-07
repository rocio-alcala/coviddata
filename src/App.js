import "./App.css";
import SelectCountry from "./components/SelectCountry";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import RenderLineChart from "./components/RenderLineChart";
import RenderBarChart from "./components/RenderBarChart";
import { useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import DarkMode from "./components/DarkMode";

function App() {
  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedChart, setSelectedChart] = useState("lineChart");
  const [data, setData] = useState();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    fetch("https://covid.ourworldindata.org/data/owid-covid-data.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []); //to retrieve data continuously (in case new data where available) we used to use react query, but as there is a lot of data and there is no longer updated, we preferred the fetch api

  if (!data)
    return (
      <main>
        <div className="loading">
          <ThreeCircles
            height="100"
            width="100"
            color="#644964"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
          />
          <p>Please wait while loading the covid data</p>
          <p>I know, is A LOT of data</p>
        </div>
      </main>
    );

  const options = Object.keys(data).map((countryCode) => {
    return { value: countryCode, label: data[countryCode].location };
  });

  return (
    <main data-theme={darkMode ? "dark" : "light"}>
      <nav>
        <SelectCountry
          options={options}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        ></SelectCountry>
        <NavBar
          setSelectedChart={setSelectedChart}
          selectedChart={selectedChart}
        ></NavBar>
        <DarkMode darkMode={darkMode} setDarkMode={setDarkMode}></DarkMode>
      </nav>
      {selectedChart === "lineChart" ? (
        <RenderLineChart
          darkMode={darkMode}
          selectedCountry={data[selectedCountry] || {}}
          defaultSelectedCountry={data.OWID_WRL}
        ></RenderLineChart>
      ) : (
        <RenderBarChart
          options={options}
          darkMode={darkMode}
          selectedCountry={data[selectedCountry] || {}}
        ></RenderBarChart>
      )}
      <Footer></Footer>
    </main>
  );
}

export default App;
