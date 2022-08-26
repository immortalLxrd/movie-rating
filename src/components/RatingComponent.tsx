import React, {FunctionComponent} from 'react';
import Star from "./UI/Star";


type RatingProps = {
	rating: number,
	starsCount: number,
	setRating: (arg: number) => void
}

const createArray = (length: number) => [...Array(length)]

const RatingComponent: FunctionComponent<RatingProps> = ({starsCount, rating, setRating}) => {

	return (
		<div className="flex mt-auto">
			{createArray(starsCount).map((n, i) => (
				<React.Fragment key={i}>
					<Star
						selected={rating > i}
						setSelected={() => (i + 1 === rating) ? setRating(i) : setRating(i + 1)}
					/>
				</React.Fragment>
			))}
		</div>
	);
};


export default RatingComponent;