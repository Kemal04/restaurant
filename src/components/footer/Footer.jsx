import { Link } from "react-router-dom"
import starIcon from "../../assets/icons/star.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    const date = new Date().getFullYear()
    return (
        <>
            <div className="container mt-5 border-top pt-5">
                <div className="row justify-content-center">
                    <div className="col-xl-12 text-center">
                        <div className="display-5">Tamdyr Lezzeti</div>
                    </div>
                    <div className="col-xl-5 d-flex flex-column mt-5">
                        <Link to='/restaurant/' className="text-decoration-none mb-4 h5 fw-normal"><FontAwesomeIcon icon={faEnvelope}/> tamdyrlezzeti@gmail.com</Link>
                        <Link to='/restaurant/' className="text-decoration-none mb-4 h5 fw-normal"><FontAwesomeIcon icon={faPhoneAlt}/> 72-64-56 | 72-64-58</Link>
                        <Link to='/restaurant/' className="text-decoration-none mb-4 h5 fw-normal"><FontAwesomeIcon icon={faMapMarkerAlt}/> Awaza, Bagtyýar otel</Link>
                    </div>
                    <div className="col-xl-3 d-flex flex-column mt-5">
                        <Link to='/restaurant/' className="text-decoration-none mb-4 h5 fw-normal">
                            <img src={starIcon} alt="" className="img-fluid me-2" />
                            Duşenbe-Penşenbe: 9:00-23:00
                        </Link>
                        <Link to='/restaurant/' className="text-decoration-none mb-4 h5 fw-normal">
                            <img src={starIcon} alt="" className="img-fluid me-2" />
                            Anna-Şenbe: 9:00-23:00
                        </Link>
                        <Link to='/restaurant/' className="text-decoration-none mb-4 h5 fw-normal">
                            <img src={starIcon} alt="" className="img-fluid me-2" />
                            Ýekşenbe: 9:00-23:00
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container border-top py-4 mt-4">
                <div className="row justify-content-center text-center">
                    <div className="col-xl-12">
                        © Ähli hukuklary goragly (2023 - {date} )
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer