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

	hasNext() {
		return this.props.page < this.props.quantityPages;
	}

	hasPrev() {
		return this.props.page > 1;
	}

	hasFirst() {
		return this.rangeStart() !== 1;
	}

	hasLast() {
		return this.rangeEnd() !== this.props.quantityPages;
	}

	render() {
		const previous = (
			<li>
				<a
					className={!this.prevPage() ? 'hidden' : ''}
					onClick={this.onPageChange.bind(this, this.prevPage())}
				>
					Previous
				</a>
			</li>
		);

		const next = (
			<li>
				<a
					className={!this.hasNext() ? 'hidden' : ''}
					onClick={this.onPageChange.bind(this, this.nextPage())}
				>
					Next
				</a>
			</li>
		);

		const firstPage = (
			<li className={!this.hasFirst() ? 'hidden' : ''}>
				<a onClick={this.onPageChange.bind(this, 1)}>1</a>
			</li>
		);

		const lastPage = (
			<li className={!this.hasLast() ? 'hidden' : ''}>
				<a
					onClick={this.onPageChange.bind(
						this,
						this.props.quantityPages
					)}
				>
					{this.props.quantityPages}
				</a>
			</li>
		);

		const self = this;

		const pages = self.pages().map((page, index) => {
			return (
				<li
					key={index}
					className={this.props.page === page ? 'active' : ''}
				>
					<a onClick={this.onPageChange.bind(this, page)}>{page}</a>
				</li>
			);
		});

		return (
			<nav aria-label="Page navigation">
				<ul className="pagination pagination-sm">
					{previous}
					{firstPage}
					{pages}
					{lastPage}
					{next}
				</ul>
			</nav>
		);
	}
}

export default Pagination;
