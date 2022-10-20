<script>
  import Dropzone from "$lib";

  let files = [];
  let fileData = [];

  function processRawCSV(data) {
    const output = [];
    const rows = data.split("\n");
    for (let i = 0; i < rows.length; i++) {
      const cells = rows[i].split(",");
      output.push(cells);
    }
    return output;
  }

  function handleFilesSelect(e) {
    files = e.detail.acceptedFiles;

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = () => {
        const binaryStr = reader.result;
        fileData = processRawCSV(binaryStr);
      };
      console.log(reader.readAsText(files[i]));
    }
  }
</script>

<h1>Upload CSV file and preview same</h1>
<Dropzone on:drop={handleFilesSelect} multiple={false} accept=".csv" />

{#each files as item}
  <h2>{item.name}</h2>
{/each}

<table border="1">
  {#each fileData as row}
    <tr>
      {#each row as item}
        <td>{item}</td>
      {/each}
    </tr>
  {/each}
</table>
