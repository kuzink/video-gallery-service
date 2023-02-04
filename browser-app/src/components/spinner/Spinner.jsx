import React from "react";
import Loading from '../../assets/loading.gif';

const Spinner = (props) => {

	const {isLoading, children} = props;

	return (
		<div>
			{!isLoading ?
			<div>

			</div> :
			<div className='custom-spinner in-progress'>
				<img src={Loading}/>
			</div>
			}
		</div>
	);
};

export default Spinner;