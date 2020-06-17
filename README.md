# svelte-file-dropzone

Svelte implementation of [react-dropzone](https://github.com/react-dropzone/react-dropzone).

Storybook at https://svelte-file-dropzone.netlify.app/

## Installation

```
npm install svelte-file-dropzone

or

yarn add svelte-file-dropzone
```

## Usage

```
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
</script>

<Dropzone on:drop={handleFilesSelect} />
<ol>
  {#each files.accepted as item}
    <li>{item.name}</li>
  {/each}
</ol>
```

## API

### Props

| Prop Name             | Description                                                                              | Default Value |
| --------------------- | ---------------------------------------------------------------------------------------- | ------------- |
| accept                | Set accepted file types. See https://github.com/okonet/attr-accept for more information. | undefined     |
| disabled              |                                                                                          | false         |
| maxSize               |                                                                                          | Infinity      |
| minSize               |                                                                                          | 0             |
| multiple              | if true, multiple files can be selected at once                                          | true          |
| preventDropOnDocument | 1231                                                                                     | true          |
| noClick               | disable click events                                                                     | false         |
| noKeyboard            | disable keyboard events                                                                  | false         |
| noDrag                | disable drag events                                                                      | false         |
| containerClasses      | custom container classes                                                                 | ""            |
| containerStyles       | custom inline container styles                                                           | ""            |
| disableDefaultStyles  | don't apply default styles to container                                                  | false         |

### Events

| Event Name       | Description | `event.detail` info                    |
| ---------------- | ----------- | -------------------------------------- |
| dragenter        |             | `{dragEvent: event}`                   |
| dragover         |             | `{dragEvent: event}`                   |
| dragleave        |             | `{dragEvent: event}`                   |
| drop             |             | `{acceptedFiles,fileRejections,event}` |
| droprejected     |             | `{fileRejections,event}`               |
| dropaccepted     |             | `{acceptedFiles,event}`                |
| filedialogcancel |             |                                        |

## Credits

Component is reimplementation [react-dropzone](https://github.com/react-dropzone/react-dropzone). Thanks goes to author and contributors of [react-dropzone](https://github.com/react-dropzone/react-dropzone).

## License

MIT
