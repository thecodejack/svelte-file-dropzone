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

	let disabled = false;
	$: dropAddedStyles = disabled
		? 'border-color: lightgray; cursor: not-allowed;'
		: 'border-color: blue';
</script>

<section>
	<label>Disable dropzone <input type="checkbox" bind:checked={disabled} /></label>
	<Dropzone {disabled} on:drop={handleFilesSelect} containerStyles={dropAddedStyles} />

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
