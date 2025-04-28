import './App.css';
import { Routes, Route } from 'react-router-dom';  
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { Hobbies } from "./components/Hobbies";
import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Project3 from "./components/Project3";
import Project4 from "./components/Project4";
import Hobby1 from "./components/Hobby1"

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={
          <>
            <NavBar />
            <Banner />
            <Skills />
            <Projects />
            <Hobbies />
            <Footer />
          </>
        } />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
        <Route path="/project4" element={<Project4 />} />
        <Route path="/hobby1" element={<Hobby1 />} />

      </Routes>
    </div>
  );
}

export default App;
