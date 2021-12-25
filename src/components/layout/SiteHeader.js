import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/layout/SiteHeader.css'

const SiteHeader = () => {

    let location = useLocation();

    const [imagesForHeader, setImagesForHeader] = useState([]);

    useEffect(() => {

        switch (location.pathname) {
            case '/':
                setImagesForHeader(['about.jpg', 'login.jpg', 'home.jpg', 'blog.jpg', 'schools.jpg']);
                break;
            case '/Blog':
                setImagesForHeader(['login.jpg', 'home.jpg', 'blog.jpg', 'schools.jpg', 'about.jpg']);
                break;
            case '/Schools':
                setImagesForHeader(['home.jpg', 'blog.jpg', 'schools.jpg', 'about.jpg', 'login.jpg']);
                break;
            case '/AboutUs':
                setImagesForHeader(['blog.jpg', 'schools.jpg', 'about.jpg', 'login.jpg', 'home.jpg']);
                break;
            case '/Login':
                setImagesForHeader(['schools.jpg', 'about.jpg', 'login.jpg', 'home.jpg', 'blog.jpg']);
                break;
            default:
                setImagesForHeader(['about.jpg', 'login.jpg', 'home.jpg', 'blog.jpg', 'schools.jpg']);
                break;
        }
    }, [location.pathname])

    return (
        <section id='siteHeader' location={location}>
            {imagesForHeader.map(image => {
                return (
                    <React.Fragment key={image}>
                        <img className='headerImage' id={`index_${imagesForHeader.indexOf(image)}`} src={require(`../../assets/img/carousel/${image}`)} alt='Header Images' />
                    </React.Fragment>
                )
            })}
        </section>
    );
}

export default SiteHeader;