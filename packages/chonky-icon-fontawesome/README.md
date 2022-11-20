# `chonky-icon-fontawesome-custom`

This package contains the icon component for [Chonky][chonky], a file browser component
for React. Please refer to [the official documentation][docs] for usage instructions.

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

[chonky]: https://chonky.io/
[docs]: https://chonky.io/docs/2.x/installation-usage
