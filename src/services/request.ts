import axios from 'axios';

let spacexBaseURL = 'https://api.spacexdata.com/v3';

const fetchRockets = async () => {
	return await axios
		.get(`${spacexBaseURL}/rockets`)
		.then(({ data }) => data)
		.catch((err) => console.log(`error fetching data: ${err}`));
};

const fetchLaunches = async () => {
	return await axios
		.get(`${spacexBaseURL}/launches`)
		.then(({ data }) => data)
		.catch((err) => console.log(`error fetching data: ${err}`));
};

export { fetchRockets, fetchLaunches };
