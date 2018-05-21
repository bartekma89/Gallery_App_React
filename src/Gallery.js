import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import ImageList from './ImageList';

class Gallery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			images: [],
		};
		this.i = 0;
	}

	componentDidMount() {
		const accessKey =
			'2231b86360e4f99eaeb4edd914cebc7f50f36a08317f868ba1bd437a60a7acde';
		const url = `https://api.unsplash.com/photos/?client_id=${accessKey}`;
		fetch(url)
			.then(response => response.json())
			.then(data => {
				console.log(data);
				this.setState({
					images: data,
				});
			})
			.catch(err => console.log(`Error happened during fetching!`, err));
	}

	render() {
		return (
			<div>
				<ImageList data={this.state.images} />
			</div>
		);
	}
}

export default Gallery;
