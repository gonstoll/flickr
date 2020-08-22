import React from 'react';

// Components
import SinglePhoto from './SinglePhoto/SinglePhoto';

// Styles
import { Photos } from './Photos.css';

const photos = props => {
    const photos = props.photos.map(photo => <SinglePhoto key={photo.id} photo={photo} load={props.load} />);

    return <Photos allLoaded={props.loading}>{photos}</Photos>;
};

export default photos;