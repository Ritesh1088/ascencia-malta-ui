import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <div className="about-page">

      {/* HERO BANNER */}
      <section className="about-hero">
        <img src="/images/about-banner.jpg" alt="About Banner" />
        <div className="about-hero-text">
          <h1>Ascencia Malta</h1>
          <h2>We are eager to give you the best education</h2>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="about-intro">
        <p>
          Ascencia’s ambition is to realize your potential of ascension.
          Through an individualized follow-up of the students, our teams are at your service for your future:
          come and present us your projects, and we will do our best to help you realize them.
        </p>
      </section>

      {/* ABOUT + MISSION */}
      <section className="about-content">
        <div className="about-text">
          <h2>About</h2>
          <p>
            Our training courses are based on a participative and innovative pedagogy based on the value 
            of the example and the constant exchange between learners and experienced professionals. 
            The realities of corporate life are at the heart of the personalized learning methods we use. 
            They are intended to identify potentials and to hatch vocations of managers and business 
            developers. Our campus is also open to all international candidates who wish to study 
            management in Malta.
          </p>

          <h2>Mission</h2>
          <p>
            At Ascencia Malta, we empower students through a student-centered approach that fosters 
            critical thinking, creativity, and lifelong learning. We deliver high-quality education 
            that meets rigorous standards and prepares graduates for success in a dynamic world. 
            Together with our partnered stakeholders, we are dedicated to developing socially 
            responsible leaders who champion diversity, inclusion, and equity, creating meaningful 
            impact within our diverse community. 
          </p>
        </div>

        <div className="about-images">
          <img src="/images/services3.jpg" alt="Service" />
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="values">
        <h1>Our Values</h1>

        <div className="value-cards">

          <div className="value-card">
            🌍 <h3>International Openness</h3>
            <p>This is our purpose. Our programs have been specifically designed to host international students 
              and enable French students to do their internship in the English language or part of their training 
              in another country, at the heart of the international system: an excellent French language school, 
              a network of representative offices and university partners.</p>
          </div>

          <div className="value-card">
            🎓 <h3>Teaching Excellence</h3>
            <p>The member schools of Ascencia are all recognised in their specialised 
              domains and prepare graduates to achieve insertion in world job markets. 
              The faculty comprises an academic lecturing body and the best professional players. 
              All the programs lead to a state-recognised certification.</p>
          </div>

          <div className="value-card">
            💼 <h3>Job Access</h3>
            <p>Because each training course corresponds to a personal ambition, all our students receive 
              individual attention. The success of each student is our priority. Our teams accompany 
              each student in the success of his project. Professional integration, promoted by 
              work-linked training, is our top priority.</p>
          </div>
        </div>
      </section>

      {/* TUTORS SECTION */}
      <section className="tutors">
        <div className="tutors-image">
          <img src="/images/services1.jpg" alt="Tutors" />
        </div>

        <div className="tutors-text">
          <h1>Our Tutors</h1>
          <h2>Some special teachers from the Industry!</h2>
          <p>
            At Ascencia Malta, you’ll experience a friendly and welcoming student-centred learning 
            environment<br></br><br></br>
            Our lecturers, many entrepreneurs themselves, provide learners with the opportunity to build 
            their professional and academic qualifications through a career path that meets their 
            interests and aspirations in their chosen career.<br></br><br></br>
            Ascencia Malta lecturers support, mentor and guide you through the skills, knowledge and 
            practical work experience to achieve your goals.
          </p>
        </div>
      </section>

      {/* PARTNERS SECTION */}
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

      {/* SCROLL BUTTON */}
      <button 
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>

    </div>
  );
};

export default About;