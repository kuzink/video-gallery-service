import React, {Component} from 'react';
import SidebarItem from "./SidebarItem";
import sidebarConstants from "./SidebarConstants";

export class Sidebar extends Component {

    render() {
        return (
            <div className="test-sidebar">
                <ul className="side-nav">
                    {sidebarConstants.SIDEBAR_MENU_ITEMS.map((item, index) =>
                    <SidebarItem key={index} item={item} />)
                    }
                </ul>
            </div>
        )
    }
}

export default Sidebar;