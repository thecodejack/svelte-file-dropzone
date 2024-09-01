<script lang="ts">
	import Dropzone from '../../../../src/lib/components/Dropzone.svelte';

	let files = {
		accepted: [] as any[],
		rejected: [] as any[]
	};

	function handleFilesSelect(e: any) {
		const { acceptedFiles, fileRejections } = e.detail;
		files.accepted = [...files.accepted, ...acceptedFiles];
		files.rejected = [...files.rejected, ...fileRejections];
	}

	function clickToUpload() {
		document.getElementById('xyz')!.click();
	}
</script>

<section>
	<button on:click={clickToUpload}>Click to upload</button>
	<Dropzone on:drop={handleFilesSelect} id="xyz" />

	<ol>
		{#each files.accepted as item}
			<li>{item.name}</li>
		{/each}
	</ol>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
</style>
