import React from "react";
import { Link } from "react-router-dom";
import '../../styles/layout/Navbar.css';
import '../../styles/pages/Schools.css';

const schoolsDB = [
    {name: 'IOGKF',
    address: '123, xx street',
    schedule: 'Mon-Wed-Fri: 8-10pm',
    description: 'In this school you will find...',
    img: '../../assets/img/schools/IOGKF.png'}
    ,
    {name: 'Shidokan',
    address: '123, xx street',
    schedule: 'Mon-Wed-Fri: 8-10pm',
    description: 'In this school you will find...',
    img: '../../assets/img/schools/Shidokan.png'}
    ,
    {name: 'Matsubayashi',
    address: '123, xx street',
    schedule: 'Tue-Thu: 7-9pm',
    description: 'In this school you will find...',
    img: '../../assets/img/schools/Matsubayashi.png'}
    ,
    {name: 'Shotokan',
    address: '123, xx street',
    schedule: 'Sat: 10am-2pm',
    description: 'In this school you will find...',
    img: '../../assets/img/schools/Shotokan.png'}
];

const IndividualSchool = () => {
    return(
        <div>
            <img src='../../assets/img/schools/Shidokan.png' alt='School logo'/>
            <div>
                <p>Name: Shidokan</p>
                <p>Address: 2000 Castro Barros street, CABA</p>
                <p>Training schedule: Mon-Wed-Fri 8-10pm</p>
                <p>Brief description: In this school you will find...</p>
            </div>
        </div>



/* <div>
<img src={this.img} alt='School logo'/>
<div>
    <p>Name: {this.name}</p>
    <p>Address: {this.address}</p>
    <p>Training schedule: {this.schedule}</p>
    <p>Brief description: {this.description}</p>
</div>
</div> */


    );
};

const Schools = () => {
    return (
        <section id='schools'>
            <h3>If you have a school and would like to include it to the site, please <Link to='/AboutUs' className='clickable link'>contact us</Link></h3>

            <label id="searchBox">Search for school:&nbsp;
                <input type='text' name='searchSchool' href={'searchSchool'} />
            </label>

            <section>

                <IndividualSchool/>
                
                {/* {schoolsDB.map(school => {
                    <IndividualSchool img={schoolsDB.img} name={schoolsDB.name} address={schoolsDB.address} schedule={schoolsDB.schedule} description={schoolsDB.description}/>
                })} */}
            </section>
            </section>

    )
};

export default Schools;