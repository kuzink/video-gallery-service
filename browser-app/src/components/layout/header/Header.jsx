import React, {Component} from 'react';
import HomeButtonComponent from "../../utilities/homebutton/HomeButtonComponent";

export class Header extends Component {

    render() {
        return (
            <div className="test-header">
	            {/*<HomeButtonComponent classNames="ml-3"/>*/}

	            <div className="header-logo-section">
                    Logo here...
                </div>

	            <div className="header-toolbar-section">
                    <div className="header-toolbar-section-inner">
	                    <div className="header-left">
		                    Sidebar collapse icon and search here...
	                    </div>
	                    <div className="header-right">
		                    Profile and some action-buttons here...
	                    </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Header;