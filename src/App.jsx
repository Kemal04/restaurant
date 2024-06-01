import { BrowserRouter as Router, Routes, Outlet, Route } from 'react-router-dom'
import { useEffect } from 'react';
import Aos from 'aos';
import './App.css'
import 'aos/dist/aos.css';
import '@splidejs/react-splide/css';

//COMPONENTS
import { Footer, Navbar, ScrollToTop } from './components';

//PAGES
import { About, Home, Menu } from './pages';

function App() {

    useEffect(function () {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <>
            <Router>
                <ScrollToTop />

                <Routes>
                    <Route path="/restaurant" element={<HomeLayout />}>

                        <Route path="" element={<Home />} />
                        <Route path="menu" element={<Menu />} />
                        <Route path="biz-barada" element={<About />} />
                        <Route path="*" element={<Home />} />

                    </Route>
                </Routes>
            </Router>
        </>
    )
}

const HomeLayout = () => {
    return (
        <>
            <Navbar />

            <Outlet />

            <Footer />
        </>
    );
};


export default App
