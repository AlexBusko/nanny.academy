import React from "react";
import { Button } from "react-bootstrap";
import "./style.scss";

const PrimaryButton = ({title}) => {
  return <Button className="button" children={title} onClick={() => {alert("Ви підписались")}}></Button>;
};

export default PrimaryButton;
