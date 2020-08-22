import React from 'react';

// Styles
import { SinglePhoto, PhotoInfo } from './SinglePhoto.css';

const singlePhoto = props => (
	<SinglePhoto>
		<img
            onLoad={props.load}
			src={props.photo.url_l}
			alt={props.photo.title ? props.photo.title : 'Flickr image'} />
        <PhotoInfo>
            <h1>{props.photo.title || 'No title'}</h1>
            <p>{props.photo.tags}</p>
        </PhotoInfo>
	</SinglePhoto>
);

export default singlePhoto;