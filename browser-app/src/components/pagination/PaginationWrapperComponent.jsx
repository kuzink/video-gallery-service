import React from 'react';
import Select from 'react-select';
import constants from "../../constants/Constants";

const PaginationWrapperComponent = (props) => {

	const {page, getItems, children} = props;

	const range = (from, to) => {
		let i = from;
		const range = [];
		while (i <= to) {
			range.push(i++);
		}
		return range;
	};

	const fetchPageNumbers = (totalPages, currentPage) => {
		const totalNumbers = (constants.PAGE_NEIGHBOURS * 2) + 3;
		const totalBlocks = totalNumbers + 2;

		if (totalPages > totalBlocks) {
			const startPage = Math.max(2, currentPage - constants.PAGE_NEIGHBOURS);
			const endPage = Math.min(totalPages - 1, currentPage + constants.PAGE_NEIGHBOURS);
			let pages = range(startPage, endPage);
			const hasLeftSpill = startPage > 2;
			const hasRightSpill = (totalPages - endPage) > 1;
			const spillOffset = totalNumbers - (pages.length + 1);

			if (hasLeftSpill && !hasRightSpill) {
				const extraPages = range(startPage - spillOffset, startPage - 1);
				pages = [constants.LEFT_PAGE, ...extraPages, ...pages];
			} else if (!hasLeftSpill && hasRightSpill) {
				const extraPages = range(endPage + 1, endPage + spillOffset);
				pages = [...pages, ...extraPages, constants.RIGHT_PAGE];
			} else {
				pages = [constants.LEFT_PAGE, ...pages, constants.RIGHT_PAGE];
			}

			return [1, ...pages, totalPages];
		}
		return range(1, totalPages);
	};

	const pages = fetchPageNumbers(page.totalPages, page.page);

	const handleMoveLeft = e => gotoPage(page.page - constants.PAGE_NEIGHBOURS * 2);

	const handleMoveRight = e => gotoPage(page.page + constants.PAGE_NEIGHBOURS * 2);

	const handleClick = pageNumber => e => gotoPage(pageNumber);

	const gotoPage = pageNumber => getItems(page.size, pageNumber);

	const isPaginationHeaderRowVisible = () => !!page.totalPages;

	const isPaginationButtonsVisible = () => !(!page.totalPages || page.totalPages === 1);

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

	const defineShowingItemsText = () => {
		let endIndex = page.size * page.page;
		const startIndex = endIndex - page.size + 1;

		if (endIndex > page.totalElements) {
			endIndex = page.totalElements;
		}

		return 'Showing items ' + startIndex + '-' + endIndex + ' of ' + page.totalElements;
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
							<h5 className="mb-0 ml-4 font-weight-normal">{defineShowingItemsText()}</h5>
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
								if (p === constants.LEFT_PAGE) {
									return (
										<li key={index} className="page-item">
											<a className="page-link" onClick={handleMoveLeft}>&laquo;</a>
										</li>
									);
								} else if (p === constants.RIGHT_PAGE) {
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