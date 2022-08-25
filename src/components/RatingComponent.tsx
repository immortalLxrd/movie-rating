import React, {FunctionComponent} from 'react';
import Star from "./UI/Star";


type RatingProps = {
	rating: number,
	starsCount: number,
	setRating: (number: any) => any
}

const createArray = (length: number) => [...Array(length)]

const RatingComponent: FunctionComponent<RatingProps> = ({starsCount, rating, setRating}) => {

	return (
		<div className="mt-2 flex items-center">
			{createArray(starsCount).map((n, i) => (
				<React.Fragment key={i}>
					<Star selected={rating > i} setSelected={() => setRating(i + 1)}/>
				</React.Fragment>
			))}
		</div>
	);
};


export default RatingComponent;