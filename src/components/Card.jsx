import React from "react";
import WaitingAnimation from "./WaitAnimation";

const Card = ({ title, choice }) => {
  return (
    <div className="card">
      <div className="flex justify-center items-center  text-3xl ">
        <h1>{title}</h1>
      </div>
      <div className="flex justify-center items-center h-40 mt-10">
        <h2 className="text-5xl animate-bounce">{choice || <WaitingAnimation/>}</h2>
      </div>
    </div>
  );
};

export default Card;
