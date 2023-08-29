import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import Lyrics from "./components/tracks/Lyrics";

import { ContextController } from "./context";

const App = () => {
  return (
    <ContextController>
      <Router>
        <>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Index/>} />
              <Route path="/lyrics/track/:id" element={<Lyrics/>} />
            </Routes>
          </div>
        </>
      </Router>
    </ContextController>
  );
};

export default App;