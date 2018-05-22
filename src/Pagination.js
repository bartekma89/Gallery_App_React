import React, { Component } from 'react';

class Pagination extends Component {
	onPageChange(page) {
		console.log(page);
		this.props.pageChange(page);
	}

	pages() {
		let pages = [];
		for (let i = 0; i <= this.props.quantityPages; i++) {
			pages.push(i + 1);
		}
		return pages;
	}

	render() {
		return (
			<div>
				<ul>
					{this.pages().map((page, index) => {
						return (
							<li key={index}>
								<a onClick={this.onPageChange.bind(this, page)}>
									{page}
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default Pagination;
