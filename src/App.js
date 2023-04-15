import "./App.css";
import { useQuery } from "react-query";
import SelectCountry from "./components/SelectCountry";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import RenderLineChart from "./components/RenderLineChart";
import RenderBarChart from "./components/RenderBarChart";
import { useState } from "react";

// tag <a> me volvia a iniciar toda la app cada vez que hacia click entonces no se guardba el estado, porque?
// el dropdown es la mejor manera??
// para el bar chart me queda mas util usar los datos simplificados, se puede?
// hay que eliminar del array de datos simplificados aquellos que no son de paises (world, continentes, etc, todo tienen la key "continent=null")
// cual es la forma correcta de agregar tipografias??

function App() {
  const { data } = useQuery("data", () => {
    return fetch(
      "https://covid.ourworldindata.org/data/latest/owid-covid-latest.json"
    ).then((response) => {
      return response.json();
    });
  });


  const [selectedCountry, setSelectedCountry] = useState({});
  const [selectedChart, setSelectedChart] = useState("lineChart");

  if (!data) return "loading";

  const options = Object.keys(data).map((countryCode) => {
    return { value: countryCode, label: data[countryCode].location };
  });


  return (
    <main>
      <nav>
        <SelectCountry
          options={options}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          data={data}
        ></SelectCountry>
        <NavBar setSelectedChart={setSelectedChart} options={options}></NavBar>
        <button>Dark mode</button>
      </nav>
      {selectedChart === "lineChart" ? (
        <RenderLineChart selectedCountry={selectedCountry} defaultSelectedCountry={data.OWID_WRL}></RenderLineChart>
      ) : (
        <RenderBarChart
          data={data}
          selectedCountry={selectedCountry}
        ></RenderBarChart>
      )}
      <Footer></Footer>
    </main>
  );
}

export default App;
