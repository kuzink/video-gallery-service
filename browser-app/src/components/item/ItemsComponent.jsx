import React from "react";
import ImageSlider from '../slider/ImageSlider';

const ItemsComponent = (props) => {

	const {items, handleOnItemSelect} = props;

	return (
		<div className="album py-5 bg-light">
			<div className="container">
				<div className="row">
					{items.map(item => (
						<div className="col-md-4">
							<div className="card mb-4 shadow-sm">
								<ImageSlider itemName={item.name}
								             images={item.images}
								             handleOnItemSelect={handleOnItemSelect}/>
								<div className="card-body px-3 py-2">
									<p className="card-text custom-card-text" title={item.name}>{item.name}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ItemsComponent;
