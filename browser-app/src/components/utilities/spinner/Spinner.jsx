import React, { useEffect, useState } from "react";
import icon_0 from '../../../assets/100x100/0.gif';
import icon_1 from '../../../assets/100x100/1.gif';

const icons = [icon_0, icon_1];

const Spinner = (props) => {

	const {isLoading} = props;
	const [icon, setIcon] = useState(null);

	useEffect(() => {
		setIcon(icons[Math.floor(Math.random() * icons.length)]);
	}, []);

	return (
		<div className={`spinner-overlay ${isLoading ? 'visible' : 'hidden'}`}>
			<div className="spinner-wrapper">
				<div className="spinner-div"/>
				<img className="spinner-img" src={icon}/>
			</div>
			<p className="spinner-text">Loading...</p>
		</div>
	);
};

export default Spinner;