import React, { Component } from 'react';
import './Image.css';

class ImageModal extends Component {
	render() {
		if (this.props.isOpen === false) {
			return null;
		}
		return (
			<div
				className="modal-overlay"
				onClick={this.props.closeModal.bind(this)}
			>
				<div onClick={this.props.closeModal.bind(this)}>
					<a className="modal-close">
						<i class="fas fa-times" />
					</a>
				</div>
				<div className="modal-body">
					<img src={this.props.url} alt="" />
				</div>
			</div>
		);
	}
}

export default ImageModal;
