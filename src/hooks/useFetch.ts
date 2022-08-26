import {useEffect, useState} from "react";

const useFetch = (uri: string) => {
	const [state, setState] = useState([]);

	useEffect(() => {
		fetch(uri)
			.then(response => response.json())
			.then(response => setState(response))
			.catch(err => console.error(err));
	}, [uri])

	return state;
};

export default useFetch;