import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//components
import { Nav } from "./components/Sidebar";

//pages
import { Landing } from "./views/landing";
import { Projects } from './views/projects';
import { Consult } from './views/consult';
import { Contact } from './views/contact';

const App = () => {

  return (
    <div className="App">
      <Nav />
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
