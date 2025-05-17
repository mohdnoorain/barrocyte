import Link from "next/link";
import styles from "./Footer.module.css"; // Import module CSS

const footerData = {
  quickLinks: [{ href: "/", label: "Home" }],
  services: [
    { href: "/medical-device-services.html", label: "Medical Device Service" },
    { href: "/diagnostic-kits-services.html", label: "Diagnostic Kits" },
    { href: "/drugs-service.html", label: "Drugs Service" },
    { href: "/legal-metrology-services.html", label: "Legal Metrology Service" },
  ],
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContainer}>
          {/* Brand Section */}
          <div className={styles.footerSection}>
            <Link href={"/"} className={styles.footerTitleSection}>
              <img
                src="/logo-barraoctye.png"
                alt="logo"
                className={styles.companylogo}
              />
              <h2 className={styles.footerTitle}>Barrocyte</h2>
            </Link>

            <p>Your trusted partner for licensing & compliance services.</p>
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
            <ul>
              <li>
                Email : &nbsp;
                <a href="mailto:barrocyte@gmail.com">barrocyte@gmail.com</a>
              </li>
              <li>
                Phone : &nbsp;
                <a href="tel:+91 7838883608">+91 7838883608</a>
              </li>
              <li>
                Address : <br /> Office No.105, First Floor,
                <br /> CSC Market, Sukhdev Vihar,
                <br />
                New Delhi- 110025
              </li>
            </ul>
          </div>
          {/* Map Location */}
          <div className={styles.footerSection}>
            <h3>Our Location</h3>
            <div className={styles.mapContainer}>
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14017.003255865014!2d77.2660722!3d28.5624284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3a33dbddf13%3A0x30cfbbc385740c4c!2sSukhdev%20Vihar%2C%20New%20Delhi%2C%20Delhi%20110025!5e0!3m2!1sen!2sin!4v1714043235003!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className={styles.footerBottom}>
          <p>
            &copy; {new Date().getFullYear()} Barrocyte. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
