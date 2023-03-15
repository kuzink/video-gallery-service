import React, {useState} from "react"

const SidebarItem = (props) => {

    const {item} = props;
    const [open, setOpen] = useState(false);
    const [height, setHeight] = useState('0');

    const handleClick = () => {
        if (open) {
            setHeight('0');
        } else {
	        setHeight(((item.children.length * 42) + 'px'));
        }
	    setOpen(!open);
    };

    if (item.children) {
        return (
            <li className="side-nav-item">
                <div className={`side-nav-link ${open ? 'opened' : 'closed'}`} onClick={handleClick}>
	                {item.icon && <i className={item.icon}/>}
                    <span>{item.title}</span>
                    <span className="menu-arrow">
                        <i className="bx bx-chevron-right"/>
                    </span>
                </div>
                <ul className="side-nav-second-level" style={{height: height}}>
                    {item.children.map((child, index) =>
                    <SidebarItem key={index} item={child}/>)
                    }
                </ul>
            </li>
        )
    } else {
        if (item.isHead) {
            return (
                <li className="side-nav-title">{item.title}</li>
            )
        }
        return (
            <li className="side-nav-item">
                <div className="side-nav-link">
	                {item.icon && <i className={item.icon}/>}
                    <span>{item.title}</span>
                </div>
            </li>
        )
    }
};

export default SidebarItem;