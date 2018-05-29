import React from 'react';
import Image from './Image';
import PropTypes from 'prop-types';

const ImagesList = props => {
	const images = props.images.map((image, index) => (
		<Image url={image.urls.small} key={image.id} index={index} {...props} />
	));

	return (
		<div className="row">
			<ul>{images}</ul>
		</div>
	);
};

ImagesList.propTypes = {
	images: PropTypes.array.isRequired,
	openModal: PropTypes.func.isRequired
}

export default ImagesList;
