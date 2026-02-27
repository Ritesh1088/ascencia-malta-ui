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
          src="/images/college-home.jpg" 
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
        <h1>Study in Malta</h1>
        <h2>Why Floriana?</h2>

        <div className="malta-points">
            <ul>
            <li>Because of History</li>
            <li>Architecture</li>
            <li>Public gardens</li>
            </ul>

            <ul>
            <li>Music festivals</li>
            <li>Its authenticity</li>
            <li>And because there is a lot more…</li>
            </ul>
        </div>
     </section>

        {/* DIRECTOR SECTION */}
    <section className="director">
        <div className="director-container">

        <div className="director-image-box">
        <img 
        src="/images/Tess-Giordmaina-Ascencia-Malta-.jpg" 
        alt="Dr Tess"
        />
      <h3>Dr. Tess Giordmaina</h3>
      <h4>Director of Ascencia Malta</h4>
       </div>

        <div className="director-text">
        <h1>Welcome to Ascencia<br></br> Business School!</h1>
        <p>
            As the Director of Ascencia Malta Business and English Language School, it is an honour and 
            a pleasure to welcome you dear students and faculty to our beautiful campus in Floriana, Malta.
            I am honoured to spearhead a school that is built on a solid foundation of academic integrity 
            and excellence paired with an inherent commitment to learn, teach, innovate and champion knowledge 
            and business success. Our academic teams have been tasked with the responsibility of mentoring some 
            of the brightest minds of this generation. Watching our students evolve into trailblazers with 
            achievements in both professional and personal spheres fuels our commitment to offering practical, 
            and business-relevant education. Our mission is to ensure that after completing their studies with us, 
            our students are able to step right into the world of work and excel. We understand that education is 
            a vital tool in helping us discover our paths, and so I invite you all to join us at the heart of 
            the Mediterranean to start your journey of self-discovery. Your career starts here!
        </p>
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

    </div>
  );
};

export default Home;

