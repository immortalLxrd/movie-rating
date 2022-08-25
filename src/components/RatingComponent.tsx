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
		<div className="flex justify-end items-end">
			{createArray(starsCount).map((n, i) => (
				<React.Fragment key={i}>
					<Star selected={rating > i}
						  setSelected={() => (i+1 === rating) ? setRating(() => i) : setRating(() => i + 1)}
					/>
				</React.Fragment>
			))}
		</div>
	);
};


export default RatingComponent;