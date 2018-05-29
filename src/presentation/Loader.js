import React from 'react';
import './Loader.css';
import PropTypes from 'prop-types';

const Loader = ({ isLoading, children }) => {
	if (isLoading) {
		return (
			<div className="load">
				<hr />
				<hr />
				<hr />
				<hr />
			</div>
		);
	} else {
		return children;
	}
};

Loader.propTypes = {
	isLoading: PropTypes.bool.isRequired
}

export default Loader;
