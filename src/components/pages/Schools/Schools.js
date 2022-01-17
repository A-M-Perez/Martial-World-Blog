import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import '../../../styles/layout/Navbar.css';
import '../../../styles/pages/schools/Schools.css';
import axios from 'axios';
import { serverURL } from "../../../Global";
import PageTransitionAnimation from '../../layout/PageTransitionAnimation';
import ReactPaginate from 'react-paginate';

const IndividualSchool = ({ searchInput }) => {

    const [schoolData, setSchoolData] = useState([]);
    const [filteredSchoolData, setFilteredSchoolData] = useState([]);

    //Pagination begin
    const [pageNumber, setPageNumber] = useState(0);
    const schoolsPerPage = 3;
    const pagesVisited = pageNumber * schoolsPerPage;
    const pageCount = Math.ceil(filteredSchoolData.length / schoolsPerPage);

    const onPageChange = ({ selected }) => {
        setPageNumber(selected);
    };
    //Pagination end

    useEffect(() => {
        axios.get(`${serverURL}/api/get_school`)
            .then((response) => {
                setSchoolData(response.data);
                setFilteredSchoolData(response.data);
            })
            .catch((err) => alert(err))
    }, []);


    useEffect(() => {
        if (schoolData.length !== 0) {
            const filteredSchools = schoolData.filter(school => {
                let name = school.name;
                if (name.toLowerCase().includes(searchInput.toLowerCase(), 0)) { return school }
            });
            setFilteredSchoolData(filteredSchools);
        }
    }, [searchInput]);


    if (filteredSchoolData.length !== 0) {
        const listOfSchools = filteredSchoolData
            .slice(pagesVisited, pagesVisited + schoolsPerPage)
            .map(school => {
                return (
                    <NavLink key={school.name} to={`/Schools/School/${school.id}`} className='schoolNavLink'>
                        <div id='schoolsSummary'>
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
                <div id='paginateContainer'>
                    <ReactPaginate
                        previousLabel={'Previous'}
                        nextLabel={'Next'}
                        pageCount={pageCount}
                        onPageChange={onPageChange}
                        containerClassName={'paginationBtns'}
                        previousClassName={'previousBtn'}
                        nextClassName={'nextBtn'}
                        disabledClassName={'paginationDisabled'}
                        activeClassName={'paginationActive'}
                    />
                    <hr className='separator' />
                </div>
                <div className="schoolsSummaryContainer">
                    {listOfSchools}
                </div>
            </React.Fragment>
        );
    } else {
        if (schoolData.length !== 0 && searchInput !== '') {
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


const Schools = () => {

    const [searchInput, setSearchInput] = useState('');

    function getSearchInput(e) {
        setSearchInput(e.target.value);
    };

    return (
        <PageTransitionAnimation>
            <section id='schools'>
                <h3>If you have a school and would like to include it in the site, please <NavLink to='/AboutUs' className='clickable link'>contact us</NavLink></h3>

                <label id="searchBox">Search for schools:&nbsp;
                    <br />
                    <input type='text' name='searchSchool' placeholder="School name..." href={'searchSchool'} onChange={getSearchInput} />
                </label>
                <hr className='separator' />
                <section id='individualSchoolSummaryContainer'>
                    <IndividualSchool searchInput={searchInput} />
                </section>
            </section>
        </PageTransitionAnimation>
    )
};

export default Schools;