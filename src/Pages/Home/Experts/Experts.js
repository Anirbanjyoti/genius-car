import React from "react";
import './Experts.css'
import expert1 from "../../../images/experts/expert-1.jpg";
import expert2 from "../../../images/experts/expert-2.jpg";
import expert3 from "../../../images/experts/expert-3.jpg";
import expert4 from "../../../images/experts/expert-4.jpg";
import expert5 from "../../../images/experts/expert-5.jpg";
import expert6 from "../../../images/experts/expert-6.png";
import Expert from "../Expert/Expert";
const experts = [
  { id: 1, name: "william smith", img: expert1 },
  { id: 2, name: "grham smith", img: expert2 },
  { id: 31, name: "benth smith", img: expert3 },
  { id: 4, name: "jack smith", img: expert4 },
  { id: 5, name: "john smith", img: expert5 },
  { id: 6, name: "Alex summer", img: expert6 },
];

const Experts = () => {
  return (
    <div>
      <h3 className="text-center text-primary">Our experts</h3>
    <div className="experts-container">
      {experts.map((expert) => (
        <Expert key={expert.id} expert={expert}></Expert>
      ))}
    </div>
    </div>
  );
};

export default Experts;
