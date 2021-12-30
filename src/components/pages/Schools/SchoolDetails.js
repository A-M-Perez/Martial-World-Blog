import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import '../../../styles/pages/schools/SchoolDetails.css';
import Geocode from 'react-geocode';
import SchoolMap from './SchoolMap';
// require('dotenv').config();
import { serverURL } from "../../../Global";
import axios from 'axios';
Geocode.setApiKey('AIzaSyBWvJqmvWnh1wwYT53iNIGM_bZdRpc2k94');
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
                    console.log('Error: ' + err);
                })
    }
        , [schoolAddress])

    return (
        <section key={schoolData.id} id='schoolContainer'>
            <div id='schoolHeader'>
                <img id='schoolLogo' src={require(`../../../assets/img/schools/IOGKF.png`)} alt='School logo' />
                <h3>{schoolData.name}</h3>
            </div>
            <div id='schoolInfoContainer'>
                <div id='addressSection'>
                    <h6><strong>Address:</strong> {schoolAddress}</h6>
                    <SchoolMap location={schoolLocation} />
                </div>
                <div id='infoSection'>
                    <ul id='infoSummary'>
                        <li><strong>Training Schedule:</strong> {schoolData.schedule}</li>
                        <li><strong>Description:</strong><br /><br />
                            {schoolData.description}</li>
                        <li><strong>Contact information:</strong>
                            <ul>
                                <li>Email: fakeemail@test.com</li>
                                <li>Phone #: +54 011 1234 5678</li>
                                <li>Website: www.fakesite.com</li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
        </section>
    );
};

export default SchoolDetails;