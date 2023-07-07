function SelectCountry({ options, selectedCountry, setSelectedCountry }) {
  function handleChange(e) {
    const selectedCountryCode = e.target.value;
    setSelectedCountry(selectedCountryCode);
  }
  

  return (
    <label for="countrySelection" className="countrySelection">
      <select
        value={selectedCountry || "defaultOption"}
        id="countrySelection"
        onChange={(e) => handleChange(e)}
      >
        <option value="defaultOption" disabled hidden>
          Select a country
        </option>
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
