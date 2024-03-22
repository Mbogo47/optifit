
const Service = ({icon, heading, description}) => {
  return (
    <div className="service">
      <div className="icon">{icon}</div>
      <h4>{heading}</h4>
      <p>{description}</p>
    </div>
  );
}

export default Service