import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import '../../../styles/layout/Navbar.css';
import '../../../styles/pages/schools/Schools.css';
import axios from 'axios';
import { serverURL } from "../../../Global";

//CHILD COMPONENT - 
const IndividualSchool = ({ searchInput }) => {

    const [schoolData, setSchoolData] = useState([]);
    const [status, setStatus] = useState('Success');
    const [filteredSchoolData, setFilteredSchoolData] = useState([]);

    useEffect(
        function getSchool() {
            axios.get(`${serverURL}/api/get_school`)
                .then((res) => {
                    setSchoolData(res.data);
                })
                .catch(() => setStatus('Error'))
        }, []);

    useEffect(() => {
        if (schoolData.length != 0) {
            const filteredSchools = schoolData.filter(school => {
                let name = school.name;
                if (name.toLowerCase().includes(searchInput.toLowerCase(), 0)) { return school }
            });
            setFilteredSchoolData(filteredSchools);
        }
    }, [searchInput]);


    if (filteredSchoolData.length != 0) {
        const listOfSchools = filteredSchoolData.map(school => {
            return (
                <NavLink to={`/Schools/School/${school.id}`} className='schoolNavLink'>
                    <div key={school.name} id='schoolsSummary'>
                        <img src={require(`../../../assets/img/schools/${school.logo}`)} alt='School logo' />
                        <div>
                            <p><strong>Name:</strong> {school.name}</p>
                            <p><strong>Address:</strong> {school.address}</p>
                            <p><strong>Training schedule:</strong> {school.schedule}</p>
                            <p id='schoolDescription'><strong>Brief description:</strong> {school.description}</p>
                        </div>
                    </div>
                </NavLink>
            );
        });
        return (
            <React.Fragment>
                {listOfSchools}
            </React.Fragment>
        );
    } else {
        if (schoolData.length != 0 && searchInput !== '') {
            return (
                <p id='loadingMessage'>Sorry, there are no matching results</p>
            )
        } else {
            return (
                <p id='loadingMessage'>Loading schools...</p>
            )
        };
    };
};

//PARENT COMPONENT - 
const Schools = () => {

    const [searchInput, setSearchInput] = useState('');

    function getSearchInput(e) {
        setSearchInput(e.target.value);
    };

    return (
        <section id='schools'>
            <h3>If you have a school and would like to include it in the site, please <NavLink to='/AboutUs' className='clickable link'>contact us</NavLink></h3>

            <label id="searchBox">Search for schools:&nbsp;
                <br />
                <input type='text' name='searchSchool' placeholder="School name..." href={'searchSchool'} onChange={getSearchInput} />
            </label>
            <section id='schoolsSummaryContainer'>
                <IndividualSchool searchInput={searchInput} />
            </section>
        </section>

    )
};

export default Schools;