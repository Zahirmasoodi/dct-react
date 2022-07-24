import "./App.css";
import { Container, Row, Col, Button } from "reactstrap";
import Register from "./components/Register";
import GetTree from "./components/GetTree";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Container
        fluid
        className="center"
        style={{ backgroundColor: "#EDEAE0", minHeight: "100vh" }}
      >
        <Row style={{ backgroundColor: "#EFDECD" }} className="p-2">
          <Col>
            <Link to="/register" className="m-5">
              <span className="links">
                <b>Register a new User</b>
              </span>
            </Link>
            <Link to="/" className="m-5">
              <span className="links">
                <b>Visualize Tree</b>
              </span>
            </Link>
          </Col>
        </Row>
        <Routes>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/" element={<GetTree />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
