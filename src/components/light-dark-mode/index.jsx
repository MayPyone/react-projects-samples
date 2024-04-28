import useLocalStroage from "./useLocalStorage";
import './theme.css'

export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStroage("theme", "dark");
  function handleClick(){
  setTheme(theme==='light'?'dark': 'light')
  }
  return(
    <div>
      <div className="light-dark-mode" data-theme={theme}>
        <button onClick={handleClick} >Change Theme</button>
      </div>
    </div>
  )
}