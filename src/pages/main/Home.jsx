import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';
import bannerImg from "../../assets/banners/1.jpg";
import img1 from "../../assets/cards/1.png";
import img2 from "../../assets/cards/2.jpg";
import img3 from "../../assets/cards/3.jpg";
import img4 from "../../assets/cards/4.jpg";
import img5 from "../../assets/cards/5.jpg";
import img6 from "../../assets/cards/6.jpg";
import img7 from "../../assets/cards/7.jpg";
import img8 from "../../assets/cards/8.jpg";
import img9 from "../../assets/cards/9.png";
import img11 from "../../assets/cards/11.png";
import img12 from "../../assets/cards/12.png";
import img13 from "../../assets/cards/13.png";
import img14 from "../../assets/cards/14.png";
import img15 from "../../assets/cards/15.png";
import { useState } from 'react';

const Home = () => {

    const options = {
        type: 'fade',
        rewind: true,
        perPage: 1,
        perMove: 1,
        pagination: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1,
        speed: 1000,
    };

    const [basicActive, setBasicActive] = useState('tab1');

    const handleBasicClick = (value) => {
        if (value === basicActive) {
            return;
        }

        setBasicActive(value);
    };

    return (
        <>
            <div className='container-fluid px-0'>
                <Splide options={options} hasTrack={false}>
                    <SplideTrack>
                        <SplideSlide>
                            <div className='d-flex align-items-center text-white' style={{ background: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${bannerImg})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", height: "100vh", backgroundSize: "cover" }}>
                                <div className='container'>
                                    <div className='text-warning fst-italic h5 fw-normal'>
                                        GET 35% DISCOUNT
                                    </div>
                                    <div className='display-4 fw-semibold mb-5 mt-4'>
                                        Delicious & Mouth <br /> Watering Test
                                    </div>
                                    <div className='fw-semibold'>
                                        Best food made by our <span className='text-warning'>Passionate Chefs</span>
                                    </div>
                                    <Link to='/' className='btn btn-outline-light mt-4 px-4 rounded-0'>Book a Table</Link>
                                </div>
                            </div>
                        </SplideSlide>
                    </SplideTrack>
                </Splide>
            </div>

            <div className='bg-img-primary'>
                <div className='container py-5'>
                    <div className='row align-items-center'>
                        <div className='col-xl-6 text-center text-lg-end'>
                            <img src={img1} alt="" className='img-fluid me-lg-4 me-0' />
                        </div>
                        <div className='col-xl-6 text-white text-center text-lg-start mt-lg-0 mt-4'>
                            <div className='ms-4'>
                                <div className='text-warning mb-3 fst-italic'>FRESH & TASTY FOOD</div>
                                <div className='h3 mb-4'>A Sophisticated and Traditional Cuisine</div>
                                <div className='small fw-semibold mb-3'>Rosoi is one of the most popular Restaurants with unique & special menu made by our passionate chefs with love and quality with can impress you</div>
                                <div className='fw-semibold'>Call for Reservation <span className='text-warning'>+01234 567 891</span></div>
                                <Link to='/' className='btn btn-outline-light mt-5 py-2 px-4 rounded-0'>View full Menu</Link>
                            </div>
                        </div>
                    </div>

                    <div className='row my-5 pt-5 g-0 justify-content-center'>
                        <div className='col-xl-6 col-12 text-center text-lg-end'>
                            <img src={img2} alt="" className='img-fluid me-lg-3 me-0 img-hover' style={{ width: "70%" }} />
                        </div>
                        <div className='col-xl-6 col-12 text-center text-lg-start'>
                            <img src={img3} alt="" className='img-fluid ms-lg-3 ms-0 img-hover mt-4' style={{ width: "70%" }} />
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-img-secondary'>
                <div className='container py-5'>
                    <div className='text-center text-warning fst-italic'>TEST A LITTLE BIT</div>
                    <div className='text-center text-white h2 mt-3 mb-5'>Our Special Menu</div>

                    <ul className="nav nav-pills mb-3 justify-content-center mt-4" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className={`btn btn-outline-light rounded-0 mx-2 px-2 ${basicActive === 'tab1' && 'active'}`} onClick={() => handleBasicClick('tab1')} data-bs-toggle="pill" type="button" role="tab" aria-selected="true">Breakfast</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className={`btn btn-outline-light rounded-0 mx-2 px-2 ${basicActive === 'tab2' && 'active'}`} onClick={() => handleBasicClick('tab2')} data-bs-toggle="pill" type="button" role="tab" aria-selected="false">Brunch</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className={`btn btn-outline-light rounded-0 mx-2 px-2 ${basicActive === 'tab3' && 'active'}`} onClick={() => handleBasicClick('tab3')} data-bs-toggle="pill" type="button" role="tab" aria-selected="false">Lunch</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className={`btn btn-outline-light rounded-0 mx-2 px-2 ${basicActive === 'tab4' && 'active'}`} onClick={() => handleBasicClick('tab4')} data-bs-toggle="pill" type="button" role="tab" aria-selected="false">Dinner</button>
                        </li>
                    </ul>

                    <div className="tab-content pb-5" id="pills-tabContent">
                        <div className={`tab-pane fade  text-white ${basicActive === 'tab1' && 'show active'}`} role="tabpanel">
                            <div className='row mt-5'>
                                <div className='col-xl-6 d-flex flex-column align-items-end'>

                                    <div className='w-60 me-5 lh-sm mb-5'>
                                        <div className='d-flex align-items-center'>
                                            <div className='h5'>Grill Salmon</div>
                                            <div className='bg-orange fw-semibold me-3 ms-2' style={{ fontSize: "10px", padding: "2px 7px" }}>RECOMMENDED</div>
                                            <div className='menu-border'></div>
                                            <div className='ms-4 fw-semibold'>$27.85</div>
                                        </div>
                                        <div className='small' style={{ color: "#d6d6d6" }}>Soft and juice, with garlic & ginger</div>
                                    </div>

                                    <div className='w-60 me-5 lh-sm mb-5'>
                                        <div className='d-flex align-items-center'>
                                            <div className='h5'>Grill Salmon</div>
                                            <div className='bg-orange fw-semibold me-3 ms-2' style={{ fontSize: "10px", padding: "2px 7px" }}>RECOMMENDED</div>
                                            <div className='menu-border'></div>
                                            <div className='ms-4 fw-semibold'>$27.85</div>
                                        </div>
                                        <div className='small' style={{ color: "#d6d6d6" }}>Soft and juice, with garlic & ginger</div>
                                    </div>

                                    <div className='w-60 me-5 lh-sm mb-5'>
                                        <div className='d-flex align-items-center'>
                                            <div className='h5'>Grill Salmon</div>
                                            <div className='bg-orange fw-semibold me-3 ms-2' style={{ fontSize: "10px", padding: "2px 7px" }}>RECOMMENDED</div>
                                            <div className='menu-border'></div>
                                            <div className='ms-4 fw-semibold'>$27.85</div>
                                        </div>
                                        <div className='small' style={{ color: "#d6d6d6" }}>Soft and juice, with garlic & ginger</div>
                                    </div>

                                    <div className='w-60 me-5 lh-sm mb-5'>
                                        <div className='d-flex align-items-center'>
                                            <div className='h5'>Grill Salmon</div>
                                            <div className='bg-orange fw-semibold me-3 ms-2' style={{ fontSize: "10px", padding: "2px 7px" }}>RECOMMENDED</div>
                                            <div className='menu-border'></div>
                                            <div className='ms-4 fw-semibold'>$27.85</div>
                                        </div>
                                        <div className='small' style={{ color: "#d6d6d6" }}>Soft and juice, with garlic & ginger</div>
                                    </div>

                                    <div className='w-60 me-5 lh-sm mb-5'>
                                        <div className='d-flex align-items-center'>
                                            <div className='h5'>Grill Salmon</div>
                                            <div className='bg-orange fw-semibold me-3 ms-2' style={{ fontSize: "10px", padding: "2px 7px" }}>RECOMMENDED</div>
                                            <div className='menu-border'></div>
                                            <div className='ms-4 fw-semibold'>$27.85</div>
                                        </div>
                                        <div className='small' style={{ color: "#d6d6d6" }}>Soft and juice, with garlic & ginger</div>
                                    </div>

                                    <div className='w-60 me-5 lh-sm mb-5'>
                                        <div className='d-flex align-items-center'>
                                            <div className='h5'>Grill Salmon</div>
                                            <div className='bg-orange fw-semibold me-3 ms-2' style={{ fontSize: "10px", padding: "2px 7px" }}>RECOMMENDED</div>
                                            <div className='menu-border'></div>
                                            <div className='ms-4 fw-semibold'>$27.85</div>
                                        </div>
                                        <div className='small' style={{ color: "#d6d6d6" }}>Soft and juice, with garlic & ginger</div>
                                    </div>

                                    <div className='w-60 me-5 lh-sm mb-5'>
                                        <div className='d-flex align-items-center'>
                                            <div className='h5'>Grill Salmon</div>
                                            <div className='bg-orange fw-semibold me-3 ms-2' style={{ fontSize: "10px", padding: "2px 7px" }}>RECOMMENDED</div>
                                            <div className='menu-border'></div>
                                            <div className='ms-4 fw-semibold'>$27.85</div>
                                        </div>
                                        <div className='small' style={{ color: "#d6d6d6" }}>Soft and juice, with garlic & ginger</div>
                                    </div>

                                </div>
                                <div className='col-xl-6'>
                                    <img src={img4} alt="" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                        <div className={`tab-pane fade  text-white ${basicActive === 'tab2' && 'show active'}`} role="tabpanel">
                            <div className='row mt-5 align-items-center'>
                                <div className='col-xl-6'>
                                    <img src={img5} alt="" className='img-fluid' />
                                </div>
                                <div className='col-xl-6 d-flex flex-column align-items-start'>

                                    <div className='w-60 me-5 lh-sm mb-5'>
                                        <div className='d-flex align-items-center'>
                                            <div className='h5'>Grill Salmon</div>
                                            <div className='bg-orange fw-semibold me-3 ms-2' style={{ fontSize: "10px", padding: "2px 7px" }}>RECOMMENDED</div>
                                            <div className='menu-border'></div>
                                            <div className='ms-4 fw-semibold'>$27.85</div>
                                        </div>
                                        <div className='small' style={{ color: "#d6d6d6" }}>Soft and juice, with garlic & ginger</div>
                                    </div>

                                    <div className='w-60 me-5 lh-sm mb-5'>
                                        <div className='d-flex align-items-center'>
                                            <div className='h5'>Grill Salmon</div>
                                            <div className='bg-orange fw-semibold me-3 ms-2' style={{ fontSize: "10px", padding: "2px 7px" }}>RECOMMENDED</div>
                                            <div className='menu-border'></div>
                                            <div className='ms-4 fw-semibold'>$27.85</div>
                                        </div>
                                        <div className='small' style={{ color: "#d6d6d6" }}>Soft and juice, with garlic & ginger</div>
                                    </div>

                                    <div className='w-60 me-5 lh-sm mb-5'>
                                        <div className='d-flex align-items-center'>
                                            <div className='h5'>Grill Salmon</div>
                                            <div className='bg-orange fw-semibold me-3 ms-2' style={{ fontSize: "10px", padding: "2px 7px" }}>RECOMMENDED</div>
                                            <div className='menu-border'></div>
                                            <div className='ms-4 fw-semibold'>$27.85</div>
                                        </div>
                                        <div className='small' style={{ color: "#d6d6d6" }}>Soft and juice, with garlic & ginger</div>
                                    </div>

                                    <div className='w-60 me-5 lh-sm mb-5'>
                                        <div className='d-flex align-items-center'>
                                            <div className='h5'>Grill Salmon</div>
                                            <div className='bg-orange fw-semibold me-3 ms-2' style={{ fontSize: "10px", padding: "2px 7px" }}>RECOMMENDED</div>
                                            <div className='menu-border'></div>
                                            <div className='ms-4 fw-semibold'>$27.85</div>
                                        </div>
                                        <div className='small' style={{ color: "#d6d6d6" }}>Soft and juice, with garlic & ginger</div>
                                    </div>

                                    <div className='w-60 me-5 lh-sm mb-5'>
                                        <div className='d-flex align-items-center'>
                                            <div className='h5'>Grill Salmon</div>
                                            <div className='bg-orange fw-semibold me-3 ms-2' style={{ fontSize: "10px", padding: "2px 7px" }}>RECOMMENDED</div>
                                            <div className='menu-border'></div>
                                            <div className='ms-4 fw-semibold'>$27.85</div>
                                        </div>
                                        <div className='small' style={{ color: "#d6d6d6" }}>Soft and juice, with garlic & ginger</div>
                                    </div>

                                    <div className='w-60 me-5 lh-sm mb-5'>
                                        <div className='d-flex align-items-center'>
                                            <div className='h5'>Grill Salmon</div>
                                            <div className='bg-orange fw-semibold me-3 ms-2' style={{ fontSize: "10px", padding: "2px 7px" }}>RECOMMENDED</div>
                                            <div className='menu-border'></div>
                                            <div className='ms-4 fw-semibold'>$27.85</div>
                                        </div>
                                        <div className='small' style={{ color: "#d6d6d6" }}>Soft and juice, with garlic & ginger</div>
                                    </div>

                                    <div className='w-60 me-5 lh-sm mb-5'>
                                        <div className='d-flex align-items-center'>
                                            <div className='h5'>Grill Salmon</div>
                                            <div className='bg-orange fw-semibold me-3 ms-2' style={{ fontSize: "10px", padding: "2px 7px" }}>RECOMMENDED</div>
                                            <div className='menu-border'></div>
                                            <div className='ms-4 fw-semibold'>$27.85</div>
                                        </div>
                                        <div className='small' style={{ color: "#d6d6d6" }}>Soft and juice, with garlic & ginger</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className={`tab-pane fade  text-white ${basicActive === 'tab3' && 'show active'}`} role="tabpanel">
                            <div className='row mt-5'>
                                <div className='col-xl-6 d-flex flex-column align-items-end'>

                                    <div className='w-60 me-5 lh-sm mb-5'>
                                        <div className='d-flex align-items-center'>
                                            <div className='h5'>Grill Salmon</div>
                                            <div className='bg-orange fw-semibold me-3 ms-2' style={{ fontSize: "10px", padding: "2px 7px" }}>RECOMMENDED</div>
                                            <div className='menu-border'></div>
                                            <div className='ms-4 fw-semibold'>$27.85</div>
                                        </div>
                                        <div className='small' style={{ color: "#d6d6d6" }}>Soft and juice, with garlic & ginger</div>
                                    </div>

                                    <div className='w-60 me-5 lh-sm mb-5'>
                                        <div className='d-flex align-items-center'>
                                            <div className='h5'>Grill Salmon</div>
                                            <div className='bg-orange fw-semibold me-3 ms-2' style={{ fontSize: "10px", padding: "2px 7px" }}>RECOMMENDED</div>
                                            <div className='menu-border'></div>
                                            <div className='ms-4 fw-semibold'>$27.85</div>
                                        </div>
                                        <div className='small' style={{ color: "#d6d6d6" }}>Soft and juice, with garlic & ginger</div>
                                    </div>

                                    <div className='w-60 me-5 lh-sm mb-5'>
                                        <div className='d-flex align-items-center'>
                                            <div className='h5'>Grill Salmon</div>
                                            <div className='bg-orange fw-semibold me-3 ms-2' style={{ fontSize: "10px", padding: "2px 7px" }}>RECOMMENDED</div>
                                            <div className='menu-border'></div>
                                            <div className='ms-4 fw-semibold'>$27.85</div>
                                        </div>
                                        <div className='small' style={{ color: "#d6d6d6" }}>Soft and juice, with garlic & ginger</div>
                                    </div>

                                    <div className='w-60 me-5 lh-sm mb-5'>
                                        <div className='d-flex align-items-center'>
                                            <div className='h5'>Grill Salmon</div>
                                            <div className='bg-orange fw-semibold me-3 ms-2' style={{ fontSize: "10px", padding: "2px 7px" }}>RECOMMENDED</div>
                                            <div className='menu-border'></div>
                                            <div className='ms-4 fw-semibold'>$27.85</div>
                                        </div>
                                        <div className='small' style={{ color: "#d6d6d6" }}>Soft and juice, with garlic & ginger</div>
                                    </div>

                                    <div className='w-60 me-5 lh-sm mb-5'>
                                        <div className='d-flex align-items-center'>
                                            <div className='h5'>Grill Salmon</div>
                                            <div className='bg-orange fw-semibold me-3 ms-2' style={{ fontSize: "10px", padding: "2px 7px" }}>RECOMMENDED</div>
                                            <div className='menu-border'></div>
                                            <div className='ms-4 fw-semibold'>$27.85</div>
                                        </div>
                                        <div className='small' style={{ color: "#d6d6d6" }}>Soft and juice, with garlic & ginger</div>
                                    </div>

                                    <div className='w-60 me-5 lh-sm mb-5'>
                                        <div className='d-flex align-items-center'>
                                            <div className='h5'>Grill Salmon</div>
                                            <div className='bg-orange fw-semibold me-3 ms-2' style={{ fontSize: "10px", padding: "2px 7px" }}>RECOMMENDED</div>
                                            <div className='menu-border'></div>
                                            <div className='ms-4 fw-semibold'>$27.85</div>
                                        </div>
                                        <div className='small' style={{ color: "#d6d6d6" }}>Soft and juice, with garlic & ginger</div>
                                    </div>

                                    <div className='w-60 me-5 lh-sm mb-5'>
                                        <div className='d-flex align-items-center'>
                                            <div className='h5'>Grill Salmon</div>
                                            <div className='bg-orange fw-semibold me-3 ms-2' style={{ fontSize: "10px", padding: "2px 7px" }}>RECOMMENDED</div>
                                            <div className='menu-border'></div>
                                            <div className='ms-4 fw-semibold'>$27.85</div>
                                        </div>
                                        <div className='small' style={{ color: "#d6d6d6" }}>Soft and juice, with garlic & ginger</div>
                                    </div>

                                </div>
                                <div className='col-xl-6'>
                                    <img src={img6} alt="" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                        <div className={`tab-pane fade  text-white ${basicActive === 'tab4' && 'show active'}`} role="tabpanel">
                            <div className='row mt-5 align-items-center'>
                                <div className='col-xl-6'>
                                    <img src={img7} alt="" className='img-fluid' />
                                </div>
                                <div className='col-xl-6 d-flex flex-column align-items-start'>

                                    <div className='w-60 me-5 lh-sm mb-5'>
                                        <div className='d-flex align-items-center'>
                                            <div className='h5'>Grill Salmon</div>
                                            <div className='bg-orange fw-semibold me-3 ms-2' style={{ fontSize: "10px", padding: "2px 7px" }}>RECOMMENDED</div>
                                            <div className='menu-border'></div>
                                            <div className='ms-4 fw-semibold'>$27.85</div>
                                        </div>
                                        <div className='small' style={{ color: "#d6d6d6" }}>Soft and juice, with garlic & ginger</div>
                                    </div>

                                    <div className='w-60 me-5 lh-sm mb-5'>
                                        <div className='d-flex align-items-center'>
                                            <div className='h5'>Grill Salmon</div>
                                            <div className='bg-orange fw-semibold me-3 ms-2' style={{ fontSize: "10px", padding: "2px 7px" }}>RECOMMENDED</div>
                                            <div className='menu-border'></div>
                                            <div className='ms-4 fw-semibold'>$27.85</div>
                                        </div>
                                        <div className='small' style={{ color: "#d6d6d6" }}>Soft and juice, with garlic & ginger</div>
                                    </div>

                                    <div className='w-60 me-5 lh-sm mb-5'>
                                        <div className='d-flex align-items-center'>
                                            <div className='h5'>Grill Salmon</div>
                                            <div className='bg-orange fw-semibold me-3 ms-2' style={{ fontSize: "10px", padding: "2px 7px" }}>RECOMMENDED</div>
                                            <div className='menu-border'></div>
                                            <div className='ms-4 fw-semibold'>$27.85</div>
                                        </div>
                                        <div className='small' style={{ color: "#d6d6d6" }}>Soft and juice, with garlic & ginger</div>
                                    </div>

                                    <div className='w-60 me-5 lh-sm mb-5'>
                                        <div className='d-flex align-items-center'>
                                            <div className='h5'>Grill Salmon</div>
                                            <div className='bg-orange fw-semibold me-3 ms-2' style={{ fontSize: "10px", padding: "2px 7px" }}>RECOMMENDED</div>
                                            <div className='menu-border'></div>
                                            <div className='ms-4 fw-semibold'>$27.85</div>
                                        </div>
                                        <div className='small' style={{ color: "#d6d6d6" }}>Soft and juice, with garlic & ginger</div>
                                    </div>

                                    <div className='w-60 me-5 lh-sm'>
                                        <div className='d-flex align-items-center'>
                                            <div className='h5'>Grill Salmon</div>
                                            <div className='bg-orange fw-semibold me-3 ms-2' style={{ fontSize: "10px", padding: "2px 7px" }}>RECOMMENDED</div>
                                            <div className='menu-border'></div>
                                            <div className='ms-4 fw-semibold'>$27.85</div>
                                        </div>
                                        <div className='small' style={{ color: "#d6d6d6" }}>Soft and juice, with garlic & ginger</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='container-fluid bg-img-primary'>
                <div className='row align-items-center'>
                    <div className='col-xl-6 p-0'>
                        <img src={img8} alt="" className='img-fluid w-100' />
                    </div>
                    <div className='col-xl-6 text-white pt-4 pb-4'>
                        <div className='row align-items-center ms-5'>
                            <div className='col-xl-6'>
                                <div className='text-warning fst-italic mb-2'>QUALITY & BALANCE</div>
                                <div className='h1'>An Extraordinary <br /> Experience for all</div>
                            </div>
                            <div className='col-xl-6'>
                                <img src={img9} alt="" className='img-fluid' />
                            </div>

                            <div className='col-xl-6 mt-5'>
                                <div className='h5'>Passionate Chef</div>
                                <div className='small mt-3 w-75'>Rosoi is one of the most popular Restaurant & Special menu made by our passionate chefs and quality with can impress you</div>
                            </div>
                            <div className='col-xl-6 mt-5'>
                                <div className='h5'>100% Fresh Food</div>
                                <div className='small mt-3 w-75'>Rosoi is one of the most popular Restaurant & Special menu made by our passionate chefs and quality with can impress you</div>
                            </div>
                            <div className='col-xl-6 mt-5'>
                                <div className='h5'>Memorable Ambience</div>
                                <div className='small mt-3 w-75'>Rosoi is one of the most popular Restaurant & Special menu made by our passionate chefs and quality with can impress you</div>
                            </div>
                            <div className='col-xl-6 mt-5'>
                                <div className='h5'>Special Dish for Occasion's</div>
                                <div className='small mt-3 w-75'>Rosoi is one of the most popular Restaurant & Special menu made by our passionate chefs and quality with can impress you</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-xl-6 p-0 bg-img-thread text-white py-5 d-flex justify-content-end'>
                        <div style={{ width: "80%" }}>
                            <div className='text-warning fst-italic'>EVENT BOOKING</div>
                            <div className='display-4 fw-semibold my-4'>Do you have any plan <br /> for any Party or Events?</div>
                            <div className='fw-semibold mt-5'>Call for Reservation <span className='text-warning'>+01234 567 891</span></div>
                            <div className='h4 mt-5 mb-4'>Opening Hours</div>
                            <ul className='p-0'>
                                <li className='d-flex justify-content-between mb-3 me-5'>
                                    <div>Monday - Saturday</div>
                                    <div>7.30 am  -  11.30 pm</div>
                                </li>
                                <li className='d-flex justify-content-between mb-3 me-5'>
                                    <div>Sunday</div>
                                    <div>7.30 am  -  11.30 pm</div>
                                </li>
                                <li className='d-flex justify-content-between mb-3 me-5'>
                                    <div className='text-orange'>Happy Hour</div>
                                    <div>5.30 pm  -  09.00 pm</div>
                                </li>
                            </ul>
                            <Link to='/' className='btn btn-outline-light px-5 py-3 rounded-0 mt-5'>Book Early</Link>
                        </div>
                    </div>
                    <div className='col-xl-6 p-0'>
                        <img src={img11} alt="" className='img-fluid w-100' />
                    </div>
                </div>
            </div>

            <div className='bg-img-fourth text-white py-5'>
                <div className='container py-5'>
                    <div className='text-warning fst-italic text-center'>OUR BLOG</div>
                    <div className='text-center h2 mt-3'>Latest Blog Post</div>
                    <div className='row mt-5 justify-content-center'>
                        <div className='col-xl-3 mb-4'>
                            <div className="card bg-transparent text-white border-0">
                                <img src={img12} alt="" className='img-fluid' />
                                <div className='card-body'>
                                    <div className='small text-orange mb-3'>Date: November 9, 2023 / By: Rose</div>
                                    <div className='small fw-semibold mb-3'>New menu added our menu you can exchange your test</div>
                                    <Link to="/" className='text-white text-decoration-none'>Read more</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-3 mb-4'>
                            <div className="card bg-transparent text-white border-0">
                                <img src={img13} alt="" className='img-fluid' />
                                <div className='card-body'>
                                    <div className='small text-orange mb-3'>Date: November 9, 2023 / By: Rose</div>
                                    <div className='small fw-semibold mb-3'>New menu added our menu you can exchange your test</div>
                                    <Link to="/" className='text-white text-decoration-none'>Read more</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-3 mb-4'>
                            <div className="card bg-transparent text-white border-0">
                                <img src={img14} alt="" className='img-fluid' />
                                <div className='card-body'>
                                    <div className='small text-orange mb-3'>Date: November 9, 2023 / By: Rose</div>
                                    <div className='small fw-semibold mb-3'>New menu added our menu you can exchange your test</div>
                                    <Link to="/" className='text-white text-decoration-none'>Read more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container-fluid bg-img-primary pb-4'>
                <div className='row align-items-center'>
                    <div className='col-xl-6 p-0'>
                        <img src={img15} alt="" className='img-fluid w-100' />
                    </div>
                    <div className='col-xl-6 text-white text-center pt-4'>
                        <div className='text-warning fst-italic mb-2'>NEWSLETTER</div>
                        <div className='h1 mb-3'>Subscribe our Newsletter</div>
                        <small>To get latest updates, offers and promotions</small>
                        <div className='d-flex justify-content-center'>
                            <div className="input-group my-5 w-75">
                                <input type="text" className="form-control rounded-0 bg-transparent text-white" placeholder="Email Here" />
                                <span className="input-group-text rounded-0" id="basic-addon1">Subcribe</span>
                            </div>
                        </div>
                        <div className='fw-semibold'>Call for Reservation <span className='text-warning'>+01234 567 891</span></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home