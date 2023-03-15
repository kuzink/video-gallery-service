import React, {Component} from 'react';
import SidebarItem from "./SidebarItem";

const dynamicCategories = [
    {
        title: "First"
    },
    {
        title: "Second"
    },
    {
        title: "Third"
    }
];

const sidebarMenuItems = [
    {
        title: "Navigation",
        isHead: true
    },
    {
        title: "General",
        icon: "bx bx-category",
        children: dynamicCategories
    },
    {
        title: "Other",
        isHead: true
    },
    {
        title: "Account",
        icon: "bi-info-circle-fill"
    },
    {
        title: "Profile",
        icon: "bi-person-fill"
    },
    {
        title: "Advance",
        icon: "bi-view-list"
    },
    {
        title: "Support",
        icon: "bi-question-circle-fill",
    }
];

export class Sidebar extends Component {

    render() {
        return (
            <div className="test-sidebar">
                <ul className="side-nav">
                    {sidebarMenuItems.map((item, index) =>
                    <SidebarItem key={index} item={item} />)
                    }
                </ul>
            </div>
        )
    }
}

export default Sidebar;