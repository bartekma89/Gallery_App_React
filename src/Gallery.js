import React, { Component } from 'react';
import ImageList from './ImageList';
import axios from 'axios';
import Pagination from './Pagination';
import Loader from './Loader.js';
import ImageModal from './ImageModal';

class Gallery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			images: [],
			currentPage: 1,
			perPage: 12,
			totalPhotos: 0,
			isLoading: true,
			showModal: false,
			url: '',
		};
	}

	fetchPhotos(page) {
		const accessKey =
			'2231b86360e4f99eaeb4edd914cebc7f50f36a08317f868ba1bd437a60a7acde';
		const url = `https://api.unsplash.com/photos/?client_id=${accessKey}`;
		const { perPage } = this.state;
		axios
			.get(url, {
				params: { client_id: accessKey, page: page, per_page: perPage },
			})
			.then(response => {
				this.setState({
					images: response.data,
					totalPhotos: parseInt(response.headers['x-total'], 10),
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

	openModal(url) {
		this.setState({
			showModal: true,
			url: url,
		});
	}

	closeModal() {
		this.setState({
			showModal: false,
			url: '',
		});
	}

	render() {
		return (
			<div className="container text-center">
				<Pagination
					page={this.state.currentPage}
					quantityPages={Math.ceil(
						this.state.totalPhotos / this.state.perPage
					)}
					pageChange={this.pageChange.bind(this)}
				/>
				<Loader isLoading={this.state.isLoading}>
					<ImageList
						data={this.state.images}
						openModal={this.openModal.bind(this)}
					/>
					<ImageModal
						isOpen={this.state.showModal}
						closeModal={this.closeModal.bind(this)}
						url={this.state.url}
					/>
				</Loader>
			</div>
		);
	}
}

export default Gallery;
