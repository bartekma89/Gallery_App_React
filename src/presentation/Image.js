import React from 'react';
import './Image.css';
import PropTypes from 'prop-types';

const Image = ({ url, index, openModal }) => {
	return (
		<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 card">
			<li
				className="card_body"
				onClick={openModal.bind(this, url, index)}
			>
				<a className="img-responsive">
					<img src={url} alt="thumbnail" />
					<div className="overlay">
						<span className="card-icon">
							<i className="fas fa-expand" />
						</span>
					</div>
				</a>
			</li>
		</div>
	);
};

Image.propTypes = {
	url: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
	openModal: PropTypes.func.isRequired
}

export default Image;
