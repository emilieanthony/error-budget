import { Context } from '../deps.ts';
import { listServices } from '../domain/services.ts';

export const services = {
	list: async (ctx: Context) => {
		console.log('[Services Handler] Listing all services');
		ctx.response.body = await listServices();
	},
};
