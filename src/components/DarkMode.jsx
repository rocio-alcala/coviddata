

function DarkMode({ darkMode, setDarkMode }) {
  function handleDarkMode() {
    setDarkMode((prev)=>!prev);
  }
  return (
    <i
      className={
        darkMode
          ? "fa-solid fa-moon App dark mode"
          : "fa-regular fa-moon App light mode"
      }
      onClick={handleDarkMode}
    ></i>
  );
}

export default DarkMode;
