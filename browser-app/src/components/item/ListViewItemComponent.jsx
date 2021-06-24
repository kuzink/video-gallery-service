import React from "react";
import DefaultThumbnail from '../../assets/defaultThumbnail.jpg';

const ListViewItemComponent = (props) => {

	const {items, handleOnItemSelect} = props;

	return (
		<React.Fragment>
			{items.map((item, index) => (
				<div key={index} className="col-md-8 offset-md-2">
					<div className={`card shadow-sm ${index === items.length - 1 ? 'mb-4' : 'mb-2'}`}>
						<div className="custom-list-view-item" onClick={handleOnItemSelect.bind(this, item.name)}>
							<div className="custom-list-view-item-left">
								<img src={item.thumbnails.length
									? `data:image/jpeg;base64,${item.thumbnails[0]}`
									: DefaultThumbnail}/>
							</div>
							<div className="p-4 custom-list-view-item-right">
								<div className="d-flex flex-row justify-content-between">
									<div>{item.name}</div>
									<div className="ml-4 custom-list-view-size">Size: {item.size}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</React.Fragment>
	);
};

export default ListViewItemComponent;
