import React from 'react';
import style from './Content.module.scss';

interface IContentProps {
	children: any;
}

const Content = ({ children }: IContentProps) => {
	return <div className={style.container}>{children}</div>;
};

export default Content;
