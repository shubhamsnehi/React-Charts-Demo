import { Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Barchart from '../Barchart/Barchart';
import Piechart from '../Piechart/Piechart';
import Doughnutchart from '../Doughnutchart/Doughnutchart';
import Linechart from '../Linechart/Linechart';

function Home() {
  return (
    <div className="container text-center mt-3 mb-3">
      <Row>
        <Col md={4}>
          <Card>
            <Card.Header>Bar Chart</Card.Header>
            <Card.Body><Barchart /></Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Header>Pie Chart</Card.Header>
            <Card.Body><Piechart /></Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Header>Doughnut Chart</Card.Header>
            <Card.Body><Doughnutchart /></Card.Body>
          </Card>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col md={4}>
          <Card>
            <Card.Header>Line Chart</Card.Header>
            <Card.Body><Linechart /></Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Header>Pie Chart</Card.Header>
            <Card.Body><Piechart /></Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Header>Doughnut Chart</Card.Header>
            <Card.Body><Doughnutchart /></Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
