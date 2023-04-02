import React, {Component} from 'react';
import {Link} from "react-router-dom";
import Logo from "../../../assets/logo6.png";
import MenuIcon from "../../../assets/menu.svg";
// import constants from "../../../constants/Constants";

export class Header extends Component {

	handleKeyPress = (event) => {
		console.log("Header.handleKeyPress()");
		if(event.key === 'Enter'){
			// const search = searchText.trim().toLowerCase();
			// return getItems(category, constants.PAGE_SIZE_DEFAULT_VALUE, constants.PAGE_NUMBER_DEFAULT_VALUE, sortBy, search);
			console.log("Enter pressed");
		}
	};

	handleSearchTextChange = (event) => {
		// this.props.setSearchText(event.target.value)
		console.log("Header.handleSearchTextChange()");
	};

    render() {
	    const searchText = "";

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
					                <img src={MenuIcon} alt=""/>
				                </div>
					            <div className="header-search">
							            {/*<input className="form-control custom-search-items-input"*/}
							                   {/*type="text"*/}
							                   {/*placeholder="Search"*/}
							                   {/*value={searchText}*/}
							                   {/*onKeyPress={this.handleKeyPress}*/}
							                   {/*onChange={this.handleSearchTextChange}/>*/}
						            <form>
							            <div className="input-group">
								            <input type="search"
								                   className="form-control dropdown-toggle"
								                   placeholder="Search..."
								                   id="top-search"/>
								            <i className="fa-regular fa-magnifying-glass"/>
								            <button className="input-group-text btn btn-primary" type="submit">
									            Search
								            </button>
							            </div>
						            </form>
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