import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import MainData from "./cards/mainData/MainData";
import { sendHttpRequestToSuiNode } from "./requests";
import SyncData from "./cards/syncData/SyncData";

const SuiChecker = () => {
  const [ip, setIp] = useState("161.97.133.53");
  const [rpcPort, setRpcPort] = useState("9000");
  const [metricsPort, setMetricsPort] = useState("");
  const [suiNetwork, setSuiNetwork] = useState("testnet");

  const [submitted, setSubmitted] = useState(false);
  const [headTransactions, getHeadTransactions] = useState();
  const [headVersion, getHeadVersion] = useState();
  const [transactions, getTransactions] = useState();
  const [version, getVersion] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(!submitted);
  };

  const handleNetworkChange = () => {
    if (suiNetwork === "devnet") {
      setSuiNetwork("testnet");
    } else if (suiNetwork === "testnet") {
      setSuiNetwork("devnet");
    }
  };

  // requests

  useEffect(() => {
    if (submitted) {
      getTransactions("Loading...");
      getVersion("Loading...");
      sendHttpRequestToSuiNode(
        `http://${ip}:${rpcPort}`,
        "sui_getTotalTransactionBlocks"
      ).then((res) => getTransactions(res.result));

      sendHttpRequestToSuiNode(`http://${ip}:${rpcPort}`, "rpc.discover").then(
        (res) => getVersion(res.result.info.version)
      );
    }
  }, [submitted, ip, rpcPort]);

  useEffect(() => {
    getHeadTransactions("Loading...");
    getHeadVersion("Loading...");
    sendHttpRequestToSuiNode(
      `https://fullnode.${suiNetwork}.sui.io:443`,
      "sui_getTotalTransactionBlocks"
    ).then((res) => getHeadTransactions(res.result));
    sendHttpRequestToSuiNode(
      `https://fullnode.${suiNetwork}.sui.io:443`,
      "rpc.discover"
    ).then((res) => getHeadVersion(res.result.info.version));
  }, [suiNetwork]);

  return (
    <div className="">
      <div className="">
        <Container>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col xs={12} md={3}>
                <Form.Group controlId="formIP">
                  <Form.Label>IP</Form.Label>
                  <FormControl
                    type="text"
                    value={ip}
                    onChange={(e) => setIp(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={3}>
                <Form.Group controlId="formRPC">
                  <Form.Label>RPC</Form.Label>
                  <FormControl
                    type="text"
                    value={rpcPort}
                    onChange={(e) => setRpcPort(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={3}>
                <Form.Group controlId="formMetrics">
                  <Form.Label>Metrics</Form.Label>
                  <FormControl
                    type="text"
                    value={metricsPort}
                    onChange={(e) => setMetricsPort(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={3}>
                <Button
                  variant="primary"
                  type="button"
                  onClick={() => handleNetworkChange("devnet")}
                >
                  {suiNetwork === "testnet" ? "devnet" : "testnet"}
                </Button>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
        <Container className="cards-container">
          <Row>
            <Col xs={12} md={4}>
              <MainData
                version={version}
                headVersion={headVersion}
                transactions={transactions}
                headTransactions={headTransactions}
              />
            </Col>
            <Col xs={12} md={4}>
              <SyncData
                submitted={submitted}
                transactions={transactions}
                headTransactions={headTransactions}
              ></SyncData>
            </Col>
            <Col xs={12} md={4}></Col>
          </Row>
        </Container>
      </div>
      <div className=""></div>
    </div>
  );
};

export default SuiChecker;
