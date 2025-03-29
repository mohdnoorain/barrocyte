import Link from "next/link";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          <div className="footer-section">
            <h2 className="footer-title">Barr.</h2>
            <p>Your trusted partner for licensing & compliance services.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/services">Our Services</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Our Services</h3>
            <ul>
              <li>
                <Link href="/fssai-license">FSSAI Licensing</Link>
              </li>
              <li>
                <Link href="/drug-license">Drug License Assistance</Link>
              </li>
              <li>
                <Link href="/business-registration">Business Registration</Link>
              </li>
              <li>
                <Link href="/compliance-consulting">Compliance Consulting</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>
              Email: <a href="mailto:info@barr.com">info@barr.com</a>
            </p>
            <p>Phone: +91-9266665237</p>
            <p>Address: 123 Business Street, City, India</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Barr. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
