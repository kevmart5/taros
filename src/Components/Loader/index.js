import React from 'react';
import Lottie from 'react-lottie';
import mainLoader from '../../assets/animations/main-loader.json';

const Loader = ({ loaderWidth, loaderHeight }) => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: mainLoader,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};

	return (
		<div>
			<Lottie
				options={defaultOptions}
				height={loaderHeight}
				width={loaderWidth}
			/>
		</div>
	);
};

export default Loader;
