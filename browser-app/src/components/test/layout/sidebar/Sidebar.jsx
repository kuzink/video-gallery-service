import React, {Component} from 'react';
import SidebarItem from "./SidebarItem";
import sidebarConstants from "./SidebarConstants";
import {connect} from "react-redux";
import {setActiveItemId, resetActiveItemId} from "../../../../actions/SidebarActions";

export class Sidebar extends Component {

    componentWillUnmount() {
        this.props.resetActiveItemId();
    }

    render() {
        const {activeItemId} = this.props;

        return (
            <div className="test-sidebar">
                <ul className="side-nav">
                    {sidebarConstants.SIDEBAR_MENU_ITEMS.map((item, index) =>
                    <SidebarItem key={index}
                                 item={item}
                                 activeItemId={activeItemId}
                                 setActiveItemId={this.props.setActiveItemId}/>)
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        activeItemId: state.sidebar.activeItemId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setActiveItemId: (activeItemId) => {
            dispatch(setActiveItemId(activeItemId));
        },
        resetActiveItemId: () => {
            dispatch(resetActiveItemId());
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);