import React from 'react';
import Image from './Image';

const ImagesList = props => {
	const { data } = props;
	let images = data.map(image => (
		<Image url={image.urls.small} key={image.id} {...props} />
	));

	return (
		<div className="row">
			<ul>{images}</ul>
		</div>
	);
};

export default ImagesList;
