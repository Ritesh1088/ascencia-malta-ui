import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-left">
        <h3>Ascencia Malta Ltd</h3>
        <p>503, 5th Floor, Chandak Chambers, Opp. Gurunanak Petrol Pump, Near Western Express Highway, Andheri East, Mumbai - 400069</p>
        <p>Erasmus + mobility: info@angel-portal.com</p>
      </div>

      <div className="footer-center">
        <p>© 2026 Ascencia Malta</p>
        <p>Licensed by MFHEA | License number: 2021-018</p>
        <p>Member of College de Paris</p>
      </div>

      <div className="footer-right">
        <p>Follow Ascencia Malta</p>

        <div className="social-icons">
          <img src="/images/facebook.png" alt="Facebook" />
          <img src="/images/instagram.jpeg" alt="Instagram" />
          <img src="/images/linkedin.png" alt="LinkedIn" />
          <img src="/images/tiktok.png" alt="TikTok" />
          <img src="/images/youtube.png" alt="YouTube" />
        </div>
      </div>

    </footer>
  );
};

export default Footer;