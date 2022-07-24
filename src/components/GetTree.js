import { Component } from "react";
import Tree from "react-d3-tree";
import { Row, Col } from "reactstrap";
import ClipLoader from "react-spinners/ClipLoader";

export class getTree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/get-all-users/")
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        this.setState({
          data: data,
          loading: true,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  render() {
    const pointX = window.innerWidth / 6;

    return (
      <Row className="mt-5">
        <Col></Col>
        <Col
          style={{
            border: "1px solid black",
            borderRadius: "5px",
            backgroundColor: "#D9D9D6",
          }}
        >
          <div className="p-3" id="tree-wrapper">
            {this.state.loading ? (
              <Tree
                data={this.state.data}
                orientation="vertical"
                translate={{ x: pointX, y: 20 }}
              />
            ) : (
              <ClipLoader color="red" />
            )}
          </div>
        </Col>
        <Col></Col>
      </Row>
    );
  }
}

export default getTree;
