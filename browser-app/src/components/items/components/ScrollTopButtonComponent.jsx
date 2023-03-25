import React from "react";

const ScrollTopButtonComponent = () => {

	const handleClick = () => {
		const element = document.getElementById('inner-id-for-scroll-top-button');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<div id="custom-scroll-top-div" className="custom-scroll-top-div d-none">
			<button className="btn custom-scroll-top-button" onClick={handleClick}>
				<i className="bx bx-chevron-up"/>
			</button>
		</div>
	);
};

export default ScrollTopButtonComponent;
