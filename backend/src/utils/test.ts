import { superoak } from '../dev_deps.ts';

export const testApp = () => superoak('http://localhost:3000');
