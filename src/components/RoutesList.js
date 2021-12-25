import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./layout/Navbar";
import SiteHeader from './layout/SiteHeader';
import Home from "./pages/Home";
import Blog from "./pages/Blog/Blog";
import Schools from "./pages/Schools";
import AboutUs from "./pages/AboutUs";
import LoginContainer from "./pages/Login/LoginContainer";
import Footer from './layout/Footer';

const RoutesList = () => {

    return (
        <Router>
            <Navbar />
            <SiteHeader />
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/Blog' exact element={<Blog />} />
                <Route path='/Schools' exact element={<Schools />} />
                <Route path='/AboutUs' exact element={<AboutUs />} />
                <Route path='/Login' exact element={<LoginContainer />} />
            </Routes>
            <Footer />
        </Router >
    );
}

export default RoutesList;