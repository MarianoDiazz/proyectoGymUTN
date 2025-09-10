import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarGym from "./Components/NavbarGym";
import LoginForm from "./Components/LoginForm";
import TrainingPlans from "./Components/TrainingPlans";
import Gallery from "./Components/Gallery";
import Booking from "./Components/Booking";
import { Container } from "react-bootstrap";

export default function App() {
  return (
    <Router>
      <NavbarGym />
      <Container className="">
        <Routes>
          <Route path="/" element={<h1>Bienvenido a UTN GYM</h1>} />
           <Route path="/planes" element={<TrainingPlans />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/reservas" element={<Booking />} /> 
          <Route path="/login" element={<LoginForm />} /> 
        </Routes>
      </Container>
    </Router>
  );
}
