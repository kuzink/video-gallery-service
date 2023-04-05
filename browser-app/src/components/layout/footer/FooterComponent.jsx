import React from "react";
import {Link} from "react-router-dom";

const FooterComponent = () => (
	<div className="test-footer">
		<div>
			{new Date().getFullYear()} © Video Gallery - kuzink11@gmail.com
		</div>
		<div className="footer-links">
			<Link className="footer-link" to="/about" onClick={e => e.preventDefault()}>About</Link>
			<Link className="footer-link" to="/support" onClick={e => e.preventDefault()}>Support</Link>
			<Link className="footer-link" to="/contact-us" onClick={e => e.preventDefault()}>Contact Us</Link>
		</div>
	</div>
);

export default FooterComponent;
