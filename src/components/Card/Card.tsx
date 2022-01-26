import React from 'react';
import moment from 'moment';
import style from './Card.module.scss';

const Card = ({ title, description, img, date }) => {
	return (
		<section className={style.card}>
			<img src={img} width='400' height='100' className={style.card__img} />
			<h1 className={style.card__title}>{title}</h1>
			<p className={style.card__description}>{description}</p>
			<time className={style.card__date}>{moment(date).format('MMM DD, YYYY')}</time>
		</section>
	);
};

export default Card;
