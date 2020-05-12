console.log('PROCESS', process.env);
export const DEVELOMENT_PORT_URL = 'http://localhost:3120';
export const PRODUCTION_PORT_URL = 'https://backendtarogarage.herokuapp.com';

export const getUrlApi = () => {
	const url =
		process.env.NODE_ENV === 'development'
			? DEVELOMENT_PORT_URL
			: PRODUCTION_PORT_URL;
	return url;
};

export const API_URL = getUrlApi();
