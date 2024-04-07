<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import Dropzone from '../../../../src/lib/components/Dropzone.svelte';

	$: console.log($page.form);
</script>

<form method="POST" action="?/postFiles" use:enhance enctype="multipart/form-data">
	<Dropzone name="files" />

	<button>Go</button>
</form>

Files Posted:

<ul>
	{#each [] as file}
		<li>{file}</li>
	{/each}
</ul>
