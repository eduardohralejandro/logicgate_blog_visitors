import {
  Navbar,
  NavbarLayout,
  Articles,
  Article,
} from "./components/components";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar children={<NavbarLayout />} />
      <Routes>
        <Route>
          <Route path="/" element={<Articles />} />
          <Route path="/articles/:id" element={<Article />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
