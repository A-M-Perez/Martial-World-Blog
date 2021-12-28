import { Map, GoogleApiWrapper } from 'google-maps-react';
import { useState } from 'react';
import '../../../styles/pages/schools/SchoolDetails.css';

const SchoolMap = (props) => {

    const [defaultMapValues] = useState({ zoom: 15 });

    const containerStyle = {
        position: 'relative',
        width: '100%',
        height: '100%'
    };

    return (
        <div id='schoolMapContainer'>
            <Map
                google={props.google}
                containerStyle={containerStyle}
                zoom={defaultMapValues.zoom}
                initialCenter={props.location}
            />
        </div>
    );
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBWvJqmvWnh1wwYT53iNIGM_bZdRpc2k94'
})(SchoolMap);