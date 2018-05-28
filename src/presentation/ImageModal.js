import React, { Component } from 'react';
import './Image.css';

class ImageModal extends Component {
	render() {
		const {
			isOpen,
			closeModal,
			image,
			hasPrevious,
			hasNext,
			previousSlide,
			nextSlide,
		} = this.props;

		if (isOpen === false) {
			return null;
		}

		const previousButton = hasPrevious && (
			<span onClick={previousSlide} className="arrow">
				<i className="fas fa-angle-left" />
			</span>
		);

		const nextButton = hasNext && (
			<span onClick={nextSlide} className="arrow">
				<i className="fas fa-angle-right" />
			</span>
		);

		return (
			<div className="modal-overlay">
				<div onClick={closeModal}>
					<a className="modal-close">
						<i className="fas fa-times" />
					</a>
				</div>
				<div className="modal-body">
					{previousButton}
					<img src={image.urls.small} alt="" />
					{nextButton}
				</div>
			</div>
		);
	}
}

export default ImageModal;
