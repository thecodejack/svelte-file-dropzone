import * as path from 'path';

import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'$actions': path.resolve('./src/actions'),
			'$comps': path.resolve('./src/comps'),
			// we do this so in our SvelteKit example we'll use `import ... from 'svelte-file-dropzone'` just like a normal user
			'svelte-file-dropzone': path.resolve('./src/lib'),
		}
	},
};

export default config;
