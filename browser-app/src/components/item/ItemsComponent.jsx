import React from "react";

import GridViewItemComponent from "./GridViewItemComponent";
import ListViewItemComponent from "./ListViewItemComponent";

const ItemsComponent = (props) => {

	const {isGridView, items, handleOnItemSelect} = props;

	return (
		<div className="container">
			<div className="row">
				{isGridView
					? <GridViewItemComponent items={items} handleOnItemSelect={handleOnItemSelect}/>
					: <ListViewItemComponent items={items} handleOnItemSelect={handleOnItemSelect}/>
				}
			</div>
		</div>
	);
};

export default ItemsComponent;
