import React, {Component} from 'react';
import Content from "./Content";
import Footer from "../footer/Footer";
import ScrollTopButtonComponent from "../../../utilities/scrolltopbutton/ScrollTopButtonComponent";

export class ContentWithFooter extends Component {

	handleScroll = (event) => {
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

	render() {
		return (
			<div className="test-content-outer" onScroll={this.handleScroll}>
				<div id="inner-id-for-scroll-top-button"/>
				<div className="content-page">
					<Content/>
					<Footer/>
				</div>
				<ScrollTopButtonComponent/>
			</div>
		)
	}
}

export default ContentWithFooter;