# svelte-file-dropzone

[![NPM](https://img.shields.io/npm/v/svelte-file-dropzone.svg)](https://www.npmjs.com/package/svelte-file-dropzone)
[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/svelte-file-dropzone.svg)](https://www.npmjs.com/package/svelte-file-dropzone)

SvelteJS component for file upload and dropzone.The component is Svelte implementation of [react-dropzone](https://github.com/react-dropzone/react-dropzone).

## Demo

[Click here for Storybook link](https://svelte-file-dropzone.netlify.app/?path=/info/examples--basic-dropzone)

## Installation

```
npm install svelte-file-dropzone

or

yarn add svelte-file-dropzone
```

## Usage

```svelte
<script>
  import Dropzone from "svelte-file-dropzone";

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

| Prop Name             | Description                                                                              | Default Value                                             |
| --------------------- | ---------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| accept                | Set accepted file types. See https://github.com/okonet/attr-accept for more information. | undefined                                                 |
| disabled              |                                                                                          | false                                                     |
| maxSize               |                                                                                          | Infinity                                                  |
| minSize               |                                                                                          | 0                                                         |
| multiple              | if true, multiple files can be selected at once                                          | true                                                      |
| preventDropOnDocument | 1231                                                                                     | true                                                      |
| noClick               | disable click events                                                                     | false                                                     |
| noKeyboard            | disable keyboard events                                                                  | false                                                     |
| noDrag                | disable drag events                                                                      | false                                                     |
| containerClasses      | custom container classes                                                                 | ""                                                        |
| containerStyles       | custom inline container styles                                                           | ""                                                        |
| containerText         | customize the default text in the container                                              | "Drag 'n' drop some files here, or click to select files" |
| disableDefaultStyles  | don't apply default styles to container                                                  | false                                                     |

### Events

| Event Name       | Description | `event.detail` info                    |
| ---------------- | ----------- | -------------------------------------- |
| dragenter        |             | `{dragEvent: event}`                   |
| dragover         |             | `{dragEvent: event}`                   |
| dragleave        |             | `{dragEvent: event}`                   |
| drop             |             | `{acceptedFiles,fileRejections,event}` |
| filedropped      |             | `{event}`                              |
| droprejected     |             | `{fileRejections,event}`               |
| dropaccepted     |             | `{acceptedFiles,event}`                |
| filedialogcancel |             |                                        |

### Examples

[Click here](https://github.com/thecodejack/svelte-file-dropzone/tree/master/stories/views) to view stories implementation

## Credits

Component is reimplementation [react-dropzone](https://github.com/react-dropzone/react-dropzone). Complete credit goes to author and contributors of [react-dropzone](https://github.com/react-dropzone/react-dropzone).

## License

MIT
