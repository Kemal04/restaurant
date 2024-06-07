import { useState } from "react";
import card1 from "../assets/tamdyr-lezzeti/6.jpeg";
import card2 from "../assets/tamdyr-lezzeti/hotel.png";
import saladImg from "../assets/menu/salat.jpg";
import corbaImg from "../assets/menu/corba.jpg";
import pizzaImg from "../assets/menu/pizza.jpg";
import mangalImg from "../assets/menu/mangal.jpg";
import mangalWhiteIcon from "../assets/icons/mangalWhite.svg";
import saladWhiteIcon from "../assets/icons/saladWhite.svg";
import corbaWhiteIcon from "../assets/icons/corbaWhite.svg";
import burgerWhiteIcon from "../assets/icons/burgerWhite.svg";

const Home = () => {

    const [basicActive, setBasicActive] = useState('tab4');

    const handleBasicClick = (value) => {
        if (value === basicActive) {
            return;
        }

        setBasicActive(value);
    };

    return (
        <>
            <div className="container mt-5 pt-5 ">
                <div className="row align-items-center">
                    <div className="col-xl-6 position-relative text-center">
                        <img src={card1} alt="" className="about-img-1" />
                        <img src={card2} alt="" className="about-img-2" />
                    </div>
                    <div className="col-xl-6 mt-5 mt-xl-0">
                        <div className="ls-2 fs-12">FRESH FOOD EVERY DAY</div>
                        <div className="h1 mt-3 mb-4">The Best Sea Food City Restaurant</div>
                        <div className="ls-1 lh-lg mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et metus augue. Mauris ut libero eget erat scelerisque vehicula. Phasellus nec blandit metus. Nulla quis molestie risus. Nunc non auctor dui. In consequat augue eu eros luctus cursus. Nullam commodo nunc vel purus rhoncus ultrices. Suspendisse vitae neque.
                        </div>
                        <div className="signature text-warning fw-bold h1 ms-4">Tamdyr</div>
                        <div className="signature text-warning fw-bold h1 ms-5 ps-4" style={{ marginTop: "-15px" }}>Lezzeti</div>
                    </div>
                </div>
            </div>

            <div className="bg-attachmend">
                <div className="container d-flex justify-content-end align-items-center" style={{ height: "500px" }}>
                    <div className="bg-white text-center shadow" style={{ padding: "50px 100px" }}>
                        <div className="h5">ORGANIC FISH</div>
                        <div className="display-1 my-4">20%</div>
                        <div>CERTIFIED ORIGIN OF PRODUCTS</div>
                    </div>
                </div>
            </div>

            <div className="text-center pt-5 mt-5">
                <div className="ls-2 fs-12 mb-4">KITCHEN ALWAYS OPEN</div>
                <div className="h1 mb-5">Hot & Tasty Dishes</div>
            </div>

            <div className='container text-center'>
                <ul className="nav nav-pills mb-3 justify-content-center mt-4" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <div className={`btn btn-warning d-flex flex-column align-items-center mx-xl-4 mx-1 mb-3 ${basicActive === 'tab4' && 'active'}`} style={{ width: "150px", height: "120px", cursor: "pointer" }} onClick={() => handleBasicClick('tab4')} data-bs-toggle="pill" type="button" role="tab" aria-selected="true">
                            <img src={mangalWhiteIcon} alt="" style={{ width: "100px", height: "80px" }} />
                            <div className='mt-2 text-white'>Mangal</div>
                        </div>
                    </li>
                    <li className="nav-item" role="presentation">
                        <div className={`btn btn-warning d-flex flex-column align-items-center mx-xl-4 mx-1 mb-3 ${basicActive === 'tab1' && 'active'}`} style={{ width: "150px", height: "120px", cursor: "pointer" }} onClick={() => handleBasicClick('tab1')} data-bs-toggle="pill" type="button" role="tab" aria-selected="false">
                            <img src={saladWhiteIcon} alt="" style={{ width: "100px", height: "80px" }} />
                            <div className='mt-2 text-white'>Işdä açarlar</div>
                        </div>
                    </li>
                    <li className="nav-item" role="presentation">
                        <div className={`btn btn-warning d-flex flex-column align-items-center mx-xl-4 mx-1 mb-3 ${basicActive === 'tab3' && 'active'}`} style={{ width: "150px", height: "120px", cursor: "pointer" }} onClick={() => handleBasicClick('tab3')} data-bs-toggle="pill" type="button" role="tab" aria-selected="false">
                            <img src={corbaWhiteIcon} alt="" style={{ width: "100px", height: "80px" }} />
                            <div className='mt-2 text-white'>Çorba</div>
                        </div>
                    </li>
                    <li className="nav-item" role="presentation">
                        <div className={`btn btn-warning d-flex flex-column align-items-center mx-xl-4 mx-1 mb-3 ${basicActive === 'tab2' && 'active'}`} style={{ width: "150px", height: "120px", cursor: "pointer" }} onClick={() => handleBasicClick('tab2')} data-bs-toggle="pill" type="button" role="tab" aria-selected="false">
                            <img src={burgerWhiteIcon} alt="" style={{ width: "100px", height: "80px" }} />
                            <div className='mt-2 text-white'>Pizza & burger</div>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="container">
                <div className="tab-content pb-5" id="pills-tabContent">
                    <div className={`tab-pane fade ${basicActive === 'tab1' && 'show active'}`} role="tabpanel">
                        <div className='row mt-5 align-items-center'>
                            <div className='col-xl-6 col-12 text-end'>
                                <img src={saladImg} alt="" className='img-fluid w-xl-75 mb-xl-0 mb-5' style={{ height: "640px", objectFit: "cover" }} />
                            </div>
                            <div className='col-xl-6 col-12 d-flex flex-column align-items-start'>
                                <div className="w-xl-60">

                                    <div className='lh-sm mb-5'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Çopan Salat</div>
                                            <div className='ms-5 fw-semibold text-warning'>45 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-5'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Grek Salat</div>
                                            <div className='ms-5 fw-semibold text-warning'>55 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-5'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Gyzgyn Etli Salat</div>
                                            <div className='ms-5 fw-semibold text-warning'>87 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-5'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Gyzgyn Towuk Salat</div>
                                            <div className='ms-5 fw-semibold text-warning'>80 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-5'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Taýskiy Salat</div>
                                            <div className='ms-5 fw-semibold text-warning'>55 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-5'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Sezar Lezzeti</div>
                                            <div className='ms-5 fw-semibold text-warning'>65 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-5'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Süzme Çal Grafin</div>
                                            <div className='ms-5 fw-semibold text-warning'>50 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Gök Önüm Garyndysy</div>
                                            <div className='ms-5 fw-semibold text-warning'>65 TMT</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`tab-pane fade ${basicActive === 'tab2' && 'show active'}`} role="tabpanel">
                        <div className='row mt-5 align-items-center'>
                            <div className='col-xl-6 col-12 d-flex flex-column align-items-start order-1'>
                                <div className="w-xl-60">

                                    <div className='lh-sm mb-5'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Pizza Assorti</div>
                                            <div className='ms-5 fw-semibold text-warning'>90 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-5'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Pizza Towukly</div>
                                            <div className='ms-5 fw-semibold text-warning'>80 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-5'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Pizza Pepperoni</div>
                                            <div className='ms-5 fw-semibold text-warning'>70 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-5'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Pizza Margarita</div>
                                            <div className='ms-5 fw-semibold text-warning'>65 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-5'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Pide Etli</div>
                                            <div className='ms-5 fw-semibold text-warning'>70 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-5'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Lahmajun</div>
                                            <div className='ms-5 fw-semibold text-warning'>30 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-5'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Çörek Sebetde</div>
                                            <div className='ms-5 fw-semibold text-warning'>15 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Burger</div>
                                            <div className='ms-5 fw-semibold text-warning'>55 TMT</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='col-xl-6 col-12 order-0 text-end'>
                                <img src={pizzaImg} alt="" className='img-fluid w-xl-75 mb-xl-0 mb-5' style={{ height: "640px", objectFit: "cover" }} />
                            </div>
                        </div>
                    </div>
                    <div className={`tab-pane fade ${basicActive === 'tab3' && 'show active'}`} role="tabpanel">
                        <div className='row mt-5 align-items-center'>
                            <div className='col-xl-6 col-12 text-end'>
                                <img src={corbaImg} alt="" className='img-fluid w-xl-75 mb-xl-0 mb-5' style={{ height: "640px", objectFit: "cover" }} />
                            </div>
                            <div className='col-xl-6 col-12 d-flex flex-column align-items-start'>
                                <div className="w-xl-60">

                                    <div className='lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Un Aş</div>
                                            <div className='ms-5 fw-semibold text-warning'>45 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Jüjeli unaş</div>
                                            <div className='ms-5 fw-semibold text-warning'>50 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Ezogelin</div>
                                            <div className='ms-5 fw-semibold text-warning'>30 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Merjimek </div>
                                            <div className='ms-5 fw-semibold text-warning'>25 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Sote Etli</div>
                                            <div className='ms-5 fw-semibold text-warning'>75 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Towuk Sote</div>
                                            <div className='ms-5 fw-semibold text-warning'>73 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Jüje Mesgede</div>
                                            <div className='ms-5 fw-semibold text-warning'>80 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Jüje Batyrma</div>
                                            <div className='ms-5 fw-semibold text-warning'>82 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Kakmaç Mesgede</div>
                                            <div className='ms-5 fw-semibold text-warning'>80 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Kakmaç Batyrma</div>
                                            <div className='ms-5 fw-semibold text-warning'>83 TMT</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`tab-pane fade ${basicActive === 'tab4' && 'show active'}`} role="tabpanel">
                        <div className='row mt-5 align-items-center'>
                            <div className='col-xl-6 col-12 d-flex flex-column align-items-start order-1'>
                                <div className="w-xl-60">

                                    <div className='lh-sm mb-5'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Göle Lüle Kebap</div>
                                            <div className='ms-5 fw-semibold text-warning'>45 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-5'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Goýun Gapyrga</div>
                                            <div className='ms-5 fw-semibold text-warning'>55 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-5'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Goýun Kebap</div>
                                            <div className='ms-5 fw-semibold text-warning'>45 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-5'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Towuk Şaşlyk</div>
                                            <div className='ms-5 fw-semibold text-warning'>50 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm mb-5'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Towuk Lüle</div>
                                            <div className='ms-5 fw-semibold text-warning'>45 TMT</div>
                                        </div>
                                    </div>

                                    <div className='lh-sm'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Tunçede Çay</div>
                                            <div className='ms-5 fw-semibold text-warning'>50 TMT</div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='col-xl-6 col-12 order-0 text-end'>
                                <img src={mangalImg} alt="" className='img-fluid w-xl-75 mb-xl-0 mb-5' style={{ height: "640px", objectFit: "cover" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Home