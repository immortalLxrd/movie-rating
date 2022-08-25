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
		<div className="my-10">
			<img src={img} alt=""/>
			<h2 className="text-3xl mt-2">{title}</h2>
			<RatingComponent starsCount={5} rating={rating} setRating={setRating}/>
		</div>
	);
};

export default MovieComponent;