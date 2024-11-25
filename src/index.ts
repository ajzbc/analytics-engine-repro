export default {
	async fetch(request, env, ctx): Promise<Response> {
		return new Response('Hello World!');
	},
	async scheduled(controller, env, ctx): Promise<void> {
		env.ANALYTICS.writeDataPoint({
			blobs: ['one'],
			doubles: [1],
		});
		env.ANALYTICS.writeDataPoint({
			blobs: ['two'],
			doubles: [2],
		});
		env.ANALYTICS.writeDataPoint({
			blobs: ['three'],
			doubles: [3],
		});
		env.ANALYTICS.writeDataPoint({
			blobs: ['four'],
			doubles: [4],
		});
	},
} satisfies ExportedHandler<Env>;
