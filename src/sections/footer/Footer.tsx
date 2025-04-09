import Link from "next/link";
import styles from "./Footer.module.css"; // Import module CSS

const footerData = {
  quickLinks: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
  ],
  services: [
    { href: "/medicalDeviceServices", label: "Medical Device Service" },
    { href: "/diagnosticKitsServices", label: "Diagnostic Kits" },
    { href: "/drugsService", label: "Drugs Service" },
    { href: "/legalMetrologyServices", label: "Legal Metrology Service" },
  ],
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContainer}>
          {/* Brand Section */}
          <div className={styles.footerSection}>
            <h2 className={styles.footerTitle}>Barr.</h2>
            <p>Your trusted partner for licensing & compliance services.</p>
          </div>

          {/* Quick Links */}
          <div className={styles.footerSection}>
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
          <div className={styles.footerSection}>
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
          <div className={styles.footerSection}>
            <h3>Contact Us</h3>
            <p>
              Email: <a href="mailto:info@barr.com">info@barr.com</a>
            </p>
            <p>Phone: +91-9266665237</p>
            <p>Address: 123 Business Street, City, India</p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Barr. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
