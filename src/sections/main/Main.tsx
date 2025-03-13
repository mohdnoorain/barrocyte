import RegulatorySolutions from "@/components/RegulatorySolutions/RegulatorySolutions";
import "./Main.css";

export default function Main() {
  return (
    <main>
      <div className="herosection">
        <div className="container">
          <div className="twoHalfs">
            <div className="firstHalf">
              <div className="heroCon">
                <div className="box1">
                  <h1 className="animate__animated animate__bounce">
                    Regulatory Services.
                  </h1>

                  <p >
                    The journey from the birth of a concept to the approval of a
                    product is a difficult one especially when faced with tough
                    regulations.
                  </p>
                  <p>
                    Barrocyte Consultants offers a cost-effective and
                    comprehensive method to make this journey smooth and easy.
                  </p>
                  {/* <p>
                            Our knowledge of the laws and regulations pertaining to the development, testing,  approval,  manufacturing, commercialization and post-marking surveillance of a product provides  you a good vantage point. Our focus is to acquire speedy approvals to enable clients achieve their objective of a timely and successful product launch.
                        </p> */}
                </div>
              </div>
              <button className="book-now-btn">Book Now</button>

            </div>
            <div className="secondHalf">
             
            </div>
          </div>
        </div>
      </div>
      <RegulatorySolutions/>
      
    </main>
  );
}