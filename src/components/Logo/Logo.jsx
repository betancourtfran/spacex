import React from 'react';
import Logo_Spacex from '../../assets/spacex.png';
import style from './Logo.module.scss';

const Logo = () => {
	return (
		<div className={style.container}>
			<img src={Logo_Spacex} alt='Spacex Logo' />
		</div>
	);
};

export default Logo;
