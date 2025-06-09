import React from "react";

const Card = ({ title, skills }) => {
  return (
    <div className="card-bg">
      <h3 className="card-title">{title}</h3>
      <ul className="list-disc list-inside text-white">
        {skills.map((skill, index) => (
          <li key={index} className="text-sm">{skill}</li>
        ))}
      </ul>
    </div>
  );
};
export default Card;
