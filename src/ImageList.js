import React from 'react';
import Image from './Image';

const ImagesList = props => {
	const data = props.data;
	let images = data.map(image => (
		<Image url={image.urls.small} key={image.id} />
	));

	return <ul>{images}</ul>;
};

export default ImagesList;
