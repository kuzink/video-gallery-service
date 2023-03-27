import React from 'react';
import Footer from "../footer/Footer";
import ScrollTopButtonComponent from "../../utilities/scrolltopbutton/ScrollTopButtonComponent";

const ContentWithFooter = (props) => {

	const {children} = props;

	const handleScroll = (event) => {
		const {scrollTop} = event.target;
		const el = document.getElementById('custom-scroll-top-div');

		if (scrollTop > 0) {
			el.classList.remove('d-none');
			el.classList.add('d-block');
		} else {
			el.classList.remove('d-block');
			el.classList.add('d-none');
		}
	};

	return (
		<div className="test-content-outer" onScroll={handleScroll}>
			<div id="inner-id-for-scroll-top-button"/>
			<div className="content-page">
				{children}
				<Footer/>
			</div>
			<ScrollTopButtonComponent/>
		</div>
	)
};

export default ContentWithFooter;