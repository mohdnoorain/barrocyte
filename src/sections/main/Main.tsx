import "./Main.css";

export default function Main() {

    return (
        <main>
            <section>
                <div className="heroCon">
                    <div className="box1">
                        <h1
                            className="animate__animated animate__fadeIn"
                        >Regulatory <br /> Services.</h1>

                        <p className="animate__animated animate__fadeIn"
                        >
                            The journey from the birth of a concept to the approval of a product is a difficult one especially when faced with tough regulations.
                        </p>
                        <p>
                            Barrocyte Consultants offers a cost-effective and comprehensive method to make this journey smooth and easy.
                        </p>
                        {/* <p>
                            Our knowledge of the laws and regulations pertaining to the development, testing,  approval,  manufacturing, commercialization and post-marking surveillance of a product provides  you a good vantage point. Our focus is to acquire speedy approvals to enable clients achieve their objective of a timely and successful product launch.
                        </p> */}
                    </div>
                </div>
            </section>
        </main>
    );
}