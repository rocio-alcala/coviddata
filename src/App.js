import "./App.css";
import { useQuery } from "react-query";
import SelectCountry from "./components/SelectCountry";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import { useState } from "react";

function App() {
  const { data } = useQuery("products", () => {
    return fetch(
      "https://covid.ourworldindata.org/data/latest/owid-covid-latest.json"
    ).then((response) => {
      return response.json();
    });
  });

  const [selectedCountry, setSelectedCountry] = useState({});

  if (!data) return "loading";

  const options = Object.keys(data).map((countryCode) => {
    return { value: countryCode, label: data[countryCode].location };
  });
  console.log("@options", options);
  console.log("@selectedCountry", selectedCountry)

  return (
    <main>
      {
        <SelectCountry
          options={options}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          data={data}
        ></SelectCountry>
      }
      <NavBar></NavBar>
      {true ? <BarChart></BarChart> : <LineChart></LineChart>}
      <Footer></Footer>
    </main>
  );
}

export default App;
