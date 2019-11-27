import React from 'react';
import './cardstyle.css';

const Card = props => {
	const { name, email, username, website, id } = props.monster;
	return (
		<div className="card-container">
			<img src={`https://robohash.org/${id}?set=set4`} alt="kitten" />
			<h4>{name}</h4>
			<span>{email}</span>
			<span>{username}</span>
			<span>{website}</span>
		</div>
	);
};

export default Card;
