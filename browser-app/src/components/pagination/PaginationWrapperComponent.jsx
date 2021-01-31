import React from 'react';
import Select from 'react-select';
import constants from "../../constants/Constants";

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';
const pageNeighbours = 1;

const range = (from, to, step = 1) => {
	let i = from;
	const range = [];
	while (i <= to) {
		range.push(i);
		i += step;
	}
	return range;
};

const PaginationWrapperComponent = (props) => {

	const {page, getItems, children} = props;

	const fetchPageNumbers = (totalPages, currentPage) => {
		const totalNumbers = (pageNeighbours * 2) + 3;
		const totalBlocks = totalNumbers + 2;

		if (totalPages > totalBlocks) {
			const startPage = Math.max(2, currentPage - pageNeighbours);
			const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
			let pages = range(startPage, endPage);
			const hasLeftSpill = startPage > 2;
			const hasRightSpill = (totalPages - endPage) > 1;
			const spillOffset = totalNumbers - (pages.length + 1);

			switch (true) {
				case (hasLeftSpill && !hasRightSpill): {
					const extraPages = range(startPage - spillOffset, startPage - 1);
					pages = [LEFT_PAGE, ...extraPages, ...pages];
					break;
				}
				case (!hasLeftSpill && hasRightSpill): {
					const extraPages = range(endPage + 1, endPage + spillOffset);
					pages = [...pages, ...extraPages, RIGHT_PAGE];
					break;
				}
				default: {
					pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
					break;
				}
			}
			return [1, ...pages, totalPages];
		}
		return range(1, totalPages);
	};

	const handleMoveLeft = e => gotoPage((page.page + 1) - (pageNeighbours * 2) - 1);

	const handleMoveRight = e => gotoPage((page.page + 1) + (pageNeighbours * 2) + 1);

	const handleClick = pageNumber => e => gotoPage(pageNumber);

	const gotoPage = pageNumber => getItems(page.size, pageNumber);

	const pages = fetchPageNumbers(page.totalPages, page.page);

	const definePageSizeValue = () => {
		const {size} = page;
		return size
			? constants.PAGE_SIZE_OPTIONS.find(pS => pS.value === size)
			: constants.PAGE_SIZE_OPTIONS.find(pS => pS.value === constants.PAGE_SIZE_DEFAULT_VALUE);
	};

	const handlePageSizeChange = (selected) => {
		selected.value === 'all'
			? getItems(page.totalElements, constants.PAGE_NUMBER_DEFAULT_VALUE)
			: getItems(selected.value, constants.PAGE_NUMBER_DEFAULT_VALUE);
	};

	const isPaginationHeaderRowVisible = () => !!page.totalPages;

	const isPaginationButtonsVisible = () => !(!page.totalPages || page.totalPages === 1);

	const defineShowingItems = () => {
		let endIndex = page.size * page.page;
		const startIndex = endIndex - page.size + 1;

		if (endIndex > page.totalElements) {
			endIndex = page.totalElements;
		}

		return startIndex + '-' + endIndex;
	};

	return (
		<div className="custom-album py-5">

			{isPaginationHeaderRowVisible() &&
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="d-flex align-items-center mb-4 pb-2">
							<h5 className="mb-0 mr-2 font-weight-normal">Size:</h5>
							<Select options={constants.PAGE_SIZE_OPTIONS}
							        value={definePageSizeValue()}
							        onChange={handlePageSizeChange}
								    classNamePrefix="react-page-size-select"/>
							<h5 className="mb-0 ml-4 font-weight-normal">
								Showing items {defineShowingItems()} of {page.totalElements}
							</h5>
						</div>
					</div>
				</div>
			</div>
			}

			{children}

			{isPaginationButtonsVisible() &&
			<div className="container">
				<div className="row">
					<div className="col-12">
						<ul className="pagination mb-0 justify-content-end mt-2">
							{pages.map((p, index) => {
								if (p === LEFT_PAGE) {
									return (
										<li key={index} className="page-item">
											<a className="page-link" onClick={handleMoveLeft}>&laquo;</a>
										</li>
									);
								} else if (p === RIGHT_PAGE) {
									return (
										<li key={index} className="page-item">
											<a className="page-link" onClick={handleMoveRight}>&raquo;</a>
										</li>
									);
								} else {
									return (
										<li key={index} className={`page-item ${ page.page === p ? ' active' : ''}`}>
											<a className="page-link" onClick={handleClick(p)}>{p}</a>
										</li>
									);
								}
							})}
						</ul>
					</div>
				</div>
			</div>
			}

		</div>
	);
};

export default PaginationWrapperComponent;