import { expect } from '../dev_deps.ts';
import { testApp } from '../utils/test.ts';

Deno.test('services handler', async (t) => {
	await t.step(
		'happy path',
		async () => {
			let done: () => void;
			const donePromise = new Promise<void>((resolve) => done = resolve);

			const request = await testApp();
			request.post('/services')
				.set('Content-Type', 'application/json')
				.send('{"displayName":"superoak"}')
				.expect(200)
				.end((err, resp) => {
					if (err) {
						throw err;
					}
					expect(resp.body.id).not.toBeNull();
					expect(resp.body.display_name).toEqual('superoak');
					done();
				});
			await donePromise;
		},
	);
	await t.step(
		'invalid timestamp',
		async () => {
			const request = await testApp();
			await request.post('/services')
				.set('Content-Type', 'application/json')
				.send('{"displayName":"superoak", "goLiveTimestamp": "2022-30-30T00:00:00.000Z"}')
				.expect(400)
				.expect('{"error":"invalid goLiveTimestamp"}');
		},
	);
	await t.step(
		'valid timestamp',
		async () => {
			let done: () => void;
			const donePromise = new Promise<void>((resolve) => done = resolve);
			const request = await testApp();
			request.post('/services')
				.set('Content-Type', 'application/json')
				.send('{"displayName":"superoak", "goLiveTimestamp": "2022-12-30T00:00:00.000Z"}')
				.expect(200)
				.end((err, resp) => {
					if (err) {
						throw err;
					}
					expect(resp.body.go_live_ts).toEqual('2022-12-30T00:00:00.000Z');
					done();
				});
			await donePromise;
		},
	);
});
