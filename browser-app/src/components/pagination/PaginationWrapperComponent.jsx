import React from 'react';
import Select from 'react-select';
import constants from "../../constants/Constants";
import {faSearch} from "@fortawesome/free-solid-svg-icons/index";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const PaginationWrapperComponent = (props) => {

	const {
		page,
		sortBy,
		sortByChange,
		searchText,
		searchTextChange,
		getItems,
		children
	} = props;

	const LEFT_PAGE = 'LEFT';
	const RIGHT_PAGE = 'RIGHT';

	const range = (from, to) => {
		let i = from;
		const range = [];
		while (i <= to) {
			range.push(i++);
		}
		return range;
	};

	const fetchPageNumbers = (totalPages, currentPage) => {
		const totalNumbers = 5;
		const totalBlocks = 7;

		if (totalPages > totalBlocks) {
			const startPage = Math.max(2, currentPage - 1);
			const endPage = Math.min(totalPages - 1, currentPage + 1);
			let pages = range(startPage, endPage);
			const hasLeftSpill = startPage > 2;
			const hasRightSpill = (totalPages - endPage) > 1;
			const spillOffset = totalNumbers - (pages.length + 1);

			if (hasLeftSpill && !hasRightSpill) {
				const extraPages = range(startPage - spillOffset, startPage - 1);
				pages = [LEFT_PAGE, ...extraPages, ...pages];
			} else if (!hasLeftSpill && hasRightSpill) {
				const extraPages = range(endPage + 1, endPage + spillOffset);
				pages = [...pages, ...extraPages, RIGHT_PAGE];
			} else {
				pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
			}

			return [1, ...pages, totalPages];
		}
		return range(1, totalPages);
	};

	const pages = fetchPageNumbers(page.totalPages, page.page);

	const handleMoveLeft = e => gotoPage(page.page - 2);

	const handleMoveRight = e => gotoPage(page.page + 2);

	const handleClick = pageNumber => e => gotoPage(pageNumber);

	const gotoPage = pageNumber => getItems(page.size, pageNumber, sortBy, searchText);

	const isPaginationButtonsVisible = () => !(!page.totalPages || page.totalPages === 1);

	const definePageSizeValue = () => {
		const {size} = page;
		return size
			? constants.PAGE_SIZE_OPTIONS.find(pS => pS.value === size)
			: constants.PAGE_SIZE_OPTIONS.find(pS => pS.value === constants.PAGE_SIZE_DEFAULT_VALUE);
	};

	const defineSortByValue = () => {
		return sortBy
			? constants.SORT_CRITERIA_OPTIONS.find(sB => sB.value === sortBy)
			: constants.SORT_CRITERIA_OPTIONS.find(sB => sB.value === constants.SORT_CRITERIA_DEFAULT_VALUE);
	};

	const handlePageSizeChange = (selected) => {
		selected.value === 'all'
			? getItems((page.totalElements || 1), constants.PAGE_NUMBER_DEFAULT_VALUE, sortBy, searchText)
			: getItems(selected.value, constants.PAGE_NUMBER_DEFAULT_VALUE, sortBy, searchText);
	};

	const handleSortByChange = (selected) => {
		sortByChange(selected.value);
		return getItems(page.size, page.page, selected.value, searchText);
	};

	const defineShowingItemsText = () => {
		if (!page.totalElements) {
			return 'Items not found';
		}

		let endIndex = page.size * page.page;
		const startIndex = endIndex - page.size + 1;

		if (endIndex > page.totalElements) {
			endIndex = page.totalElements;
		}

		return 'Showing items ' + startIndex + '-' + endIndex + ' of ' + page.totalElements;
	};

	const handleKeyPress = (event) => {
		if(event.key === 'Enter'){
			const search = searchText.trim().toLowerCase();
			return getItems(constants.PAGE_SIZE_DEFAULT_VALUE, constants.PAGE_NUMBER_DEFAULT_VALUE, sortBy, search);
		}
	};

	return (
		<div className="custom-items-wrapper pt-3 pb-5">

			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="d-flex align-items-center justify-content-between mb-4 pb-2">
							<div>
								<h5 className="mb-0 font-weight-normal">{defineShowingItemsText()}</h5>
							</div>
							<div className="d-flex align-items-center">
								<div className="form-inline my-0 mr-4 position-relative">
									<FontAwesomeIcon icon={faSearch} className="custom-search-icon"/>
									<input className="form-control custom-search-items-input"
									       type="text"
									       placeholder="Search"
									       value={searchText}
									       onKeyPress={handleKeyPress}
									       onChange={searchTextChange}/>
								</div>
								<div className="mr-4">
									<Select options={constants.SORT_CRITERIA_OPTIONS}
									        value={defineSortByValue()}
									        onChange={handleSortByChange}
									        classNamePrefix="react-sort-by-select"/>
								</div>
								<div>
									<Select options={constants.PAGE_SIZE_OPTIONS}
									        value={definePageSizeValue()}
									        onChange={handlePageSizeChange}
									        classNamePrefix="react-page-size-select"/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

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