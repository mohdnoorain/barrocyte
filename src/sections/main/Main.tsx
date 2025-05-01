import styles from "./Main.module.css"; // Import module CSS

export default function Main() {
  const targetId = "contactForm";
  return (
    <main>
      <div className={styles.herosection}>
        <div className="container">
          <div className={styles.twoHalfs}>
            <div className={styles.firstHalf}>
              <div className={styles.heroCon}>
                <div className={styles.box1}>
                  <h1 className="animate__animated animate__bounce">
                    Regulatory Services.
                  </h1>

                  <p>
                    The journey from the birth of a concept to the approval of a
                    product is a difficult one especially when faced with tough
                    regulations.
                  </p>
                  <p>
                    Barrocyte Consultants offers a cost-effective and
                    comprehensive method to make this journey smooth and easy.
                  </p>
                </div>
              </div>
              <button
                className={styles.bookNowBtn}
                onClick={
                  targetId
                    ? () => {
                      const section = document.getElementById(targetId);
                      if (section) {
                        const yOffset = -100; // scroll up by 80px
                        const y =
                          section.getBoundingClientRect().top +
                          window.pageYOffset +
                          yOffset;
                        window.scrollTo({ top: y, behavior: "smooth" });
                      }
                    }
                    : undefined
                }
              >
                Enquire Now
              </button>
            </div>
            <div className={styles.secondHalf}></div>
          </div>
        </div>
      </div>
    </main>
  );
}
