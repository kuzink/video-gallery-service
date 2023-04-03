import React from "react";
import {Link} from "react-router-dom";
import Logo from "../../../assets/logo6.png";
import MenuIcon from "../../../assets/menu.svg";

const HeaderComponent = (props) => {

    const {searchText, handleKeyPress, handleSearchTextChange, handleSearchButtonClick} = props;

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