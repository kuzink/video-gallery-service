import React from "react";

const ItemsComponent = (props) => {

	const {items, handleOnItemSelect} = props;

	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12 bg-white">

					<div className="py-4">
						<h4>Items</h4>
						{items.map(item => (
							<div>
								<hr/>
								<p className="d-inline-block">Item (id={item.id}, name={item.name})</p>
								<button className="float-right btn btn-primary"
								        onClick={handleOnItemSelect.bind(this, item.id)}>Play</button>
							</div>
						))}
					</div>

				</div>
			</div>
		</div>
	);
};

export default ItemsComponent;
