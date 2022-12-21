import { Pool, QueryArguments } from '../deps.ts';

const POOL_CONNECTIONS = 20;

const pool = new Pool(
	{
		database: Deno.env.get('DB_NAME') ?? 'errorbudget',
		hostname: Deno.env.get('DB_HOSTNAME') ?? '127.0.0.1',
		password: Deno.env.get('DB_PASSWORD') ?? 'postgres',
		port: Deno.env.get('DB_PORT') ?? 5432,
		user: Deno.env.get('DB_USER') ?? 'postgres',
	},
	POOL_CONNECTIONS,
	true,
);

export const query = async (query: string, args?: QueryArguments) => {
	const client = await pool.connect();
	let result;
	try {
		result = await client.queryObject(query, args);
	} finally {
		client.release();
	}
	return result;
};
