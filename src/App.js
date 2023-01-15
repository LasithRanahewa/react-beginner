import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Store from "./pages/Store";
import Social from "./pages/Social";
import Contact from "./pages/Contact";
import Help from "./pages/Help";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/store" element={<Store />} />
          <Route exact path="/social" element={<Social />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/help" element={<Help />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
