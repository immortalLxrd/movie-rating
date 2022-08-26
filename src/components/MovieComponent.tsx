import React, {FunctionComponent, useState} from 'react';
import RatingComponent from "./RatingComponent";


type MovieProps = {
	title: string,
	img: string,
	rate: number
}

const MovieComponent: FunctionComponent<MovieProps> = ({title, img, rate}) => {
	const [rating, setRating] = useState<number>(rate);

	return (
		<div className="flex flex-col my-10 w-64 m-auto">
			<img className="w-full h-96 object-cover" src={img} alt={title}/>
			<h2 className="text-2xl my-3">{title}</h2>
			<RatingComponent
				starsCount={5}
				rating={rating}
				setRating={setRating}
			/>
		</div>
	);
};

export default MovieComponent;