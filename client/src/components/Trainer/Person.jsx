import './trainer.css'

const Person = ({ image, heading, position, desc }) => {
  return (
    <div className="person-container">
      <img className="person-image" src={image} alt="trainer" />
      <h3 className="person-heading">{heading}</h3>
      <p className="person-position">{position}</p>
      <p className="person-description">{desc}</p>
    </div>
  );
};
export default Person;
