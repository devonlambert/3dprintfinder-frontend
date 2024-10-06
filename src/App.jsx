import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from "@chakra-ui/react";
import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Pricing } from "./pages/Pricing";
import { FAQ } from "./pages/FAQ";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { AdminDashboard } from "./pages/AdminDashboard";
import { SearchResults } from "./pages/SearchResults";  // Add this import

const App = () => {
  return (
    <Router>
      <Box>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/search" element={<SearchResults />} />  {/* Add this line */}
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
