import React, { useEffect, useState } from "react";
import icon_0 from '../../../assets/100x100/82.gif';
import icon_1 from '../../../assets/100x100/81.gif';
import icon_2 from '../../../assets/100x100/78.gif';
import icon_3 from '../../../assets/100x100/75.gif';
import icon_4 from '../../../assets/100x100/61.gif';
import icon_5 from '../../../assets/100x100/58.gif';
import icon_6 from '../../../assets/100x100/55.gif';
import icon_7 from '../../../assets/100x100/52.gif';
import icon_8 from '../../../assets/100x100/51.gif';
import icon_9 from '../../../assets/100x100/49.gif';

// Best loading gifs: 1 2 4 7 9 10 12 14 20 23 24 31 33 34 38 45 46 48 49 51 52 55 58 61 65 75 78 81 82

const icons = [icon_0, icon_1, icon_2, icon_3, icon_4, icon_5, icon_6, icon_7, icon_8, icon_9];

const Spinner = (props) => {

	const {isLoading} = props;
	const [icon, setIcon] = useState(null);

	useEffect(() => {
		setIcon(icons[Math.floor(Math.random() * icons.length)]);
	}, []);

	return (
		<div className={`spinner-overlay ${isLoading ? 'loading' : 'loaded'}`}>
			<div className="spinner-wrapper">
				<div className="spinner-div"/>
				<img className="spinner-img" src={icon}/>
			</div>
			<p className="spinner-text">Loading...</p>
		</div>
	);
};

export default Spinner;