import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/layout/SiteHeader.css'

const SiteHeader = () => {

    let location = useLocation();

    const [imagesForHeader, setImagesForHeader] = useState([]);

    useEffect(() => {

        switch (location.pathname) {
            case '/':
                setImagesForHeader([{image: 'about.jpg', name: 'ABOUT US'}, {image: 'login.jpg', name: 'LOGIN'}, {image: 'home.png', name: 'HOME'},
                 {image: 'blog.jpg', name: 'BLOG'}, {image: 'schools.jpg', name: 'SCHOOLS'}]);
                break;
            case '/Blog':
                setImagesForHeader([{image: 'login.jpg', name: 'LOGIN'}, {image: 'home.png', name: 'HOME'},
                {image: 'blog.jpg', name: 'BLOG'}, {image: 'schools.jpg', name: 'SCHOOLS'}, {image: 'about.jpg', name: 'ABOUT US'}]);
                break;
            case '/Schools':
                setImagesForHeader([{image: 'home.png', name: 'HOME'}, {image: 'blog.jpg', name: 'BLOG'}, {image: 'schools.jpg', name: 'SCHOOLS'},
                {image: 'about.jpg', name: 'ABOUT US'}, {image: 'login.jpg', name: 'LOGIN'}]);
                break;
            case '/AboutUs':
                setImagesForHeader([{image: 'blog.jpg', name: 'BLOG'}, {image: 'schools.jpg', name: 'SCHOOLS'}, {image: 'about.jpg', name: 'ABOUT US'},
                {image: 'login.jpg', name: 'LOGIN'}, {image: 'home.png', name: 'HOME'}]);
                break;
            case '/Login':
                setImagesForHeader([{image: 'schools.jpg', name: 'SCHOOLS'}, {image: 'about.jpg', name: 'ABOUT US'}, {image: 'login.jpg', name: 'LOGIN'},
                {image: 'home.png', name: 'HOME'}, {image: 'blog.jpg', name: 'BLOG'}]);
                break;
            default:
                setImagesForHeader([{image: 'about.jpg', name: 'ABOUT US'}, {image: 'login.jpg', name: 'LOGIN'}, {image: 'home.png', name: 'HOME'},
                 {image: 'blog.jpg', name: 'BLOG'}, {image: 'schools.jpg', name: 'SCHOOLS'}]);
                break;
        }
    }, [location.pathname])

    return (
        <section id='siteHeader' location={location}>
            {imagesForHeader.map(image => {
                return (
                    <div id='headerImageContainer' key={image.image}>
                        <img className='headerImage' id={`index_${imagesForHeader.indexOf(image)}`} src={require(`../../assets/img/carousel/${image.image}`)} alt='Header Images' />
                        <div className='siteHeaderTitle' id={`indexName_${imagesForHeader.indexOf(image)}`}>{image.name}</div>
                    </div>
                )
            })}
        </section>
    );
}

export default SiteHeader;