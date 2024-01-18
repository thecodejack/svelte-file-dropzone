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

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
