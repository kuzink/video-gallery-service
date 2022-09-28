import React from "react";
import ThumbnailSliderComponent from '../slider/ThumbnailSliderComponent';

const GridViewItemsComponent = (props) => {

	const {items, handleOnItemSelect} = props;

	return (
		<React.Fragment>
			{items.map((item, index) => (
				<div key={index} className="col-md-4 mb-4 pb-1">
					<div className="card shadow-sm position-relative">
						<ThumbnailSliderComponent itemName={item.name}
						                          thumbnails={item.thumbnails}
						                          initialThumbnailIndex={item.initialThumbnailIndex}
						                          handleOnItemSelect={handleOnItemSelect}/>
						<div className="custom-card-popover">{item.size}</div>
						<div className="card-body px-2 mx-1 py-1">
							<p className="card-text custom-card-text" title={item.name}>{item.name}</p>
						</div>
					</div>
				</div>
			))}
		</React.Fragment>
	);
};

export default GridViewItemsComponent;
