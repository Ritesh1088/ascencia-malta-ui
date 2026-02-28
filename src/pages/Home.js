import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <img 
          src="/images/college-home4.jpg" 
          alt="College" 
          className="hero-image"
        />

        <div className="hero-overlay">
          <h1 className="hero-title">
            We are eager to give you the best education
          </h1>
          <h2 className="hero-subtitle">
            Welcome to Ascencia Malta
          </h2>
        </div>
      </section>

      {/* PROGRAMME SECTION */}
      <section className="programme">
        <h1>Find the best programme for yourself</h1>
        <p>
          Because each training course corresponds to a personal ambition,
          all our students receive individual attention. The success of each student is our priority.
          Our teams accompany each student in the success of his project.
        </p>
      </section>

      {/* COURSES CARDS */}
      <section className="courses">
        <div className="course-card">MASTER DEGREES</div>
        <div className="course-card">AWARD CERTIFICATES</div>
        <div className="course-card">MBA DEGREE</div>
        <div className="course-card">DBA DEGREES</div>
        <div className="course-card">BACHELORS DEGREES</div>
      </section>

      {/* ABOUT ASCENCIA SECTION */}
      <section className="about-preview">
        <h1>About Ascencia Malta</h1>
        <p>
          Ascencia Malta is located in Floriana – right on the doorstep of Valletta.
          Floriana was meant to be a suburb of Valletta, but it developed to be a town on its own.
          A short walk separates the two towns. It isn’t easy to understand where Floriana finishes
          and Valletta starts, but the iconic entry to the capital is part of Floriana.
        </p>

        <button 
          className="read-more-btn"
          onClick={() => navigate("/about")}
        >
          READ MORE
        </button>
      </section>

     {/* STUDY IN MALTA */}
      <section className="study-malta">
        <div className="study-container">

          <div className="study-left">
            <h1 className="study-title">Study in Malta</h1>

            <h2 className="study-subtitle">Why Floriana?</h2>

            <ul className="study-points">
              <li>🏛️ Because of History</li>
              <li>🏗️ Architecture</li>
              <li>🌳 Public Gardens</li>
              <li>🎶 Music Festivals</li>
              <li>✨ Its Authenticity</li>
            </ul>

            <p className="study-small">
              And because there is a lot more… But you have to discover!
            </p>
          </div>

          <div className="study-right">
            <div className="circle-image">
              <img src="/images/university-building.jpg" alt="Floriana Malta" />
            </div>
          </div>

        </div>
      </section>

        {/* DIRECTOR SECTION */}
        <section className="director">

          <div className="director-container">

            {/* TEXT SIDE */}
            <div className="director-text">

              <h1 className="director-heading">
                Welcome to Ascencia <br /> Business School!
              </h1>

              <p className="director-para">
                As the Director of Ascencia Malta Business and English Language School,
                it is an honour and a pleasure to welcome you to our beautiful campus in Floriana, Malta.
              </p>

              <p className="director-para">
                I am proud to spearhead a school built on academic integrity and excellence,
                paired with an inherent commitment to learn, teach, innovate and champion business success.
              </p>

              <p className="director-para">
                Our academic teams mentor some of the brightest minds of this generation,
                helping students evolve into trailblazers in both professional and personal spheres.
              </p>

              <p className="director-para">
                Our mission is to ensure that after completing their studies,
                students confidently step into the world of work and excel.
              </p>

              <p className="director-para">
                Education is a powerful tool for discovering our true path.
                I invite you to join us at the heart of the Mediterranean
                and begin your journey of self-discovery.
              </p>

              <p className="director-para">
                Your career starts here!
              </p>

            </div>

            {/* IMAGE SIDE */}
            <div className="director-image-box">

              <div className="director-image-wrapper">
                <img
                  src="/images/Tess-Giordmaina-Ascencia-Malta-.jpg"
                  alt="Dr Tess"
                />
              </div>

              <h3>Dr. Tess Giordmaina</h3>
              <h4>Director of Ascencia Malta</h4>

            </div>

          </div>

        </section>

        {/* CAMPUSES */}
        <section className="campuses">
        <h1>Our Campuses</h1>
        <p>Discover Ascencia Business School campuses around the world and their international mobility programs.</p>

        <div className="campus-cards">
            <div className="campus-card">
            <img src="/images/students studying.jpg" alt="Paris" />
            <h3>Paris Campus</h3>
            <p>Ascencia Business School and its international programs are pleased to welcome you on its Paris campus.</p>
            </div>

            <div className="campus-card">
            <img src="/images/students studying2.jpg" alt="Valencia" />
            <h3>Valencia Campus</h3>
            <p>Ascencia Business School and its international programs are pleased to welcome you on its Valencia Campus.</p>
            </div>
        </div>
        </section>

        {/* PARTNERS */}
        <section className="partners">
        <h1>Partner Institutions</h1>

        <div className="partner-logos">
            <img src="/images/partner-1.jpg.webp" alt="p1"/>
            <img src="/images/partner-2.jpg.webp" alt="p2"/>
            <img src="/images/partner-3.jpg.webp" alt="p3"/>
            <img src="/images/partner-4.jpg.webp" alt="p4"/>
            <img src="/images/partner-7.jpg.webp" alt="p7"/>
            <img src="/images/partner-6.jpg.webp" alt="p6"/>
        </div>
        </section>

        {/* JOIN US */}
      <section className="join-us">
        <h1>🎉 Join Us!</h1>
        <p>
          You wish to join the Ascencia Business School community?
          The registration and admission procedure is simple and totally free.
        </p>
      </section>

    </div>
  );
};

export default Home;

