# `chonky-icon-fontawesome-custom`

This package contains the icon component for [Chonky][chonky], a file browser component
for React. Please refer to [the official documentation][docs] for usage instructions.

<p>
  <a href="https://www.npmjs.com/package/chonky-icon-fontawesome-custom">
    <img
      alt="NPM package"
      src="https://img.shields.io/npm/v/chonky-icon-fontawesome-custom.svg?style=flat&colorB=ffac5c"
    />
  </a>
  <a href="https://tldrlegal.com/license/mit-license">
    <img
      alt="MIT license"
      src="https://img.shields.io/npm/l/chonky-icon-fontawesome-custom?style=flat&colorB=dcd67a"
    />
  </a>
  <a href="https://www.npmjs.com/package/chonky-icon-fontawesome-custom">
    <img
      alt="NPM downloads"
      src="https://img.shields.io/npm/dt/chonky-icon-fontawesome-custom?style=flat&colorB=aef498"
    />
  </a>
  <a href="https://github.com/akbaruddin/Chonky">
    <img
      alt="GitHub stars"
      src="https://img.shields.io/github/stars/akbaruddin/Chonky?style=flat&colorB=50f4cc"
    />
  </a>
</p>

![Icons](https://i.ibb.co/HT857Pk/icons.png)

Storybook: https://637b776fe5a034549ff1e4cb-mdfulkhrat.chromatic.com/?path=/story/chonkyicon--icon-with-name

Docs: https://github.com/akbaruddin/Chonky/tree/2.x-tsup/packages/chonky-icon-fontawesome

## Usage

```shell
npm install chonky-custom@latest chonky-icon-fontawesome-custom@latest
```

```ts
import { setChonkyDefaults } from 'chonky-custom';
import { ChonkyIconFA } from 'chonky-icon-fontawesome-custom';
// Somewhere in your `index.ts`:
setChonkyDefaults({ iconComponent: ChonkyIconFA });
```
