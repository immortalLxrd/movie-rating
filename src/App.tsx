import React from 'react';
import MovieComponent from "./components/MovieComponent";


interface IMovie {
	title: string,
	img: string,
	rating: number
}

const movies: Array<IMovie> = [
	{
		title: "Omerta 6/12 / Attack on Finland",
		img: "https://static.hdrezka.ac/i/2022/8/25/q7ea87a959475ta97b86r.jpg",
		rating: 4
	},
	{
		title: "Running with the Devil: The Wild World of John McAfee",
		img: "https://static.hdrezka.ac/i/2022/8/24/ocfc353fe4403ae19j57e.jpg",
		rating: 3
	},
	{
		title: "Tendre et saignant / The Butcher's Daughter",
		img: "https://static.hdrezka.ac/i/2022/8/22/idd968e9bcb38lw55x15m.jpg",
		rating: 5
	}
]

const App = () => {
	return (
		<div className="App grid grid-cols-4 container m-auto">
			{
				movies.map((item, i) => <MovieComponent key={i} title={item.title} img={item.img} rate={item.rating}/>)
			}
		</div>
	);
};

export default App;