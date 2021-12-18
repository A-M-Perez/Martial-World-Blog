import React from "react";
import { NavLink } from "react-router-dom";
import '../../styles/layout/Navbar.css';
import '../../styles/pages/Schools.css';
import axios from 'axios';
import { serverURL } from "../../Global";

const IndividualSchool = () => {

    axios.get(`${serverURL}/api/get_school`).then((req, res) => {

        console.log(req.body);

    });

    return (
        <div>
            <img src='../../assets/img/schools/Shidokan.png' alt='School logo' />
            <div>
                <p>Name: Shidokan</p>
                <p>Address: 2000 Castro Barros street, CABA</p>
                <p>Training schedule: Mon-Wed-Fri 8-10pm</p>
                <p>Brief description: In this school you will find...</p>
            </div>
        </div>
    );
};

const Schools = () => {
    return (
        <section id='schools'>
            <h3>If you have a school and would like to include it in the site, please <NavLink to='/AboutUs' className='clickable link'>contact us</NavLink></h3>

            <label id="searchBox">Search for school:&nbsp;
                <input type='text' name='searchSchool' href={'searchSchool'} />
            </label>

            <section>

                <IndividualSchool />

            </section>
        </section>

    )
};

export default Schools;