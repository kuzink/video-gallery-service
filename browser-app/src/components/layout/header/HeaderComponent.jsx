import React, {useState} from "react";
import {Link} from "react-router-dom";
import Logo from "../../../assets/logo6.png";
import MenuIcon from "../../../assets/menu.svg";

const HeaderComponent = (props) => {

    const {searchText, handleKeyPress, handleSearchTextChange, handleSearchButtonClick} = props;
	const [showSidebar, setShowSidebar] = useState(true);

    const handleMenuClick = () => {
	    const sidebarBlock = document.getElementById('sidebar-id');
	    const contentBlock = document.getElementById('test-content-outer-id');
	    const requestSpinner = document.getElementById('request-spinner-overlay-id');

	    if (sidebarBlock && contentBlock && requestSpinner) {
		    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
		    if (showSidebar) {
			    sidebarBlock.style.width = "0px";
			    sidebarBlock.style.minWidth = "0px";
			    contentBlock.style.marginLeft = "0px";
			    requestSpinner.style.width = "100vw";
		    } else {
			    if (vw > 1400) {
				    sidebarBlock.style.width = "260px";
				    sidebarBlock.style.minWidth = "260px";
				    contentBlock.style.marginLeft = "260px";
				    requestSpinner.style.width = "calc(100vw - 260px)";
			    } else {
				    sidebarBlock.style.width = "200px";
				    sidebarBlock.style.minWidth = "200px";
				    contentBlock.style.marginLeft = "200px";
				    requestSpinner.style.width = "calc(100vw - 200px)";
			    }
		    }
	    }

    	setShowSidebar(!showSidebar);
    };

	return (
		<div className="test-header">
			<div className="header-inner">

				<div className="header-logo-section" id="header-logo-section-id">
					<Link className="header-logo-link" to="/">
						<img src={Logo} className="" alt=""/>
					</Link>
				</div>

				<div className="header-toolbar-section">
					<div className="header-toolbar-section-inner">

						<div className="header-left">
							<div className="header-button-toggle-menu">
								<img src={MenuIcon} onClick={handleMenuClick} alt="" />
							</div>
							<div className="header-search">
								<form>
									<div className="input-group">
										<input type="text"
										       className="form-control dropdown-toggle"
										       placeholder="Search..."
										       id="top-search"
										       value={searchText}
										       onKeyPress={handleKeyPress}
										       onChange={handleSearchTextChange}/>
										<i className="fa-regular fa-magnifying-glass"/>
										<button className="input-group-text btn btn-primary"
										        type="button"
										        onClick={handleSearchButtonClick}>
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
};

export default HeaderComponent;