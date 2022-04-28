import { useContext } from "react";
import "./App.css";
import BtnSwitchTheme from "./components/BtnSwitchTheme";
import { AuthProvider } from "./context/AuthContext";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="App" data-theme={theme}>
      <AuthProvider>
        <BtnSwitchTheme />
      </AuthProvider>
    </div>
  );
}

export default App;
