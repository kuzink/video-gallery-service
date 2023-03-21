import React from "react";
import ThumbnailSliderComponent from './ThumbnailSliderComponent';

const GridViewItemsComponent = (props) => {

	const {items, handleOnItemSelect} = props;

	return (
		<React.Fragment>
			{items.map((item, index) => (
				<div id={index} key={index} className="col-3 custom-col mb-4">
					<div className="card custom-card shadow-sm">
						<ThumbnailSliderComponent item={item}
						                          handleOnItemSelect={handleOnItemSelect}/>
						<div className="custom-card-popover">{item.size}</div>
						<div className="card-body custom-card-body">
							<p className="card-text custom-card-text" title={item.name}>{item.name}</p>
						</div>
					</div>
				</div>
			))}
		</React.Fragment>
	);
};

export default GridViewItemsComponent;
