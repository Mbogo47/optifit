import Person from "./Person";
import T1 from '../../assets/person_1.jpg';
import T2 from "../../assets/person_2.jpg";
import T3 from "../../assets/person_3.jpg";
import T4 from "../../assets/person_4.jpg";
import Headings from "../Headings";

const Trainer = () => {
  return (
    <section className="trainer-container" id="trainer">
      <Headings subheading="Trainers" heading="Our Trainers" />
      <div className="trainers-list">
        <Person
          image= {T1}
          heading="Emily Smith"
          position="Trainer"
          desc="Emily Smith is a certified personal trainer with over 8 years of experience in the fitness industry. She specializes in high-intensity interval training (HIIT) and enjoys helping her clients achieve their fitness goals."
        />
        <Person
          image={T4}
          heading="Sophia Johnson"
          position="Trainer"
          desc="Sophia Johnson is passionate about health and fitness. As a certified yoga instructor and nutritionist, she believes in the power of mindfulness and balanced nutrition to achieve overall wellness."
        />
        <Person
          image={T3}
          heading="Isabella Brown"
          position="Trainer"
          desc="Isabella Brown is dedicated to empowering women through fitness. With her background in strength training and body positivity, she strives to create inclusive and empowering workout environments."
        />
        <Person
          image={T2}
          heading="Liam Wilson"
          position="Trainer"
          desc="Liam Wilson is a dedicated fitness coach who believes in the importance of functional training and injury prevention. With his expertise in sports science, he helps clients achieve their fitness goals safely and effectively."
        />
      </div>
    </section>
  );
}

export default Trainer