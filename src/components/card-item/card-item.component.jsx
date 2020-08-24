import React from 'react';
import './card-item.css'

export const CardItem = (props) => (
	<div className="card-container">
		<img className="monster-img" src={`https://robohash.org/${props.monster.id}?set=set2&size=200x200`} alt="imagen de mounstruo" />
		<h1>{props.monster.name}</h1>
		<p>{props.monster.email}</p>
	</div>
);
