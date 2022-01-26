import React from 'react';
import { Logo } from '../Logo';
import style from './Header.module.scss';

const Header = () => {
	return (
		<div className={style.header}>
			<div>
				<Logo />
			</div>
		</div>
	);
};

export default Header;
