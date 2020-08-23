import React, { useState, useEffect } from 'react';

// Assets
import desktopLogo from '../../assets/logo.svg';
import mobileLogo from '../../assets/mobile-logo.svg';

// Styles
import { Img } from './Logo.css';

const useWindowWidth = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const windowResizeHandler = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', windowResizeHandler);
		return () => window.removeEventListener('resize', windowResizeHandler);
	}, []);

	return windowWidth;
};

const Logo = () => <Img src={useWindowWidth() >= 576 ? desktopLogo : mobileLogo} alt="flickit" />;

export default React.memo(Logo);