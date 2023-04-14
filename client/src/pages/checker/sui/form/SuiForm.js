// External package imports
import React, { useContext } from "react";
import { Row, Col, Form, FormControl, Button } from "react-bootstrap";

// Context imports
import { SuiCheckerContext } from "../../../../context/SuiCheckerContext";

// Stylesheet imports
import "./style.scss";

const SuiForm = ({ handleSubmit, handleNetworkChange }) => {
  const {
    ip,
    rpcPort,
    suiNetwork,
    setIp,
    setRpcPort,
    // metricsPort,
    // setMetricsPort,
  } = useContext(SuiCheckerContext);

  return (
    <Form className="checker-form" onSubmit={handleSubmit}>
      <Row className="flex-end">
        <Col xs={12} md={3}>
          <Form.Group controlId="formIP">
            <Form.Label className="label">IP</Form.Label>
            <FormControl
              className="input"
              type="text"
              value={ip}
              onChange={(e) => setIp(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={12} md={3} className="ports">
          <Form.Group controlId="formRPC">
            <Form.Label className="label">RPC</Form.Label>
            <FormControl
              className="input port"
              type="text"
              value={rpcPort}
              onChange={(e) => setRpcPort(e.target.value)}
            />
          </Form.Group>
          {/* <Form.Group controlId="formMetrics">
            <Form.Label className="label">Metrics</Form.Label>
            <FormControl
              className="input port"
              type="text"
              value={metricsPort}
              onChange={(e) => setMetricsPort(e.target.value)}
            />
          </Form.Group> */}
        </Col>
        <Col xs={12} md={3}>
          <Form.Group className="network-group">
            <Form.Label className="label">Network</Form.Label>
            <Button
              className="cheker-button"
              variant="secondary"
              type="button"
              onClick={() => handleNetworkChange("devnet")}
            >
              {suiNetwork === "testnet" ? "testnet" : "devnet"}
            </Button>
          </Form.Group>
        </Col>
        <Col xs={12} md={3}>
          <Button className="cheker-button" variant="secondary" type="submit">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SuiForm;
