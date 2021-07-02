import {
  Button,
  Container,
  Row,
  Col,
  Alert,
  Breadcrumb,
  Card,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container>
      <Breadcrumb>
        <Breadcrumb.Item>Test 1</Breadcrumb.Item>
        <Breadcrumb.Item>Test 2</Breadcrumb.Item>
        <Breadcrumb.Item active>Test 3</Breadcrumb.Item>
      </Breadcrumb>
      <Row className="mb-4">
        <Col>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="bleh@gmail.com" />
              <Form.Text className="text-muted">muted random text</Form.Text>
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            <Button variant="success" type="submit">
              Login
            </Button>
          </Form>
        </Col>
        <Col>
          <Card className="mt-3">
            <Card.Img
              className="card-img-top"
              src="https://picsum.photos/200/50"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Example text</Card.Text>
              <Button variant="secondary">Read more</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Alert variant="primary">This is an Alert</Alert>
      <Button>Test button</Button>
    </Container>
  );
}

export default App;
