import React from 'react';

const ItemCard = ({
	title,
	category,
	description,
	image,
	price,
	ratingCount,
	ratingRate,
}) => {
	return (
		<div  className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
			<h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
				{title}
			</h3>
			<span>{category}</span>
			<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
				{description}
			</p>
			<img
				className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
				src={image}
				alt=""
			/>
			<p>{price}</p>
			<span>{ratingCount}</span>
			<span>{ratingRate}</span>
		</div>
	);
};

export default ItemCard;
