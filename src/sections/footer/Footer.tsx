import Link from "next/link";
import "./Footer.css";

const footerData = {
  quickLinks: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Our Services" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/medicalDeviceServices", label: "Medical Device Service" },
    { href: "/diagnosticeKitsServices", label: "Diagnostic Kits" },
    { href: "/cosmeticsService", label: "Cosmetics Service" },
    { href: "/drugsService", label: "Drugs Service" },
    { href: "/", label: "Blood Banks Service" },
    { href: "/tradingLicenseServices", label: "Trading License Service" },
    { href: "/legalMetrologyServices", label: "Legal Metrology Service" },
    { href: "/customClearanceServices", label: "Custom Clearance Service" },
    { href: "/", label: "Sanitary Import Permit Service" },
  ],
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-container">
          {/* Brand Section */}
          <div className="footer-section">
            <h2 className="footer-title">Barr.</h2>
            <p>Your trusted partner for licensing & compliance services.</p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              {footerData.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="footer-section">
            <h3>Our Services</h3>
            <ul>
              {footerData.services.map((service, index) => (
                <li key={index}>
                  <Link href={service.href}>{service.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>
              Email: <a href="mailto:info@barr.com">info@barr.com</a>
            </p>
            <p>Phone: +91-9266665237</p>
            <p>Address: 123 Business Street, City, India</p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Barr. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
