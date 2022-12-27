import { query } from './postgres.ts';

type Service = {
	id: number;
	displayName: string;
	description: string;
	goLiveTimestamp: Date;
};

type CreateServiceInput = {
	displayName: string;
	description?: string;
	goLiveTimestamp?: Date;
};

export const getServices = async () => {
	const data = await query('SELECT * FROM services');
	return data.rows as Service[];
};

export const insertService = async (
	{ displayName, description, goLiveTimestamp }: CreateServiceInput,
) => {
	const id = crypto.randomUUID();
	const data = await query(
		'INSERT INTO services(id,display_name,description,go_live_ts) VALUES ($1,$2,$3,$4) RETURNING *',
		[id, displayName, description, goLiveTimestamp],
	);
	if (data.rowCount !== 1) {
		throw new Error('creating service');
	}
	return data.rows[0] as Service;
};
