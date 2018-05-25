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
			currentPage: 1,
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
		setTimeout(() => {
			this.fetchPhotos(this.state.currentPage);
		}, 1000);
	}

	pageChange(currentPage) {
		this.setState({
			isLoading: true,
		});
		setTimeout(() => {
			this.fetchPhotos(currentPage);
		}, 1000);
	}

	render() {
		return (
			<div className="container-fluid text-center">
				<Loader isLoading={this.state.isLoading}>
					<div className="row">
						<ImageList data={this.state.images} />
					</div>
					<div className="row">
						<Pagination
							page={this.state.currentPage}
							quantityPages={Math.ceil(
								this.state.totalPage / this.state.perPage
							)}
							pageChange={this.pageChange.bind(this)}
						/>
					</div>
				</Loader>
			</div>
		);
	}
}

export default Gallery;
