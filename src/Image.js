import React from 'react';
import './Image.css';

const Image = props => {
	return (
		<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 card">
			<li className="card_body">
				<a className="img-responsive">
					<img src={props.url} alt="thumbnail" />
				</a>
			</li>
		</div>
	);
};

export default Image;
