import { Fragment, useState } from "react";
import { XAxis, YAxis, BarChart, Bar, Tooltip, Cell, Legend } from "recharts";

function RenderBarChart({ data, selectedCountry }) {
  const dataArray = Object.values(data).filter(obj => obj.continent !== undefined && obj.continent !== null)
  const [dataRender, setDataRender] = useState("total_cases");
  const [topNumber, setTopNumber] = useState(10);

  const topRender = dataArray.sort((a, b) => b[dataRender] - a[dataRender]).slice(0, topNumber);


  return (
    <Fragment>
      <section>
        <BarChart width={500} height={300} data={topRender}>
        <Bar dataKey={dataRender} name={dataRender} fill='#8884d8'>
              {topRender.map((country) => (
                <Cell cursor="pointer" fill={country.location === selectedCountry.location ? '#82ca9d' : '#8884d8'} key={country.location} />
              ))}
            </Bar>
          <XAxis name="Country" dataKey="location" />
          <YAxis />
          <Legend />
          <Tooltip />
        </BarChart>
      </section>
      <aside>
        <div>
          <label for="cases">
            <input
              onClick={() => {
                setDataRender("total_cases");
              }}
              type={"radio"}
              name="controls"
              id="cases"
            ></input>
            Total cases
          </label>
          <label for="deaths">
            <input
              onClick={() => {
                setDataRender("total_deaths");
              }}
              type={"radio"}
              name="controls"
              id="deaths"
            ></input>
            Total deaths
          </label>
        </div>
        <div>
          <label for="top">
            Select top number of countries
            <select id="top" onChange={(e) => setTopNumber(e.target.value)}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
              <option value={11}>11</option>
            </select>
          </label>
        </div>
      </aside>
    </Fragment>
  );
}

export default RenderBarChart;
