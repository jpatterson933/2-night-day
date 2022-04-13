import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//components
import { Nav } from "./components/Sidebar";
import { Night } from "./components/Night";
import { Day } from "./components/Day";
//pages
import { Landing } from "./views/landing";
import { Projects } from './views/projects';
import { Consult } from './views/consult';
import { Contact } from './components/Contact';

const App = () => {

  return (
    <div className="App">
      <Night />
      <Nav />
      <Day />
      <Router>
        <Routes>
          <Route path='/' exact element={<Landing />} />
          <Route path='/projects' exact element={<Projects />} />
          <Route path='/consult' exact element={<Consult />} />
          <Route path='/contact' exact element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
