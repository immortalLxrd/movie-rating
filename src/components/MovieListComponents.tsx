import React, {FunctionComponent, useState} from 'react';
import useFetch from "../hooks/useFetch";
import MovieComponent from "./MovieComponent";
import NavigationComponent from "./NavigationComponent";


type MovieListProps = {
	uri: string,
	limit: number
};

interface IMovie {
	albumId: number;
	id: number;
	title: string;
	url: string;
	thumbnailUrl: string;
}


const MovieListComponents: FunctionComponent<MovieListProps> = ({uri, limit}) => {
	const [page, setPage] = useState<number>(1);
	const data: IMovie[] = useFetch(`${uri}/photos?_start=${page * limit - limit}&_limit=${limit}`);

	return (
		<>
			<NavigationComponent page={page} setPage={setPage}/>
			<div className="flex flex-wrap gap-4">
				{
					data && data.map((item: any) =>
						<MovieComponent
							key={item.id}
							title={item.title}
							img={item.url}
							rate={0}
						/>
					)
				}
			</div>
		</>
	);
};


export default MovieListComponents;