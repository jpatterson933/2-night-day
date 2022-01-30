import React from 'react';

//components
import { Nav } from "./components/Sidebar";
import { Landing } from "./views/landing";
import { Night } from "./components/Night";
import { Day } from "./components/Day";

const App = () => {

  return (
    <div className="App">
      <Night />
      <Nav />
      <Landing />
      <Day />
    </div>
  );
}

export default App;
