import React, {useState} from "react"
import {usePromiseTracker} from "react-promise-tracker";
// import {Link} from "react-router-dom";

const SidebarItem = (props) => {

    const {item} = props;
    const [open, setOpen] = useState(false);

    if (item.children){
        return (
            <li className={`sidebar-item ${open ? 'opened' : 'closed'}`} onClick={() => setOpen(!open)}>
                <div className="sidebar-title">
                    <span>
                        {item.icon && <i className={item.icon}/>}
                        {item.title}
                    </span>
                    <i className="bx bx-chevron-right"/>
                </div>
                <ul className="sidebar-content">
                    {item.children.map((child, index) => <SidebarItem key={index} item={child}/>)}
                </ul>
            </li>
        )
    } else {
        if (item.isHead) {
            return (
                <li className="side-nav-title">
                    {item.title}
                </li>
            )
        }
        return (
            <li className="sidebar-item plain">
                <div className="sidebar-title">
                    <span>
                        {item.icon && <i className={item.icon}/>}
                        {item.title}
                    </span>
                </div>
            </li>
        )
    }
}

export default SidebarItem;