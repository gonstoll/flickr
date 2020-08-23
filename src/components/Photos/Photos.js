import React from 'react';

// Components
import SinglePhoto from './SinglePhoto/SinglePhoto';

// Styles
import { PhotosContainer } from './Photos.css';

const Photos = props => {
    let photos = <h2>{props.error.message}</h2>;

    if (!props.error.error) {
        photos = props.photos.map(photo => <SinglePhoto key={photo.id} photo={photo} load={props.load} />);
    }

    return (
		<PhotosContainer allLoaded={props.allLoaded} error={props.error.error}>
			{photos}
		</PhotosContainer>
	);
};

export default React.memo(Photos);