import React from 'react';
import './Loader.css';

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

export default Loader;
