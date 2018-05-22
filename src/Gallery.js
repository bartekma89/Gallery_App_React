import React, { Component } from 'react';
import ImageList from './ImageList';
import axios from 'axios';
import Pagination from './Pagination';
import Loader from './Loader.js';

class Gallery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			images: [],
			startPage: 1,
			currentPage: 0,
			perPage: '',
			totalPage: 0,
			isLoading: true,
		};
	}

	fetchPhotos(page) {
		const accessKey =
			'2231b86360e4f99eaeb4edd914cebc7f50f36a08317f868ba1bd437a60a7acde';
		const url = `https://api.unsplash.com/photos/?client_id=${accessKey}`;
		axios
			.get(url, { params: { client_id: accessKey, page: page } })
			.then(response => {
				this.setState({
					images: response.data,
					perPage: parseInt(response.headers['x-per-page'], 10),
					totalPage: parseInt(response.headers['x-total'], 10),
					currentPage: page,
					isLoading: false,
				});
			})
			.catch(err =>
				console.log('Error happened durning fetching! ', err)
			);
	}

	componentDidMount() {
		this.fetchPhotos(this.state.currentPage);
	}

	pageChange(currentPage) {
		this.setState({
			isLoading: true,
		});
		console.log(currentPage);
		this.fetchPhotos(currentPage);
	}

	render() {
		return (
			<div>
				<Loader isLoading={this.state.isLoading}>
					<ImageList data={this.state.images} />

					<Pagination
						startPage={this.state.startPage}
						page={this.state.currentPage}
						quantityPages={Math.ceil(
							this.state.totalPage / this.state.perPage
						)}
						pageChange={this.pageChange.bind(this)}
					/>
				</Loader>
			</div>
		);
	}
}

export default Gallery;
