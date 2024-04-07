<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import Dropzone from '../../../../src/lib/components/Dropzone.svelte';

	let files: string[] = [];

	function handleFilesSelect(e: any) {
		const { acceptedFiles } = e.detail;
		files = [...acceptedFiles];
	}
</script>

<form method="POST" action="?/postFiles" use:enhance enctype="multipart/form-data">
	<Dropzone on:drop={handleFilesSelect} name="files" />

	<button>Go</button>
</form>

Files about to upload:
<ul>
	{#each files as file}
		<li>{file.name}</li>
	{/each}
</ul>

<hr />

Files posted to form action:
<ul>
	{#each $page.form?.files ?? [] as file}
		<li>{file}</li>
	{/each}
</ul>
