import React from "react";

import GridViewItemsComponent from "./GridViewItemsComponent";
import ListViewItemsComponent from "./ListViewItemsComponent";

const ItemsComponent = (props) => {

	const {isGridView, items, handleOnItemSelect} = props;

	return (
		<div className="custom-items-wrapper">
			<div className="container-fluid">
				<div className="row ">
					{isGridView ?
					<GridViewItemsComponent items={items} handleOnItemSelect={handleOnItemSelect}/> :
					<ListViewItemsComponent items={items} handleOnItemSelect={handleOnItemSelect}/>
					}
				</div>
			</div>
		</div>

	);
};

export default ItemsComponent;
