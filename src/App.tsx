import React from 'react';
import MovieListComponents from "./components/MovieListComponents";


const uri = 'https://jsonplaceholder.typicode.com';

const App = () => {
	return (
		<div className="App container m-auto">
			<MovieListComponents uri={uri} limit={10} />
		</div>
	);
};

export default App;