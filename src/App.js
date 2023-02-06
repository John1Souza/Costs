import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import NewProject from "./components/pages/NewProject";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/Company" element={<Company />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/NewProject" element={<NewProject />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
