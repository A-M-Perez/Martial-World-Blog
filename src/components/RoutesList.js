import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./layout/Navbar";
import SiteHeader from './layout/SiteHeader';
import Home from "./pages/Home";
import Blog from "./pages/Blog/Blog";
import Schools from "./pages/Schools/Schools";
import AboutUs from "./pages/AboutUs";
import LoginContainer from "./pages/Login/LoginContainer";
import Footer from './layout/Footer';
import ConfirmationMessage from "./pages/ConfirmationMsg";
import SchoolDetails from "./pages/Schools/SchoolDetails";

const RoutesList = () => {

    return (
        <Router>
            <Navbar />
            <SiteHeader />
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/Blog' exact element={<Blog />} />
                {/* <Route path='/Schools' exact element={<Schools />} /> */}
                <Route path='/Schools' exact element={<SchoolDetails />} />
                <Route path='/AboutUs' exact element={<AboutUs />} />
                <Route path='/Login' exact element={<LoginContainer />} />
            </Routes>
            {/* <ConfirmationMessage /> */}
            <Footer />
        </Router >
    );
}

export default RoutesList;