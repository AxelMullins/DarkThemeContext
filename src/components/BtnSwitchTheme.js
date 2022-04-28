import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

const BtnSwitchTheme = () => {
  const { theme, switchTheme } = useContext(ThemeContext);
  const { auth, handleAuth } = useContext(AuthContext);
  return (
    <main
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button onClick={switchTheme}>
        Switch to {theme === "light" ? "dark" : "light"} Theme
      </button>
      <button
        onClick={handleAuth}
        style={{ border: `2px solid ${!auth ? "green" : "red"}` }}
      >
        {!auth ? "Log in" : "Log out"}
      </button>
    </main>
  );
};

export default BtnSwitchTheme;
