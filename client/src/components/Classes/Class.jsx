import "./classes.css";

const Class = ({ image, training, day, time, trainer }) => {
  return (
    <div className="class-box">
          <img className="person-image" src={image} alt="trainer" />
          <h3>{training}</h3>
          
          <p>{time}</p>
          <p>With: {trainer}</p>
    </div>
  );
};
export default Class;
