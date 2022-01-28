import React from 'react';

//components
import { Nav } from "./components/Sidebar";
import { Landing } from "./views/landing";

const App = () => {

  return (
    <div className="App">
      <Nav />
      <Landing />
    </div>
  );
}

export default App;
