import React, { useState, useEffect } from "react";
import CheckerCard from "../../../../../components/card/ceheckerCard/CheckerCard";
import RadialGauge from "../../../../../components/gauge/Gauge";

const SyncData = ({ transactions, headTransactions }) => {
  const [syncProgress, setSyncProgress] = useState(0);

  useEffect(() => {
    if (transactions) {
      setSyncProgress(Math.round((transactions * 100) / headTransactions));
    }
    return syncProgress;
  }, [transactions, headTransactions, syncProgress]);

  return (
    <CheckerCard>
      <div className="sync-data">
        <RadialGauge syncProgress={syncProgress} />
      </div>
    </CheckerCard>
  );
};

export default SyncData;
