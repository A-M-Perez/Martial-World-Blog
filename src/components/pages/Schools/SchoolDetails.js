import React, { useEffect, useState } from 'react';
import '../../../styles/pages/schools/SchoolDetails.css';
import Geocode from 'react-geocode';
import SchoolMap from './SchoolMap';
// require('dotenv').config();
Geocode.setApiKey('AIzaSyBWvJqmvWnh1wwYT53iNIGM_bZdRpc2k94');
Geocode.setLanguage('en');
Geocode.setRegion('es');

const SchoolDetails = () => {

    const schoolAddress = 'Avenida Corrientes 3800, Buenos Aires, Argentina';
    const [schoolLocation, setSchoolLocation] = useState();

    useEffect(() => {
        Geocode.fromAddress(schoolAddress)
            .then((res) => {
                setSchoolLocation(res.results[0].geometry.location);
            },
                (err) => {
                    console.log(err);
                })
    }
        , [schoolAddress])

    return (
        <section id='schoolContainer'>
            <div id='schoolHeader'>
                <img id='schoolLogo' src={require('../../../assets/img/schools/IOGKF.png')} alt='School logo' />
                <h3>I.O.G.K.F.</h3>
            </div>
            <div id='schoolInfoContainer'>
                <div id='addressSection'>
                    <h6><strong>Address:</strong> {schoolAddress}</h6>
                    <SchoolMap location={schoolLocation} />
                </div>
                <div id='infoSection'>
                    <ul id='infoSummary'>
                        <li><strong>Training Schedule:</strong> Mon-Wed-Fri 8-10pm</li>
                        <li><strong>Description:</strong><br /><br />
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, illum! Eius voluptate distinctio autem quae nemo ratione iste rem repellat enim cum laborum, optio, odio quos commodi! Dolores, modi suscipit.
                            Asperiores laudantium quisquam error modi eveniet beatae rem repellendus? Maxime saepe nostrum, ipsum beatae porro dicta ratione error, sed voluptatibus aliquid non velit delectus voluptatem sint dignissimos. Blanditiis, dolorem facere.
                            Harum, facilis exercitationem officia reiciendis atque suscipit, qui quaerat expedita culpa sit rerum, iste ullam nobis dignissimos labore quidem architecto vero? Eveniet ullam optio omnis odio eius reiciendis repellendus mollitia.
                            Et, odit a deserunt voluptatem quae quas tenetur laborum libero hic aperiam dolor reiciendis non sequi nobis possimus perspiciatis, saepe numquam excepturi praesentium nesciunt impedit omnis officiis neque recusandae. Cum.</li>
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