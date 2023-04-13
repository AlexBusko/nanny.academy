// External package imports
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

// Context imports
import { SuiCheckerContext } from "../../../context/SuiCheckerContext";

// Local component imports
import MainData from "./cards/mainData/MainData";
import SyncData from "./cards/syncData/SyncData";
import SuiForm from "./form/SuiForm";

// Utility or helper function imports
import { sendHttpRequestToSuiNode } from "./requests";

// Stylesheet imports
import "./style.scss";

const SuiChecker = () => {
  const [ip, setIp] = useState("185.252.232.33");
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

  useEffect(() => {
    if (submitted) {
      getTransactions("Loading...");
      getVersion("Loading...");

      axios
        .post("http://localhost:3001/api/data", { ip, rpcPort })
        .then((res) => {
          getTransactions(res.data.transactions);
          getVersion(res.data.version);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
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
    <SuiCheckerContext.Provider
      value={{
        ip,
        rpcPort,
        metricsPort,
        suiNetwork,
        setIp,
        setRpcPort,
        setMetricsPort,
        setSuiNetwork,
      }}
    >
      <div className="">
        <div className="">
          <Container className="form-container">
            <SuiForm
              handleSubmit={handleSubmit}
              handleNetworkChange={handleNetworkChange}
            />
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
      </div>
    </SuiCheckerContext.Provider>
  );
};

export default SuiChecker;
