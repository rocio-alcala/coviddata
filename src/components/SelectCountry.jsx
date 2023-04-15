function SelectCountry({ options, selectedCountry, setSelectedCountry, data }) {
  function handleChange(e) {
    const selectedCountryCode = e.target.value;
    setSelectedCountry(data[selectedCountryCode])
  }

  return (
 
      <label for="countrySelection" className="countrySelection">
        Select country
        <select id="countrySelection" onChange={(e) => handleChange(e)}>
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </label>

  );
}

export default SelectCountry;
