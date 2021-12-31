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
    const [status, setStatus] = useState('Success');

    useEffect(
        function getSchoolById(props) {

            axios.get(`${serverURL}/api/get_school/${schoolId}`)
                .then((res) => {
                    setSchoolData(res.data[0]);
                })
                .catch(() => setStatus('Error'))
        }, []);        
    
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
        , [schoolAddress])

    return (
        <section id='schoolContainer'>
            <div key={schoolData.id} id='schoolHeader'>
                <img id='schoolLogo' src={require('../../../assets/img/schools/Okikukai.png')} alt='School logo' />
                <h3>{schoolData.name}</h3>
            </div>
            <div id='schoolInfoContainer'>
                <div id='addressSection'>
                    <h6><strong>Address:</strong> {schoolAddress}</h6>
                    <SchoolMap location={schoolLocation} />
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
};

export default SchoolDetails;