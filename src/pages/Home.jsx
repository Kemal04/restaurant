import { useState } from "react";
import card1 from "../assets/tamdyr-lezzeti/6.jpeg";
import card2 from "../assets/tamdyr-lezzeti/hotel.png";
import menuImg from "../assets/menu/menu-banner.jpg";

const Home = () => {

    const [basicActive, setBasicActive] = useState('tab1');

    const handleBasicClick = (value) => {
        if (value === basicActive) {
            return;
        }

        setBasicActive(value);
    };

    return (
        <>
            <div className="container mt-5 pt-5 " id="about">
                <div className="row align-items-center">
                    <div className="col-xl-6 position-relative text-center">
                        <img data-aos="fade-down" src={card1} alt="" className="about-img-1" />
                        <img data-aos="fade-right" src={card2} alt="" className="about-img-2" />
                    </div>
                    <div className="col-xl-6 mt-5 mt-xl-0">
                        <div data-aos="fade-right" className="ls-2 fs-12">Biz Barada</div>
                        <div data-aos="fade-up" className="h1 mt-3 mb-4">Hakyky Türk & <br /> Türkmen Aşhanasy</div>
                        <div data-aos="fade-right" className="ls-1 lh-lg mb-5">
                            Tamdyr tagamynda, adaty peçlerde, täze gök önümlerde we lezzetli işdäaçarlarda bişirilen etler bilen ýatdan çykmajak nahar iýip bilersiňiz. Menýumyza göz aýlanyňda, guzy tamdyrlama, manty, çorba we desertler ýaly dürli görnüşli tagamlary tapyp bilersiňiz.
                        </div>
                        <div data-aos="fade-up" className="signature text-warning fw-bold h1 ms-4">Tamdyr</div>
                        <div data-aos="fade-up" className="signature text-warning fw-bold h1 ms-5 ps-4" style={{ marginTop: "-15px" }}>Lezzeti</div>
                    </div>
                </div>
            </div>

            <div className="bg-attachmend">
                <div className="container d-flex justify-content-end align-items-center" style={{ height: "500px" }}>
                    <div data-aos="fade-up" className="bg-white text-center shadow w-xl-50 p-xl-5 p-3" style={{ borderRadius: "50px 0 0 50px" }}>
                        <div className="h4 mb-4">Tamdyr Lezzeti</div>
                        <div>Ilkinji restoranymyzyň üstünligi bilen joşýan hyjuwyňyz indi täze meýdançada «AWAZA» Milli syýahatçylyk zolagynda. Bu täze ýer diňe bir restoran däl, bu biziň tagallalarymyzyň we hyýalymyzyň anyk beýanydyr. Müşderilerimiz üçin diňe bir tagam duralgasy däl-de, ýatdan çykmajak ýatlamalary ýeri.</div>
                    </div>
                </div>
            </div>

            <div className="text-center pt-5 mt-5" id="menu">
                <div className="ls-2 fs-12 mb-4">LEZZETLI TAGAMLARYMYZ</div>
                <div className="h1 mb-5">Spesial Menýumuz</div>
            </div>

            <div className='container text-center'>
                <ul className="nav nav-pills mb-3 justify-content-center mt-4" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <div className={`btn btn-outline-warning d-flex flex-column align-items-center mx-xl-1 mx-1 mb-3 ${basicActive === 'tab1' && 'active'}`} onClick={() => handleBasicClick('tab1')} data-bs-toggle="pill" type="button" role="tab" aria-selected="true">
                            <div className='mt-2'>Çorba</div>
                        </div>
                    </li>
                    <li className="nav-item" role="presentation">
                        <div className={`btn btn-outline-warning d-flex flex-column align-items-center mx-xl-1 mx-1 mb-3 ${basicActive === 'tab2' && 'active'}`} onClick={() => handleBasicClick('tab2')} data-bs-toggle="pill" type="button" role="tab" aria-selected="false">
                            <div className='mt-2'>Ertirlik</div>
                        </div>
                    </li>
                    <li className="nav-item" role="presentation">
                        <div className={`btn btn-outline-warning d-flex flex-column align-items-center mx-xl-1 mx-1 mb-3 ${basicActive === 'tab3' && 'active'}`} onClick={() => handleBasicClick('tab3')} data-bs-toggle="pill" type="button" role="tab" aria-selected="false">
                            <div className='mt-2'>Mangal</div>
                        </div>
                    </li>
                    <li className="nav-item" role="presentation">
                        <div className={`btn btn-outline-warning d-flex flex-column align-items-center mx-xl-1 mx-1 mb-3 ${basicActive === 'tab4' && 'active'}`} onClick={() => handleBasicClick('tab4')} data-bs-toggle="pill" type="button" role="tab" aria-selected="false">
                            <div className='mt-2'>Işdä açarlar</div>
                        </div>
                    </li>
                    <li className="nav-item" role="presentation">
                        <div className={`btn btn-outline-warning d-flex flex-column align-items-center mx-xl-1 mx-1 mb-3 ${basicActive === 'tab5' && 'active'}`} onClick={() => handleBasicClick('tab5')} data-bs-toggle="pill" type="button" role="tab" aria-selected="false">
                            <div className='mt-2'>Garnirler</div>
                        </div>
                    </li>
                    <li className="nav-item" role="presentation">
                        <div className={`btn btn-outline-warning d-flex flex-column align-items-center mx-xl-1 mx-1 mb-3 ${basicActive === 'tab6' && 'active'}`} onClick={() => handleBasicClick('tab6')} data-bs-toggle="pill" type="button" role="tab" aria-selected="false">
                            <div className='mt-2'>Piwa üçin garbanmalar</div>
                        </div>
                    </li>
                    <li className="nav-item" role="presentation">
                        <div className={`btn btn-outline-warning d-flex flex-column align-items-center mx-xl-1 mx-1 mb-3 ${basicActive === 'tab7' && 'active'}`} onClick={() => handleBasicClick('tab7')} data-bs-toggle="pill" type="button" role="tab" aria-selected="false">
                            <div className='mt-2'>Garbanmalar</div>
                        </div>
                    </li>
                    <li className="nav-item" role="presentation">
                        <div className={`btn btn-outline-warning d-flex flex-column align-items-center mx-xl-1 mx-1 mb-3 ${basicActive === 'tab8' && 'active'}`} onClick={() => handleBasicClick('tab8')} data-bs-toggle="pill" type="button" role="tab" aria-selected="false">
                            <div className='mt-2'>Steýklar "josper"</div>
                        </div>
                    </li>
                    <li className="nav-item" role="presentation">
                        <div className={`btn btn-outline-warning d-flex flex-column align-items-center mx-xl-1 mx-1 mb-3 ${basicActive === 'tab9' && 'active'}`} onClick={() => handleBasicClick('tab9')} data-bs-toggle="pill" type="button" role="tab" aria-selected="false">
                            <div className='mt-2'>Gyzgyn naharlar</div>
                        </div>
                    </li>
                    <li className="nav-item" role="presentation">
                        <div className={`btn btn-outline-warning d-flex flex-column align-items-center mx-xl-1 mx-1 mb-3 ${basicActive === 'tab10' && 'active'}`} onClick={() => handleBasicClick('tab10')} data-bs-toggle="pill" type="button" role="tab" aria-selected="false">
                            <div className='mt-2'>Pide pizza burger</div>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-xl-4 text-end">
                        <img data-aos="fade-right" src={menuImg} alt="" className='img-fluid mb-xl-0 mb-5 shadow rounded-2 w-xl-90' />
                    </div>
                    <div className="col-xl-8">
                        <div className="tab-content pb-5" id="pills-tabContent">
                            <div className={`tab-pane fade ${basicActive === 'tab1' && 'show active'}`} role="tabpanel">
                                <div className='row'>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Un Aş</div>
                                            <div className='ms-5 fw-semibold text-warning'>45 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Ezogelin</div>
                                            <div className='ms-5 fw-semibold text-warning'>30 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Jüjeli unaş</div>
                                            <div className='ms-5 fw-semibold text-warning'>50 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Jüjeli çorba</div>
                                            <div className='ms-5 fw-semibold text-warning'>50 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Merjimek </div>
                                            <div className='ms-5 fw-semibold text-warning'>25 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Towuk krem çorbasy </div>
                                            <div className='ms-5 fw-semibold text-warning'>40 TMT</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`tab-pane fade ${basicActive === 'tab2' && 'show active'}`} role="tabpanel">
                                <div className='row'>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Gowurdakly ýumurtga</div>
                                            <div className='ms-5 fw-semibold text-warning'>55 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Grenki</div>
                                            <div className='ms-5 fw-semibold text-warning'>45 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Kömelekli we syrly omlet</div>
                                            <div className='ms-5 fw-semibold text-warning'>45 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Menemen syr bilen</div>
                                            <div className='ms-5 fw-semibold text-warning'>45 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Omlet klassik</div>
                                            <div className='ms-5 fw-semibold text-warning'>30 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Süýtli tüwi</div>
                                            <div className='ms-5 fw-semibold text-warning'>36 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Tamdyr lezzeti ertirlik</div>
                                            <div className='ms-5 fw-semibold text-warning'>145 TMT</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`tab-pane fade ${basicActive === 'tab3' && 'show active'}`} role="tabpanel">
                                <div className='row'>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Bagyr iç ýagda</div>
                                            <div className='ms-5 fw-semibold text-warning'>40 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Çörek mangalda</div>
                                            <div className='ms-5 fw-semibold text-warning'>25 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Gök önümler mangalda</div>
                                            <div className='ms-5 fw-semibold text-warning'>50 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Göle Lüle Kebap</div>
                                            <div className='ms-5 fw-semibold text-warning'>45 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Goýun Gapyrga</div>
                                            <div className='ms-5 fw-semibold text-warning'>60 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Goýun Kebap</div>
                                            <div className='ms-5 fw-semibold text-warning'>50 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Kartoşka</div>
                                            <div className='ms-5 fw-semibold text-warning'>10 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Kefal balyk mangalda</div>
                                            <div className='ms-5 fw-semibold text-warning'>100 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Kömelek mangalda</div>
                                            <div className='ms-5 fw-semibold text-warning'>65 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Kotlet göle eti mangalda</div>
                                            <div className='ms-5 fw-semibold text-warning'>60 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Kotlet towuk etinden</div>
                                            <div className='ms-5 fw-semibold text-warning'>60 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Ostrina na mangale</div>
                                            <div className='ms-5 fw-semibold text-warning'>350 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Perzola mangalda</div>
                                            <div className='ms-5 fw-semibold text-warning'>85 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Pomidor</div>
                                            <div className='ms-5 fw-semibold text-warning'>10 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Tabaka</div>
                                            <div className='ms-5 fw-semibold text-warning'>150 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Towuk Ganat</div>
                                            <div className='ms-5 fw-semibold text-warning'>75 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Towuk Lüle</div>
                                            <div className='ms-5 fw-semibold text-warning'>45 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Towuk Şaşlyk</div>
                                            <div className='ms-5 fw-semibold text-warning'>50 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 col-12 lh-sm'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Tunçede Çay</div>
                                            <div className='ms-5 fw-semibold text-warning'>50 TMT</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`tab-pane fade ${basicActive === 'tab4' && 'show active'}`} role="tabpanel">
                                <div className='row'>
                                    <div className='col-xl-6 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Akroşka</div>
                                            <div className='ms-5 fw-semibold text-warning'>40 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Ananasowy Salat</div>
                                            <div className='ms-5 fw-semibold text-warning'>65 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Çopan Salat</div>
                                            <div className='ms-5 fw-semibold text-warning'>45 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Dymok</div>
                                            <div className='ms-5 fw-semibold text-warning'>50 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Gowurdagi salady</div>
                                            <div className='ms-5 fw-semibold text-warning'>45 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Göle etinden ýyly salat</div>
                                            <div className='ms-5 fw-semibold text-warning'>95 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Gowurlan badamjanly salat</div>
                                            <div className='ms-5 fw-semibold text-warning'>95 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Grek Salady</div>
                                            <div className='ms-5 fw-semibold text-warning'>55 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Kakadylan pomidorly</div>
                                            <div className='ms-5 fw-semibold text-warning'>60 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Nar Salady</div>
                                            <div className='ms-5 fw-semibold text-warning'>50 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Taýskiy</div>
                                            <div className='ms-5 fw-semibold text-warning'>55 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Sezar Lezzeti</div>
                                            <div className='ms-5 fw-semibold text-warning'>65 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Süzme Çal</div>
                                            <div className='ms-5 fw-semibold text-warning'>50 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Towuk we ananasly salat</div>
                                            <div className='ms-5 fw-semibold text-warning'>85 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Towukly ýyly salat</div>
                                            <div className='ms-5 fw-semibold text-warning'>80 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 lh-sm'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Ýaz Salady</div>
                                            <div className='ms-5 fw-semibold text-warning'>55 TMT</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`tab-pane fade ${basicActive === 'tab5' && 'show active'}`} role="tabpanel">
                                <div className='row'>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Fri</div>
                                            <div className='ms-5 fw-semibold text-warning'>30 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Kartoşka öý usulda</div>
                                            <div className='ms-5 fw-semibold text-warning'>35 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Naggetsy</div>
                                            <div className='ms-5 fw-semibold text-warning'>60 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Püre</div>
                                            <div className='ms-5 fw-semibold text-warning'>30 TMT</div>
                                        </div>
                                    </div>

                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Ris</div>
                                            <div className='ms-5 fw-semibold text-warning'>30 TMT</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`tab-pane fade ${basicActive === 'tab6' && 'show active'}`} role="tabpanel">
                                <div className='row'>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Arahis</div>
                                            <div className='ms-5 fw-semibold text-warning'>25 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Basturma</div>
                                            <div className='ms-5 fw-semibold text-warning'>50 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Çipsi</div>
                                            <div className='ms-5 fw-semibold text-warning'>25 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Gurt</div>
                                            <div className='ms-5 fw-semibold text-warning'>20 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Peýnir kosiçka</div>
                                            <div className='ms-5 fw-semibold text-warning'>50 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Pisse</div>
                                            <div className='ms-5 fw-semibold text-warning'>40 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Piwo seti</div>
                                            <div className='ms-5 fw-semibold text-warning'>250 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Sarymsakly grenki</div>
                                            <div className='ms-5 fw-semibold text-warning'>45 TMT</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`tab-pane fade ${basicActive === 'tab7' && 'show active'}`} role="tabpanel">
                                <div className='row'>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Fruktowy assorti</div>
                                            <div className='ms-5 fw-semibold text-warning'>140 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Gök önüm garyndysy</div>
                                            <div className='ms-5 fw-semibold text-warning'>65 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Kapçonoe assorti</div>
                                            <div className='ms-5 fw-semibold text-warning'>180 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Limon zeytunlar</div>
                                            <div className='ms-5 fw-semibold text-warning'>45 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Peynir we et assorti</div>
                                            <div className='ms-5 fw-semibold text-warning'>300 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Salýonny assorti</div>
                                            <div className='ms-5 fw-semibold text-warning'>85 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Sarymsakly süzma</div>
                                            <div className='ms-5 fw-semibold text-warning'>35 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Selýodka bilen ýeralma</div>
                                            <div className='ms-5 fw-semibold text-warning'>110 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Vodka üçin garbanma</div>
                                            <div className='ms-5 fw-semibold text-warning'>150 TMT</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`tab-pane fade ${basicActive === 'tab8' && 'show active'}`} role="tabpanel">
                                <div className='row'>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Bon steak</div>
                                            <div className='ms-5 fw-semibold text-warning'>220 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Dallas steak</div>
                                            <div className='ms-5 fw-semibold text-warning'>195 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Gassap kotlet</div>
                                            <div className='ms-5 fw-semibold text-warning'>95 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Goýun t-bone</div>
                                            <div className='ms-5 fw-semibold text-warning'>195 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Goýunyň boýuny</div>
                                            <div className='ms-5 fw-semibold text-warning'>350 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Goýunyň goly</div>
                                            <div className='ms-5 fw-semibold text-warning'>450 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Guzy filesi</div>
                                            <div className='ms-5 fw-semibold text-warning'>115 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Guzy gapyrga</div>
                                            <div className='ms-5 fw-semibold text-warning'>95 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Guzy gapyrgalary</div>
                                            <div className='ms-5 fw-semibold text-warning'>320 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Nýu Ýork steýk</div>
                                            <div className='ms-5 fw-semibold text-warning'>190 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Peýnirli kotletlar</div>
                                            <div className='ms-5 fw-semibold text-warning'>100 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Ribaý steýk</div>
                                            <div className='ms-5 fw-semibold text-warning'>220 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Satabrian steýk</div>
                                            <div className='ms-5 fw-semibold text-warning'>280 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>T-bone steýk</div>
                                            <div className='ms-5 fw-semibold text-warning'>180 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Tehas göle gapyrgasy</div>
                                            <div className='ms-5 fw-semibold text-warning'>140 TMT</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`tab-pane fade ${basicActive === 'tab9' && 'show active'}`} role="tabpanel">
                                <div className='row'>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Etli sote</div>
                                            <div className='ms-5 fw-semibold text-warning'>95 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Jüýje batyrma</div>
                                            <div className='ms-5 fw-semibold text-warning'>82 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Jüýje mesgede</div>
                                            <div className='ms-5 fw-semibold text-warning'>80 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Kakmaç batyrma</div>
                                            <div className='ms-5 fw-semibold text-warning'>97 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Kakmaç mesgede</div>
                                            <div className='ms-5 fw-semibold text-warning'>97 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Osetrina gowurlan</div>
                                            <div className='ms-5 fw-semibold text-warning'>350 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Towuk sote</div>
                                            <div className='ms-5 fw-semibold text-warning'>80 TMT</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`tab-pane fade ${basicActive === 'tab10' && 'show active'}`} role="tabpanel">
                                <div className='row'>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Burger</div>
                                            <div className='ms-5 fw-semibold text-warning'>55 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Lahmajun</div>
                                            <div className='ms-5 fw-semibold text-warning'>30 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Pide assorti</div>
                                            <div className='ms-5 fw-semibold text-warning'>70 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Pide etli</div>
                                            <div className='ms-5 fw-semibold text-warning'>70 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Pizza assorti</div>
                                            <div className='ms-5 fw-semibold text-warning'>90 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Pizza margarita</div>
                                            <div className='ms-5 fw-semibold text-warning'>65 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Pizza pepperoni</div>
                                            <div className='ms-5 fw-semibold text-warning'>70 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Pizza towukly</div>
                                            <div className='ms-5 fw-semibold text-warning'>80 TMT</div>
                                        </div>
                                    </div>
                                    <div className='col-xl-6 col-12 lh-sm mb-4'>
                                        <div className='d-flex align-items-center justify-content-between border-bottom border-secondary py-2'>
                                            <div className='me-5'>Sebet çörek</div>
                                            <div className='ms-5 fw-semibold text-warning'>15 TMT</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <div className="bg-attachmend-2 d-flex align-items-center justify-content-center" id="contact">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-12 bg-warning p-5">
                            <div data-aos="fade-down" className="text-center h3">Habarlaşmak</div>
                            <div className="text-center h5 mt-4 fw-semibold">Telefon Belgilerimiz</div>
                            <div data-aos="fade-right">72-64-56 , 72-64-58</div>
                            <div className="text-center h5 mt-4 fw-semibold">Salgymyz</div>
                            <div data-aos="fade-right">Awaza, Bagtyýar otel</div>
                            <div className="text-center h5 mt-4 fw-semibold">Iş wagtymyz</div>
                            <div data-aos="fade-right">09:00-dan, 23:00 çenli</div>
                            <div className="text-center h5 mt-4 fw-semibold">E-mail salgymyz</div>
                            <div data-aos="fade-right">tamdyrlezzeti@gmail.com</div>
                        </div>
                        <div className="col-xl-7 col-12 bg-white p-xl-4 p-0">
                            <iframe data-aos="zoom-in" title='0' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6841.338342750139!2d52.82794118958942!3d39.97464214955486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x402c199dd1789649%3A0xf1c31c462fdf1760!2sBagtyyar%20Hotel!5e1!3m2!1sen!2s!4v1717825594342!5m2!1sen!2s" style={{ width: "100%", height: "400px" }} allowFullScreen loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home