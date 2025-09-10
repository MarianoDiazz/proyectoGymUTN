import { Container, Button } from "react-bootstrap";
import "../App.css";

export default function HeroSection() {
  return (
    <div className="hero d-flex align-items-center text-center">
      <Container className="container-fluid">
        <h1 className="display-3 fw-bold text-white">Bienvenido a GymX</h1>
        <p className="lead text-white-50 mb-4">
          Entrena con nosotros y alcanza tu mejor versión 💪
        </p>
        <Button variant="success" size="lg" href="/planes">
          Ver Planes de Entrenamiento
        </Button>
      </Container>
    </div>
  );
}
