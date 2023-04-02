function SelectCountry({ options, selectedCountry, setSelectedCountry, data }) {
  
    function handleChange(e) {
    console.log(e.target.value);
    const selectedCountryCode = e.target.value;
    setSelectedCountry(data[selectedCountryCode])
  }

  return (
    <header>
      <select onChange={(e) => handleChange(e)}>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </header>
  );
}

export default SelectCountry;
