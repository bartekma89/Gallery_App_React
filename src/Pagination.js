import React, { Component } from 'react';
import './Styles.css';

class Pagination extends Component {
	onPageChange(page) {
		this.props.pageChange(page);
	}

	pages() {
		let pages = [];
		for (let i = this.rangeStart(); i <= this.rangeEnd(); i++) {
			pages.push(i);
		}
		return pages;
	}

	rangeStart() {
		let start = this.props.page - 2;
		return start > 0 ? start : this.props.page;
	}

	rangeEnd() {
		let end = this.props.page + 2;
		return end < this.props.quantityPages ? end : this.props.quantityPages;
	}

	nextPage() {
		return this.props.page + 1;
	}

	prevPage() {
		return this.props.page - 1;
	}

	hastNext() {
		return this.props.page < this.props.quantityPages;
	}

	hasPrev() {
		return this.props.page > 1;
	}

	hasFirst() {}

	hasLast() {}

	render() {
		return (
			<nav aria-label="Page navigation">
				<ul className="pagination pagination-sm">
					<li>
						<a
							className={!this.prevPage() ? 'hidden' : ''}
							onClick={this.onPageChange.bind(
								this,
								this.prevPage()
							)}
						>
							Previous
						</a>
					</li>
					{this.pages().map((page, index) => {
						return (
							<li
								key={index}
								className={
									this.props.page === page ? 'active' : ''
								}
							>
								<a onClick={this.onPageChange.bind(this, page)}>
									{page}
								</a>
							</li>
						);
					})}
					<li>
						<a
							className={!this.nextPage() ? 'hidden' : ''}
							onClick={this.onPageChange.bind(
								this,
								this.nextPage()
							)}
						>
							Next
						</a>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Pagination;
