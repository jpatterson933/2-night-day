import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//components
import { Nav } from "./components/Sidebar";
import { Landing } from "./views/landing";
import { Night } from "./components/Night";
import { Day } from "./components/Day";
import { Projects } from './views/projects';

const App = () => {

  return (
    <div className="App">
      <Night />
      <Nav />
      <Landing />
      <Day />
      <Router>
        <Routes>
          <Route path='/projects' exact component={Projects} />
          <Route path='/' exact component={Landing} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
