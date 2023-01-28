import React from "react";
import CheckerCard from "../../../../../components/card/ceheckerCard/CheckerCard";
import "./style.scss";

const MainData = ({ headTransactions, transactions, headVersion, version }) => {
  return (
    <CheckerCard>
      <div className="node-status">
        <h3>Node status</h3>
        <h5>Your node version:</h5>
        <p>{version ? version : "Loading..."}</p>
        <h5>Your node transactions count:</h5>
        <p>{transactions ? transactions : "Loading..."}</p>
        <h5>Sui network actual version:</h5>
        <p>{headVersion ? headVersion : "Loading..."}</p>
        <h5>Sui network transactions count:</h5>
        <p>{headTransactions ? headTransactions : "Loading..."}</p>
        {version === headVersion ? (
          <p className="green-status">Your node is up to date</p>
        ) : (
          <p className="red-status">Please update your node</p>
        )}
      </div>
    </CheckerCard>
  );
};

export default MainData;
