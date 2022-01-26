import React, { useEffect, useState } from 'react';
import './App.module.scss';
import { Header, Content, Card } from './components';
import { fetchLaunches, fetchRockets } from './services/request';

const App = () => {
	const [isFetching, setIsFetching] = useState(false);
	const [rockets, setRockets] = useState<Array<any>>([]);
	const [launches, setLaunches] = useState<Array<any>>([]);

	const enrichLaunchesWithRockets = (launches, rockets) => {
		if (launches.length === 0 || rockets.length === 0) return;
		return launches.map((launch) => {
			let rocketId = launch?.rocket?.rocket_id;
			let rocket = rockets.filter((rocket) => rocket?.rocket_id === rocketId);
			launch.rocket = rocket[0];
			return launch;
		});
	};

	useEffect(() => {
		const fetchData = async () => {
			setIsFetching(true);
			let launchesData = await fetchLaunches();
			let rocketsData = await fetchRockets();
			launchesData = enrichLaunchesWithRockets(launchesData, rocketsData);
			setLaunches(launchesData);
			setRockets(rocketsData);
			setIsFetching(false);
		};
		fetchData();
	}, []);

	return (
		<div className='App'>
			<Header />
			{launches.length > 0 && `total launches ${launches.length}`}
			<Content>
				{isFetching && <h1>fetching</h1>}
				{launches?.map((launch) => (
					<Card
						key={`${launch.flight_number}-${launch.mission_id[0]}`}
						title={launch?.mission_name}
						img={launch?.links?.flickr_images[0]}
						description={launch?.details}
						date={launch?.launch_date_unix}
					/>
				))}
			</Content>
		</div>
	);
};

export default App;
