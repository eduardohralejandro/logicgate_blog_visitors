import { Navbar, NavbarLayout } from "./components/components";
import "./App.css";
import { Articles } from "./components/components";

function App() {
  return (
    <>
      <Navbar children={<NavbarLayout />} />
      <Articles />
    </>
  );
}

export default App;
