import { Fragment, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from "recharts";

function RenderLineChart({ selectedCountry }) {
  const data = [selectedCountry];
  const [deathsOrCases, setDeathsOrCases] = useState("cases");
  const [newOrAcumulative, setNewOrAcumulative] = useState("new");

  return (
    <Fragment>
      <section>
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis name="Date" dataKey="last_updated_date" />
          <YAxis />
          <Legend />
          <Line
            name={newOrAcumulative + " " + deathsOrCases}
            type="monotone"
            dataKey={newOrAcumulative + "_" + deathsOrCases}
          />
        </LineChart>
      </section>
      <aside>
        <div>
          <label for="new">
            <input
              onClick={() => {
                setNewOrAcumulative("new");
              }}
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
              value={"total"}
              type={"radio"}
              name="controls1"
              id="acumulative"
            ></input>
            Acumulative cases
          </label>
        </div>
        <div>
          <label for="deaths">
            <input
              onClick={() => {
                setDeathsOrCases("deaths");
              }}
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
