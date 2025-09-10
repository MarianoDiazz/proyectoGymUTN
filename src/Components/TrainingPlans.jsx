import { Card, Button, Row, Col } from "react-bootstrap";

const plans = [
  { title: "Básico", price: "$20/mes", desc: "Acceso a máquinas" },
  { title: "Intermedio", price: "$35/mes", desc: "Máquinas + Clases grupales" },
  { title: "Premium", price: "$50/mes", desc: "Todo incluido + Personal Trainer" },
];

export default function TrainingPlans() {
  return (
    <Row className="mt-4">
      {plans.map((plan, idx) => (
        <Col key={idx} md={4}>
          <Card className="p-3 shadow">
            <Card.Title>{plan.title}</Card.Title>
            <Card.Text>{plan.desc}</Card.Text>
            <h4>{plan.price}</h4>
            <Button variant="success">Elegir</Button>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
