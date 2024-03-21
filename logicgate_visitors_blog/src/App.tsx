import { Navbar, NavbarLayout } from "./components/components";
import "./App.css";
function App() {
  return (
    <>
      <Navbar children={<NavbarLayout />} />
    </>
  );
}

export default App;
