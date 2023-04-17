

function DarkMode({ darkMode, setDarkMode }) {
  function handleDarkMode() {
    setDarkMode(!darkMode);
  }
  return (
    <i
      className={
        darkMode
          ? "fa-solid fa-moon App dark mode"
          : "fa-regular fa-moon App light mode"
      }
      data-theme={darkMode ? "dark" : "light"}
      onClick={() => handleDarkMode()}
    ></i>
  );
}

export default DarkMode;
