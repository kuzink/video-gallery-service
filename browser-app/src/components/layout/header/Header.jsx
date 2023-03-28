import React, {Component} from 'react';
import HomeButtonComponent from "../../utilities/homebutton/HomeButtonComponent";

export class Header extends Component {

    render() {
        return (
            <div className="test-header">
	            <HomeButtonComponent classNames="ml-3"/>
            </div>
        )
    }
}

export default Header;