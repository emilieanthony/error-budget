import { query } from './postgres.ts';

type Service = {
	id: number;
};

export const getServices = async () => {
	const data = await query('SELECT * FROM services');
	return data.rows as Service[];
};
