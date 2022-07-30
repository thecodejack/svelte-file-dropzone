# Stuff in need of attention

## Initial `npm i`

```sh
npm WARN deprecated ini@1.3.5: Please update to ini >=1.3.6 to avoid a prototype pollution issue
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
npm WARN deprecated debug@3.2.6: Debug versions >=3.2.0 <3.2.7 || >=4 <4.3.1 have a low-severity ReDos regression when used in a Node.js environment. It
is recommended you upgrade to 3.2.7 or 4.3.1. (https://github.com/visionmedia/debug/issues/797)
npm WARN deprecated debug@4.1.1: Debug versions >=3.2.0 <3.2.7 || >=4 <4.3.1 have a low-severity ReDos regression when used in a Node.js environment. It
is recommended you upgrade to 3.2.7 or 4.3.1. (https://github.com/visionmedia/debug/issues/797)
npm WARN deprecated chokidar@2.1.8: Chokidar 2 will break on node v14+. Upgrade to chokidar 3 with 15x less dependencies.
npm WARN deprecated querystring@0.2.0: The querystring API is considered Legacy. new code should use the URLSearchParams API instead.
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known
to be problematic.  See https://v8.dev/blog/math-random for details.
npm WARN deprecated popper.js@1.16.1: You can find the new Popper v2 at @popperjs/core, this package is dedicated to the legacy v1
npm WARN deprecated highlight.js@9.13.1: Version no longer supported. Upgrade to @latest
```

## *Holy shit!*

### 43 vulnerabilities (19 moderate, `24 high`)


## After update to `Storybook 6.4.4`

```sh
$ npm i
npm WARN ERESOLVE overriding peer dependency
npm WARN While resolving: terser@5.10.0
npm WARN Found: acorn@7.4.1
npm WARN node_modules/acorn
npm WARN   acorn@"^7.3.1" from espree@7.2.0
npm WARN   node_modules/espree
npm WARN     espree@"7.2.0" from sveltedoc-parser@4.1.0
npm WARN     node_modules/sveltedoc-parser
npm WARN     1 more (eslint)
npm WARN   1 more (acorn-jsx)
npm WARN
npm WARN Could not resolve dependency:
npm WARN peerOptional acorn@"^8.5.0" from terser@5.10.0
npm WARN node_modules/terser-webpack-plugin/node_modules/terser
npm WARN   terser@"^5.3.4" from terser-webpack-plugin@4.2.3
npm WARN   node_modules/terser-webpack-plugin
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
npm WARN deprecated debug@4.1.1: Debug versions >=3.2.0 <3.2.7 || >=4 <4.3.1 have a low-severity ReDos regression when used in a Node.js environment. It is recommended you upgrade to 3.2.7 or 4.3.1. (https://github.com/visionmedia/debug/issues/797)
npm WARN deprecated chokidar@2.1.8: Chokidar 2 will break on node v14+. Upgrade to chokidar 3 with 15x less dependencies.
npm WARN deprecated querystring@0.2.0: The querystring API is considered Legacy. new code should use the URLSearchParams API instead.
npm WARN deprecated uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
npm WARN deprecated popper.js@1.16.1: You can find the new Popper v2 at @popperjs/core, this package is dedicated to the legacy v1
npm WARN deprecated highlight.js@9.13.1: Version no longer supported. Upgrade to @latest
npm WARN deprecated highlight.js@9.18.5: Support has ended for 9.x series. Upgrade to @latest
```

## Slightly better, but not much.

### 33 vulnerabilities (1 low, 13 moderate, `17 high`, `2 critical`)
