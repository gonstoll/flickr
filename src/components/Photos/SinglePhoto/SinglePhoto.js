import React from 'react';

// Styles
import { SinglePhoto, PhotoInfo } from './SinglePhoto.css';

const singlePhoto = props => (
	<SinglePhoto>
		<img
			src={props.photo.url_c}
			onLoad={props.load.bind(this, props.photo.url_c)}
			alt={props.photo.title ? props.photo.title : 'Flickr image'}
		/>
		<PhotoInfo>
			<h1>{props.photo.title || 'No title'}</h1>
			<p>{props.photo.tags}</p>
		</PhotoInfo>
	</SinglePhoto>
);

export default React.memo(singlePhoto);