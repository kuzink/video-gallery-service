import React from "react";
import ThumbnailSliderComponent from '../slider/ThumbnailSliderComponent';

const GridViewItemComponent = (props) => {

	const {items, handleOnItemSelect} = props;

	return (
		<React.Fragment>
			{items.map((item, index) => (
				<div key={index} className="col-md-4">
					<div className="card mb-4 shadow-sm position-relative">
						<ThumbnailSliderComponent itemName={item.name}
						                          thumbnails={item.thumbnails}
						                          handleOnItemSelect={handleOnItemSelect}/>
						<div className="custom-card-popover">{item.size}</div>
						<div className="card-body px-3 py-2">
							<p className="card-text custom-card-text" title={item.name}>{item.name}</p>
						</div>
					</div>
				</div>
			))}
		</React.Fragment>
	);
};

export default GridViewItemComponent;
