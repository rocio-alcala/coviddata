import { Fragment, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from "recharts";

function RenderLineChart({ selectedCountry , defaultSelectedCountry, darkMode }) {
  let data = [];
  if (Object.keys(selectedCountry).length === 0) { data = [defaultSelectedCountry]}
  else {data = [selectedCountry]}
  const [deathsOrCases, setDeathsOrCases] = useState("cases");
  const [newOrAcumulative, setNewOrAcumulative] = useState("new");

  return (
    <Fragment>
      <section className="chart">
        <h1 className="countryTitle">{data[0].location}</h1>
        <LineChart color={"white"} width={800} height={500} data={data}>
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis stroke={darkMode ? "white": "black"} name="Date" dataKey="last_updated_date" />
          <YAxis stroke={darkMode ? "white": "black"} name="hola"/>
          <Legend />
          <Tooltip />
          <Line
            name={newOrAcumulative + " " + deathsOrCases}
            type="monotone"
            dataKey={newOrAcumulative + "_" + deathsOrCases}
          />
        </LineChart>
      </section>
      <aside className="controls">
        <div className="control1">
          <label for="new">
            <input
              onClick={() => {
                setNewOrAcumulative("new");
              }}
              checked={newOrAcumulative === 'new'}
              type={"radio"}
              name="controls1"
              id="new"
            ></input>
            New cases
          </label>
          <label for="acumulative">
            <input
              onClick={(e) => {
                setNewOrAcumulative(e.target.value);
              }}
              checked={newOrAcumulative === 'total'}
              value={"total"}
              type={"radio"}
              name="controls1"
              id="acumulative"
            ></input>
            Acumulative cases
          </label>
        </div>
        <div className="control2">
          <label for="deaths">
            <input
              onClick={() => {
                setDeathsOrCases("deaths");
              }}
              checked={deathsOrCases === 'deaths'}
              type={"radio"}
              name="controls2"
              id="deaths"
            ></input>
            Confirmed deaths
          </label>
          <label for="cases">
            <input
              onClick={() => {
                setDeathsOrCases("cases");
              }}
              checked={deathsOrCases === 'cases'}
              type={"radio"}
              name="controls2"
              id="cases"
            ></input>
            Confirmed cases
          </label>
        </div>
      </aside>
    </Fragment>
  );
}

export default RenderLineChart;
