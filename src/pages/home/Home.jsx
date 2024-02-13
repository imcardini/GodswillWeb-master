import React from "react";
import { Link } from "react-router-dom";
import Profile from "../../assets/home.jpg";
import { FaArrowRight } from "react-icons/fa";
import "./home.css"

const Home = () => {
  return (
    <section className="home section grid">
      <img src={ Profile } alt="" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Peter Godswill.</span> <br />  
               Web Developer/ graphics design
          </h1>
          <p className="home__description">
          I am a trained web developer with a diverse skill set, encompassing HTML, CSS, JavaScript, and proficiency in frameworks like React.js, Node.js, and Tailwind.css. My expertise also extends to WordPress, where I excel as a front-end web developer. 
          </p>
          <Link to='/about' className='button'>
            More About Me{' '}
            <span className='button__icon'>
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="color__block">
        
      </div>
    </section>
  );
};

export default Home;
