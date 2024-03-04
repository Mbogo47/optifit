import React from "react";
import Headings from "../Headings";
import "./classes.css";
import T1 from "../../assets/person_1.jpg";
import T2 from "../../assets/person_2.jpg";
import T3 from "../../assets/person_3.jpg";
import T4 from "../../assets/person_4.jpg";

import Class from "./Class";

const Classes = () => {
  return (
    <section className="classes-container" id="classes">
      <div className="container">
        <Headings subheading="Fitness Classes" heading="Our Classes" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eum
          aliquid atque sed, deserunt quisquam omnis, nisi consequuntur
          architecto modi voluptatibus recusandae alias eius minima quod.
        </p>

        <div className="class"> 
            <Class image={T1} training="Cardio"  time="1hr" trainer="Emily Smith" />
            <Class image={T4} training="Yoga"  time="30mins" trainer="Sophia Johnson" />
            <Class image={T3} training="Pilates"  time="30mins" trainer="Isabella Brown" />
            <Class image={T2} training="Strength Training"  time="1hr" trainer="Liam Johnson" />
          </div>
        </div>
   
    </section>
  );
};

export default Classes;
