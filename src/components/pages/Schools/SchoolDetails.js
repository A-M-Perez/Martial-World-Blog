import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import '../../../styles/pages/schools/SchoolDetails.css';
import Geocode from 'react-geocode';
import SchoolMap from './SchoolMap';
import { serverURL, googleAPIKey } from "../../../Global";
import axios from 'axios';

Geocode.setApiKey(googleAPIKey);
Geocode.setLanguage('en');
Geocode.setRegion('es');


const SchoolDetails = () => {

    const params = useParams();
    const schoolId = params.id;

    const [schoolData, setSchoolData] = useState([]);

    useEffect(() => {
        axios.get(`${serverURL}/api/get_school/${schoolId}`)
            .then((response) => {
                setSchoolData(response.data[0]);
            })
            .catch((err) => alert(err))
    }, []);

    //GEOCODE AND MAP DATA
    const schoolAddress = schoolData.address;
    const [schoolLocation, setSchoolLocation] = useState();

    useEffect(() => {
        Geocode.fromAddress(schoolAddress)
            .then((res) => {
                setSchoolLocation(res.results[0].geometry.location);
            },
                (err) => {
                    console.log('GeoCode API: ' + err);
                })
    }
        ,);

    if (schoolData.length !== 0) {
        return (
            <section id='schoolContainer'>
                <div key={schoolData.id} id='schoolHeader'>
                    <img id='schoolLogo' src={require(`../../../assets/img/schools/${schoolData.logo}`)} alt='School logo' />
                    <h3>{schoolData.name}</h3>
                </div>
                <div id='schoolInfoContainer'>
                    <div id='addressSection'>
                        <h6><strong>Address:</strong> {schoolAddress}</h6>
                        {schoolLocation && <SchoolMap location={schoolLocation} />}
                        {!schoolLocation &&
                            <>
                                <SchoolMap location={schoolLocation} />
                                <p>Loading actual location...</p>
                            </>}
                    </div>
                    <div id='infoSection'>
                        <ul key={schoolData.id} id='infoSummary'>
                            <li><strong>Training Schedule:</strong> {schoolData.schedule}</li>
                            <li><strong>Description:</strong><br /><br />
                                {schoolData.description}</li>
                            <li><strong>Contact information:</strong>
                                <ul key={schoolData.name}>
                                    <li>Email: {schoolData.email}</li>
                                    <li>Phone #: {schoolData.phone}</li>
                                    <li>Website: {schoolData.website}</li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
            </section>
        );
    } else {
        return (
            <section id='schoolContainer'>
                <p id='loadingMessage'>Loading school information...<br /><br />
                    <span id='subLoadingMessage'>Please wait a few moments or refresh the page</span></p>
            </section>
        );
    };
};

export default SchoolDetails;