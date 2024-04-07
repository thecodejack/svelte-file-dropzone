export const actions = {
	async postFiles({ request }) {
		const formData: FormData = await request.formData();
		const files = formData.getAll('files');

		return { files };
	}
};
