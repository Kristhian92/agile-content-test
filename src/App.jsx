import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage.jsx";
import ResultsPage from "./Components/ResultsPage/ResultsPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Homepage data-testid="homepage" />} />
        <Route
          exact
          path="/results"
          element={<ResultsPage data-testid="results-page" />}
        />
      </Routes>
    </>
  );
}

export default App;
