import React, { useContext } from "react";
import {
  Row,
  Col,
  Form,
  FormControl,
  Button,
  Container,
  Dropdown,
} from "react-bootstrap";
import { ThemeContext } from "../../../../context/ThemeContext";
import { SuiCheckerContext } from "../../../../context/SuiCheckerContext";
import "./style.scss";

const SuiForm = ({ handleSubmit }) => {
  const { theme } = useContext(ThemeContext);
  const { ip, rpcPort, suiNetwork, setSuiNetwork, setIp, setRpcPort } =
    useContext(SuiCheckerContext);

  const handleSelect = (eventKey) => {
    setSuiNetwork(eventKey);
  };

  return (
    <Container className="sui-form-container">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col sm={12} md={4} className="sui-form-col">
            <Form.Group controlId="formIP">
              <Form.Label>IP</Form.Label>
              <FormControl
                id={theme === "light" && "light"}
                className="input"
                type="text"
                value={ip}
                onChange={(e) => setIp(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col xs={6} md={2} className="sui-form-col">
            <Form.Group controlId="formRPC">
              <Form.Label>RPC</Form.Label>
              <FormControl
                id={theme === "light" && "light"}
                className="input"
                type="text"
                value={rpcPort}
                onChange={(e) => setRpcPort(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col xs={6} md={2} className="sui-form-col">
            <Form.Group controlId="formMetrics">
              <Form.Label>Metrics</Form.Label>
              <FormControl
                id={theme === "light" && "light"}
                className="gray input"
                type="text"
                value={"Soon..."}
                disabled
              />
            </Form.Group>
          </Col>
          <Col xs={6} md={2} className="sui-form-col">
            <Form.Group className="network-form-container">
              <Form.Label>Network</Form.Label>
              <Dropdown className="" onSelect={handleSelect}>
                <Dropdown.Toggle variant="success" id="network-dropdown">
                  {suiNetwork}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="mainnet">mainnet</Dropdown.Item>
                  <Dropdown.Item eventKey="testnet">testnet</Dropdown.Item>
                  <Dropdown.Item eventKey="devnet">devnet</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {/* <Button
                id={theme === "light" && "light"}
                className="btn"
                variant="secondary"
                type="button"
                onClick={() => handleNetworkChange("devnet")}
              >
                {suiNetwork === "testnet" ? "TESTNET" : "DEVNET"}
              </Button> */}
            </Form.Group>
          </Col>
          <Col xs={6} md={2} className="sui-form-col">
            <Button
              id={theme === "light" && "light"}
              className="btn sui-form-sbmt-button"
              variant="secondary"
              type="submit"
            >
              CHECK
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default SuiForm;
