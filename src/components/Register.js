import axios from "axios";
import { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Row, Col } from "reactstrap";
import Swal from "sweetalert2";
import ClipLoader from "react-spinners/ClipLoader";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [sponsorUsername, setSponsorUsername] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = (e) => {
    console.log(name, username, sponsorUsername, position);
    e.preventDefault();

    const obj = {
      name,
      username,
      sponsorUsername,
      position,
    };

    axios
      .post("http://localhost:4000/register-a-user", obj)
      .then((res) => {
        Swal.fire({
          title: res.data.message,
          icon:
            res.data.message == "User registered successfully."
              ? "success"
              : "info",
        });
      })
      .catch((err) => {
        Swal.fire({
          title: err,
          icon: "danger",
        });
      });
  };
  return (
    <Row className="mt-5">
      <Col></Col>
      <Col
        className="p-5"
        style={{
          border: "1px solid black",
          borderRadius: "5px",
          backgroundColor: "#D9D9D6",
        }}
      >
        <Form action="submit" onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name" className="text-danger">
              Name
            </Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="username" className="text-danger">
              Username
            </Label>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="UserName"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="username" className="text-danger">
              Sponsor Username
            </Label>
            <Input
              type="text"
              name="sponsorUsername"
              id="sponsorUsername"
              placeholder="Sponser Username"
              value={sponsorUsername}
              onChange={(e) => setSponsorUsername(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <Label for="position" className="text-danger">
              Select
            </Label>
            <Input
              className="ml-5"
              type="select"
              name="position"
              id="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            >
              <option>Position</option>
              <option value="left">Left</option>
              <option value="right">Right</option>
            </Input>
          </FormGroup>

          <Button
            className="btn btn-success"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Form>
      </Col>
      <Col></Col>
    </Row>
  );
};

export default Register;
