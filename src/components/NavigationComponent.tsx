import React, {FunctionComponent} from 'react';


type NavigationProps = {
	page: number,
	setPage: (arg: number) => void
};

const NavigationComponent: FunctionComponent<NavigationProps> = ({page, setPage}) => {
	return (
		<div className="flex w-full justify-between mt-10">
			{
				!!(page - 1) && (<button
					className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
					onClick={() => page - 1 && setPage(page - 1)}
				>
					Prev
				</button>)
			}
			<h2 className="center">{page}</h2>
			<button
				className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
				onClick={() => setPage(page + 1)}
			>
				Next
			</button>
		</div>
	);
};


export default NavigationComponent;