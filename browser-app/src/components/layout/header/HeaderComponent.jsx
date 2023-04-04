import React, {useState} from "react";
import {Link} from "react-router-dom";
import Logo from "../../../assets/logo6.png";
import MenuIcon from "../../../assets/menu.svg";
import AppsIcon from "../../../assets/apps-2-line.svg";
import MoonIcon from "../../../assets/moon-line.svg";
// import SunIcon from "../../../assets/sun-line.svg";
import FullScreenIcon from "../../../assets/fullscreen-line.svg";
import UserAvatar from "../../../assets/avatar-1.jpg";

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

	const handleAppsClick = () => {
		console.log(".handleAppsClick()");
	};

	const handleModeClick = () => {
		console.log(".handleModeClick()");
	};

	const handleFullScreenClick = () => {
		console.log(".handleFullScreenClick()");
	};

	const handleUserClick = () => {
		console.log(".handleUserClick()");
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
							<div className="header-button-toggle-sidebar">
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
							<ul className="header-menu-list">
								<li>
									<span>Language here...</span>
								</li>
								<li>
									<img src={AppsIcon} onClick={handleAppsClick} alt=""/>
								</li>
								<li>
									<img src={MoonIcon} onClick={handleModeClick} alt=""/>
								</li>
								<li>
									<img src={FullScreenIcon} onClick={handleFullScreenClick} alt=""/>
								</li>
								<li>
									<div className="header-user" onClick={handleUserClick}>
										<span className="account-user-avatar">
											<img src={UserAvatar} alt=""/>
										</span>
										<span>
											<span className="account-user-name">
												Dominic Keller
											</span>
											<span className="account-position">
												Founder
											</span>
										</span>
									</div>
								</li>
							</ul>
						</div>

					</div>
				</div>

			</div>
		</div>
	)
};

export default HeaderComponent;