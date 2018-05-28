import React, { Component } from 'react';
import axios from 'axios';
import ImageList from '../presentation/ImageList';
import Pagination from '../presentation/Pagination';
import Loader from '../presentation/Loader.js';
import ImageModal from '../presentation/ImageModal';

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
			slideCount: 0,
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

	openModal(url, index) {
		this.setState({
			showModal: true,
			url: url,
			slideCount: index,
		});
	}

	closeModal() {
		this.setState({
			showModal: false,
			url: '',
		});
	}

	nextSlide() {
		this.setState({
			slideCount: this.state.slideCount + 1,
		});
	}

	previousSlide() {
		this.setState({
			slideCount: this.state.slideCount - 1,
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
						images={this.state.images}
						openModal={this.openModal.bind(this)}
					/>
					<ImageModal
						isOpen={this.state.showModal}
						closeModal={this.closeModal.bind(this)}
						image={this.state.images[this.state.slideCount]}
						nextSlide={this.nextSlide.bind(this)}
						previousSlide={this.previousSlide.bind(this)}
						hasPrevious={this.state.slideCount > 0}
						hasNext={
							this.state.slideCount < this.state.images.length - 1
						}
					/>
				</Loader>
			</div>
		);
	}
}

export default Gallery;
