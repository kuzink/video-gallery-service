import React, {Component} from 'react';
import BackButtonComponent from "../../../items/components/BackButtonComponent";

export class Header extends Component {

    render() {
        return (
            <div className="test-header">
	            <BackButtonComponent classNames="ml-3"/>
            </div>
        )
    }
}

export default Header;