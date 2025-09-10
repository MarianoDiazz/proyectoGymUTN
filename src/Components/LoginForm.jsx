import { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bienvenido ${email}`);
  };

  return (
    <Card className="p-4 shadow">
      <h3 className="text-center">Iniciar Sesión</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        </Form.Group>
        <Button type="submit" variant="primary" className="w-100">Ingresar</Button>
      </Form>
    </Card>
  );
}
