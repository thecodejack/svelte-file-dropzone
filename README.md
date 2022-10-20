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
| filedropped      |             | `{event}`                              |
| droprejected     |             | `{fileRejections,event}`               |
| dropaccepted     |             | `{acceptedFiles,event}`                |
| filedialogcancel |             |                                        |

### Examples

[Click here](https://github.com/thecodejack/svelte-file-dropzone/tree/master/stories/views) to view stories implementation

## Build

### Setup

To build from the source code, you'll need to use `pnpm` (if not installed already, install by `npm install -g pnpm`). To setup the environment, run:

```bash
pnpm install
pnpm sync
```

### Build

To build the library, simply run `pnpm package`. The compiled output will be in the directory `package`.

### Storybook

You may view and build storybook examples of this library.

To see then you can run a storybook development server by `pnpm storybook`. Runing a development server is much quicker and more responsive to changes comparing to a full build.

To generate the static HTML of the storybook (i.e. full build, e.g. for hosting in static server), run `pnpm build-storybook`. You may launch a local static HTML server by `pnpm sirv-storybook`.

Note: On some node environments, you might see the following error:

```
node:internal/crypto/hash:67
  this[kHandle] = new _Hash(algorithm, xofLen);
                  ^

Error: error:0308010C:digital envelope routines::unsupported
```

To overcome this, set manually in console the environment variable `NODE_OPTIONS=--openssl-legacy-provider`. See https://stackoverflow.com/a/69746937/2968864 for details.

### SvelteKit Example

We also have a modified version of the official SvelteKit basic example, for showing how to use it on SvelteKit.

To explore it, start a Vite development server by `pnpm dev`.

If you wish to have a full build of the SvelteKit example project, run `pnpm build`. To see the results, run `pnpm preview`.

## Credits

Component is reimplementation [react-dropzone](https://github.com/react-dropzone/react-dropzone). Complete credit goes to author and contributors of [react-dropzone](https://github.com/react-dropzone/react-dropzone).

## License

MIT
