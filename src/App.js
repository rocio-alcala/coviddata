import "./App.css";
import { useQuery } from "react-query";
import SelectCountry from "./components/SelectCountry";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import RenderLineChart from "./components/RenderLineChart";
import RenderBarChart from "./components/RenderBarChart";

import { useState } from "react";
import DarkMode from "./components/DarkMode";

// el dropdown es la mejor manera?? hacer un map y poner 10 default
// cual es la forma correcta de agregar tipografias??

function App() {
  const { data } = useQuery("latestData", () => {
    return fetch(
      "https://covid.ourworldindata.org/data/latest/owid-covid-latest.json"
    ).then((response) => {
      return response.json();
    });
  });

  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedChart, setSelectedChart] = useState("lineChart");
  const [darkMode, setDarkMode] = useState(false);

  if (!data) return "loading";

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
          data={data}
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
