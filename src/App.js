import "./App.css";
import { useQuery } from "react-query";
import SelectCountry from "./components/SelectCountry";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import RenderLineChart from "./components/RenderLineChart";
import RenderBarChart from "./components/RenderBarChart";
import { useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import DarkMode from "./components/DarkMode";

function App() {
  const { data } = useQuery("data", () => {
    return fetch(
      "https://covid.ourworldindata.org/data/owid-covid-data.json"
    ).then((response) => {
      return response.json();
    });
  });

  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedChart, setSelectedChart] = useState("lineChart");
  const [darkMode, setDarkMode] = useState(false);

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
        </div>
      </main>
    );

  const options = Object.keys(data).map((countryCode) => {
    return { value: countryCode, label: data[countryCode].location };
  });
  console.log("@options", options);
  console.log("@selectedCountry", selectedCountry);

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
