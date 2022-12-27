import { Context } from '../deps.ts';
import { createService, listServices } from '../domain/services.ts';

type CreateServiceInput = {
	displayName: string;
	description?: string;
	goLiveTimestamp?: string;
};

export const services = {
	list: async (ctx: Context) => {
		console.log('[Services Handler] Listing all services');
		ctx.response.body = await listServices();
	},
	create: async (ctx: Context) => {
		console.log('[Services Handler] Creating new service');
		if (!ctx.request.hasBody) {
			ctx.throw(400, 'invalid body');
		}
		const reqBody = await ctx.request.body().value as CreateServiceInput;
		if (!reqBody.displayName) {
			ctx.throw(400, 'displayName must be set');
		}
		let date: Date | undefined;
		if (reqBody.goLiveTimestamp) {
			date = new Date(reqBody.goLiveTimestamp);
			if (date.toString() === 'Invalid Date') {
				ctx.throw(400, 'invalid goLiveTimestamp');
			}
		}
		ctx.response.body = await createService({
			displayName: reqBody.displayName,
			goLiveTimestamp: date,
			description: reqBody.description ?? undefined,
		});
	},
};
