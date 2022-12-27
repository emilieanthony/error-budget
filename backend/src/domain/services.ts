import { getServices, insertService } from '../repository/services.ts';

type CreateServiceInput = {
	displayName: string;
	description?: string;
	goLiveTimestamp?: Date;
};

export const listServices = () => {
	return getServices();
};

export const createService = (input: CreateServiceInput) => {
	return insertService(input);
};
