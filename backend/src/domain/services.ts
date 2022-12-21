import { getServices } from '../repository/services.ts';

export const listServices = () => {
	return getServices();
};
