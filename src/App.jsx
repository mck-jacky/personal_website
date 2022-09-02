import React from 'react';
import {
  Route, BrowserRouter, Routes,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/about"
            element={<AboutPage />}
          />
          <Route
            path="/projects"
            element={<ProjectsPage />}
          />
          <Route
            path="/resume"
            element={<ResumePage />}
          />
          {/*<Route
            path="/contact"
            element={<Contact />}
          /> */}
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
