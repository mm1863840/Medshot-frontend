import React from 'react';
import '../footer.css'; // CSS file for styling
import logo from '../images/logo.jpeg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="MedShot Logo" />
        <p>
          At MedShot, we pride ourselves on always caring for your child's health with the utmost dedication and compassion.
          Our specialties include a comprehensive range of vaccinations, personalized care plans, and more.
        </p>
      </div>

      <div className="footer-links">
        <div>
          <h3>Product</h3>
          <ul>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h3>Resources</h3>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">User guides</a></li>
            <li><a href="#">Webinars</a></li>
          </ul>
        </div>
        <div>
          <h3>Company</h3>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Join us</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-newsletter">
        <h3>Subscribe to our newsletter</h3>
        <p>For product announcements and exclusive insights</p>
        <div className="newsletter-input">
          <input type="email" placeholder="Input your email" />
          <button>Subscribe</button>
        </div>
      </div>

      <div className="footer-social">
        <a href="#"><i className="fa fa-twitter"></i></a>
        <a href="#"><i className="fa fa-facebook"></i></a>
        <a href="#"><i className="fa fa-linkedin"></i></a>
        <a href="#"><i className="fa fa-youtube"></i></a>
      </div>

      <div className="footer-bottom">
        <p>MEDSHOT • <a href="#">Privacy</a> • <a href="#">Terms</a></p>
      </div>
    </footer>
  );
}

export default Footer;
