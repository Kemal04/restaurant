import starIcon from "../../assets/icons/star.svg";
import card1 from "../../assets/about/1.jpg";
import card2 from "../../assets/about/2.jpg";
import card3 from "../../assets/about/3.jpg";
import card4 from "../../assets/about/4.jpg";
import card5 from "../../assets/about/5.jpg";
import card6 from "../../assets/about/6.jpg";
import card7 from "../../assets/about/7.jpg";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <>
            <div className="container-fluid px-0">
                <div className="about-bg-attachment d-flex justify-content-center align-items-center">
                    <div className="display-3 fw-semibold">Biz Barada</div>
                </div>
            </div>

            <div className="container my-5 py-5">
                <div className="row justify-content-center text-center">
                    <div className="col-xl-10 h5" style={{ lineHeight: "31px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="d-flex align-items-center">
                    <div className="horizontal-line"></div>
                    <img src={starIcon} alt="" className="mx-4" style={{ width: "1.5rem", height: "1.5rem" }} />
                    <div className="horizontal-line"></div>
                </div>
            </div>

            <div className="container my-5 py-5">
                <div className="row gx-5 align-items-center">
                    <div className="col-xl-6 mb-4 mb-xl-0">
                        <div className="row">
                            <div className="col-xl-6 col-6">
                                <img src={card1} alt="" className="img-fluid" style={{ height: "100%", width: "100%", objectFit: "cover" }} />
                            </div>
                            <div className="col-xl-6 col-6">
                                <img src={card2} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="fw-bold display-4 mb-4">Local Products</div>
                        <p className="fs-18 fw-semibold">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                            <br />
                            <br />
                            Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor.
                            <br />
                            <br />
                            Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mb-5 pb-5">
                <div className="row g-0">
                    <div className="col-xl-12 d-flex justify-content-center text-center mb-4">
                        <div className="w-xl-50">
                            <div className="display-4 fw-bold mb-4">The space</div>
                            <p className="fs-18 fw-semibold">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique.
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-12 mb-3 text-xl-end p-xl-0">
                        <img src={card3} alt="" className="mb-3 pb-3 border-secondary border-bottom about-img-tumbn" style={{ width: "300px", height: "220px", objectFit: "cover" }} />
                        <img src={card4} alt="" className="about-img-tumbn" style={{ width: "300px", height: "220px", objectFit: "cover" }} />
                    </div>
                    <div className="col-xl-6 col-12 mb-3 p-xl-0 d-flex justify-content-center">
                        <img src={card5} alt="" className="img-fluid border-secondary border p-3 w-100 mx-2" style={{ height: "456px" }} />
                    </div>
                    <div className="col-xl-3 col-12 mb-3 p-xl-0">
                        <img src={card6} alt="" className="mb-3 pb-3 border-secondary border-bottom about-img-tumbn" style={{ width: "300px", height: "220px", objectFit: "cover" }} />
                        <img src={card7} alt="" className="about-img-tumbn" style={{ width: "300px", height: "220px", objectFit: "cover" }} />
                    </div>
                </div>
            </div>

            <div className="container d-flex justify-content-center align-items-center border-bottom border-secondary pb-5">
                <Link to='/' className="border rounded-circle h3 text-decoration-none text-white fw-semibold d-flex align-items-center justify-content-center" style={{ width: "170px", height: "170px", backgroundColor: "rgba(255, 255, 255, .06)" }}>Menu</Link>
            </div>
        </>
    )
}

export default About