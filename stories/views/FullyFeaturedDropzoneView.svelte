<script>
  import Dropzone from "./../../src";

  let files = {
    accepted: [],
    rejected: []
  };

  function handleFilesSelect(e) {
    const { acceptedFiles, fileRejections } = e.detail;
    files.accepted = [...files.accepted, ...acceptedFiles];
    files.rejected = [...files.rejected, ...fileRejections];
  }

  function handleRemoveFile(e, index) {
    files.accepted.splice(index, 1);
    files.accepted = [...files.accepted];
  }
  function handleRemoveAll() {
    files.accepted = [];
  }
</script>

<style>
  :global(custom-dropzone) {
  }
</style>

<Dropzone
  on:drop={handleFilesSelect}
  accept={['image/*']}
  containerClass="custom-dropzone">
  <button>Choose images to upload</button>

  <p>or</p>
  <p>Drag and drop them here</p>
</Dropzone>
<div style="margin: 5px;">
  {#if files.accepted.length > 0}
    <button on:click={handleRemoveAll}>RemoveAll</button>
  {/if}
  {#each files.accepted as item, index}
    <div>
      <span>{item.name}</span>
      <button on:click={e => handleRemoveFile(e, index)}>Remove</button>
    </div>
  {/each}
</div>
