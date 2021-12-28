import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import '../../../styles/layout/Navbar.css';
import '../../../styles/pages/schools/Schools.css';
import axios from 'axios';
import { serverURL } from "../../../Global";

const IndividualSchool = () => {

    const [schoolData, setSchoolData] = useState([]);
    const [status, setStatus] = useState('Success');

    useEffect(
        function getSchool() {
            axios.get(`${serverURL}/api/get_school`)
                .then((res) => {
                    setSchoolData(res.data);
                })
                .catch(() => setStatus('Error'))
        }, []);

    if (schoolData.length != 0) {
        const listOfSchools = schoolData.map(school => {
            return (
                <div key={school.name} id='schoolsSummary'>
                    <img src={require(`../../../assets/img/schools/${school.logo}`)} alt='School logo' />
                    <div>
                        <p><strong>Name:</strong> {school.name}</p>
                        <p><strong>Address:</strong> {school.address}</p>
                        <p><strong>Training schedule:</strong> {school.schedule}</p>
                        <p><strong>Brief description:</strong> {school.description}</p>
                    </div>
                </div>
            );
        });
        return (
            <React.Fragment>
                {listOfSchools}
            </React.Fragment>
        );
    } else {
        return (
            <p id='loadingMessage'>Loading schools...</p>
        )
    };
};

const Schools = () => {
    return (
        <section id='schools'>
            <h3>If you have a school and would like to include it in the site, please <NavLink to='/AboutUs' className='clickable link'>contact us</NavLink></h3>

            <label id="searchBox">Search for school:&nbsp;
                <br />
                <input type='text' name='searchSchool' href={'searchSchool'} />
            </label>

            <section id='schoolsSummaryContainer'>
                <IndividualSchool />
            </section>
        </section>

    )
};

export default Schools;