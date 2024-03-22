import Headings from "../Headings"
import Service from "./Service";
import './services.css'
import { CgGym } from "react-icons/cg";
import { FaDumbbell, FaRunning } from "react-icons/fa";  
import { IoIosNutrition } from "react-icons/io";

const Services = () => {
  return (
    <section id="services">
      <div className="services-container">
        <Headings subheading="Fitness Services" heading="Our Services" />
        <div className="services">
          <Service
            icon={<CgGym />}
            heading="Personal Training"
            description="Get personalized workout plans and one-on-one coaching tailored to your fitness goals."
          />
          <Service
            icon={<FaDumbbell />}
            heading="Group Fitness Classes"
            description="Join our energizing group fitness classes led by certified instructors in a supportive environment."
          />
          <Service
            icon={<IoIosNutrition />
            }
            heading="Nutrition Consultation"
            description="Receive expert advice on nutrition and diet plans to optimize your health and fitness journey."
          />
          <Service
            icon={<FaRunning />}
            heading="Weight Loss Programs"
            description="Discover effective weight loss programs designed to help you shed pounds and improve overall health."
          />
        </div>
      </div>
    </section>
  );
}

export default Services