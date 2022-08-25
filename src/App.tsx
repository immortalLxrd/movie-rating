import React from 'react';
import MovieComponent from "./components/MovieComponent";
import img1 from "./assets/img/sfc860fd56c5fks57w49e.jpg";
import img2 from "./assets/img/ocfc353fe4403ae19j57e.jpg";
import img3 from "./assets/img/idd968e9bcb38lw55x15m.jpg";


interface IMovie {
	title: string,
	img: string,
	rating: number
}

const movies: Array<IMovie> = [
	{
		title: "Omerta 6/12 / Attack on Finland",
		img: img1,
		rating: 4
	},
	{
		title: "Running with the Devil: The Wild World of John McAfee",
		img: img2,
		rating: 3
	},
	{
		title: "Tendre et saignant / The Butcher's Daughter",
		img: img3,
		rating: 5
	}
]

const App = () => {
	return (
		<div className="App flex flex-col justify-center container m-auto">
			{
				movies.map((item, i) => <MovieComponent key={i} title={item.title} img={item.img} rate={item.rating}/>)
			}
		</div>
	);
};

export default App;