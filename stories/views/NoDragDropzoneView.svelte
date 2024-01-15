<script>
  import Dropzone from "../../src/lib/components/Dropzone.svelte";

  let files = {
    accepted: [],
    rejected: [],
  };

  function handleFilesSelect(e) {
    const { acceptedFiles, fileRejections } = e.detail;
    files.accepted = [...files.accepted, ...acceptedFiles];
    files.rejected = [...files.rejected, ...fileRejections];
  }
</script>

<Dropzone on:drop={handleFilesSelect} noDrag />
<ol>
  {#each files.accepted as item}
    <li>{item.name}</li>
  {/each}
</ol>
