import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import "./App.css";
import ChemPage from "./components/ChemPage.tsx";
import SearchResults from "./components/SearchResults.tsx";
import SiteHeader from "./components/SiteHeader";

function App() {
  const [chem, setChem] = useState();
  const theme = createTheme({ palette: { mode: "dark" } });

  return (
    <ThemeProvider theme={theme}>
      <div className="page-wrapper">
        <div className="page-container">
          <SiteHeader />
          {/* TODO: Refactor to use ReactRouter */}
          {!!chem ? (
            <ChemPage result={chem} setChem={setChem} />
          ) : (
            <SearchResults setChem={setChem} />
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
