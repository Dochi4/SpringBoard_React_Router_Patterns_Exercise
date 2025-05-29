import "./App.css";

import RoutesList from "./RoutesList";
import Nav from "./Nav";
import dogsList from "./DogsList";

function App() {
  return (
    <>
      <Nav list={dogsList} />
      <RoutesList />
    </>
  );
}

export default App;
