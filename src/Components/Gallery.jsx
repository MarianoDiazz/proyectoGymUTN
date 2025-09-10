import { Row, Col, Image } from "react-bootstrap";

const images = [
  "/img/gym1.jpg",
  "/img/gym2.jpg",
  "/img/gym3.jpg",
];

export default function Gallery() {
  return (
    <Row className="mt-4">
      {images.map((src, idx) => (
        <Col key={idx} md={4} className="mb-3">
          <Image src={src} alt="gym" thumbnail fluid />
        </Col>
      ))}
    </Row>
  );
}
