import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Logo from "../../../assets/logo6.png";

export class Header extends Component {

    render() {
        return (
            <div className="test-header">
	            <div className="header-inner">

		            <div className="header-logo-section">
			            <Link className="header-logo-link" to="/">
				            <img src={Logo} className="" alt=""/>
			            </Link>
		            </div>

		            <div className="header-toolbar-section">
			            <div className="header-toolbar-section-inner">

				            <div className="header-left">
				                <div className="header-button-toggle-menu">
									<i className="fa-sharp fa-regular fa-bars"></i>
				                </div>
					            <div className="header-search">
						            Search here...
					            </div>
					            <div className="clearfix"/>
				            </div>

				            <div className="header-right">
				                Profile and some action-buttons here...
				            </div>

			            </div>
		            </div>

	            </div>
            </div>
        )
    }
}

export default Header;