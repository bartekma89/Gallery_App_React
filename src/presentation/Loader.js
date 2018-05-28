import React from 'react';
import './Loader.css';

const Loader = props => {
	if (props.isLoading) {
		return (
			<div className="load">
				<hr />
				<hr />
				<hr />
				<hr />
			</div>
		);
	} else {
		return props.children;
	}
};

export default Loader;
