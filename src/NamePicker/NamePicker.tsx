import React from "react";
import { NameCard } from "../NameCard";
import { useState } from "react";
import {Gender} from "../enums/gender";
import {getRandomName} from "./utils";
import "./NamePicker.css";
import {RandomName} from "../domain";

const NamePicker: React.FC = () => {

  const [randomName, setRandomName] = useState(new RandomName("", 0));

  const handleClick = (gender: Gender) => {
    const randomName = getRandomName(gender);
    setRandomName(randomName);
  };

  return (
    <div className="name-picker-container">
      <div className="buttons-container">
        <button
          className="name-picker-button"
          onClick={() => handleClick(Gender.MALE)}
        >
          MALE
        </button>
        <button
          className="name-picker-button"
          onClick={() => handleClick(Gender.FEMALE)}
        >
          FEMALE
        </button>
      </div>
      <NameCard randomName={randomName} />
    </div>
  );
};

export { NamePicker };
