import React from "react";
import "./NameCard.css";
import {RandomName} from "../domain";

interface Props {
  randomName: RandomName;
}

const NameCard: React.FC<Props> = ({
  randomName
}) => {
  const { name, probability } = randomName;
  return name ? (
    <div className="card">
      <span className="name">{name.toLowerCase()}</span>
      <span className="probability">{`${probability.toFixed(0)}%`}</span>
    </div> )
    : null;
};

export { NameCard };
