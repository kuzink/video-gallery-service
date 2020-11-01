import React from "react";

const ItemDetailsComponent = (props) => {

	const {itemDetails, handleCancel} = props;
	return (
		<div className="container mt-5">
			<div className="row">
				<div className="col-md-12 bg-white">

					<div className="py-4">
						<p className="d-inline-block">Item (id={itemDetails.id}, name={itemDetails.name})</p>
						<button className="btn btn-secondary float-right"
						        onClick={handleCancel}>Close</button>
					</div>

				</div>
			</div>
		</div>
	)
};

export default ItemDetailsComponent;
