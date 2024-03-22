import './home.css'

const Home = () => {
  return (
    <section className="home-container" id="home" >
      <div className="home-overlay"></div> 
      <div className="home-content">
        <h1>Welcome to Optifit</h1>
        <p>
          Optifit is a fitness center that offers a variety of services to help
          you achieve your fitness goals. We offer personal training, group
          fitness classes, and more. Our team of fitness experts is dedicated to
          helping you reach your fitness goals in a way that's fun, flexible,
          and sustainable.
        </p>
      </div>
    </section>
  );
};
export default Home;
