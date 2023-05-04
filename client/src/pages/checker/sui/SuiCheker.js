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

// Stylesheet imports
import "./style.scss";

const SuiChecker = () => {
  const [ip, setIp] = useState("185.252.232.33");
  const [rpcPort, setRpcPort] = useState("9000");
  // const [metricsPort, setMetricsPort] = useState("");
  const [suiNetwork, setSuiNetwork] = useState("testnet");

  const [submitted, setSubmitted] = useState(false);
  const [headTransactions, getHeadTransactions] = useState();
  const [headVersion, getHeadVersion] = useState();
  const [transactions, getTransactions] = useState();
  const [version, getVersion] = useState();
  const url = process.env.REACT_APP_API_URL;

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
      console.log(url);
      axios
        .post(`${url}api/node/data`, { ip, rpcPort })
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

    axios
      .post(`${url}api/sui/data`, { suiNetwork })
      .then((res) => {
        getHeadTransactions(res.data.transactions);
        getHeadVersion(res.data.version);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [suiNetwork]);

  return (
    <SuiCheckerContext.Provider
      value={{
        ip,
        rpcPort,
        suiNetwork,
        setSuiNetwork,
        setIp,
        setRpcPort,
        // setMetricsPort,
        // metricsPort,
      }}
    >
      <div className="">
        <div className="">
          <Container>
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
