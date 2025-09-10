import { useState } from "react";
import { Form, Button, ListGroup, Card } from "react-bootstrap";

export default function Booking() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [bookings, setBookings] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBooking = { name, date };
    setBookings([...bookings, newBooking]);
    setName("");
    setDate("");
  };

  return (
    <Card className="p-4 shadow">
      <h3>Reservar Turno</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-2">
          <Form.Label>Nombre</Form.Label>
          <Form.Control value={name} onChange={(e) => setName(e.target.value)} required />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Fecha</Form.Label>
          <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </Form.Group>
        <Button type="submit" variant="primary">Reservar</Button>
      </Form>

      <h5 className="mt-4">Mis Reservas</h5>
      <ListGroup>
        {bookings.map((b, idx) => (
          <ListGroup.Item key={idx}>{b.name} - {b.date}</ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
}
