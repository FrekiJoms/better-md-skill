# API reference

A model API reference for the Example CLI. Signatures are exact and copyable; identifiers must never be reformatted.

## `convert(input, options?)`

Converts Markdown text to HTML.

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `input` | `string` | Yes | Markdown source text |
| `options` | `ConvertOptions` | No | Conversion options |

**Returns:** `Promise<string>` — the generated HTML.

**Throws:** `SyntaxError` when the input is not valid UTF-8.

### Example

```js
import { convert } from "example-cli";

const html = await convert("# Hello\n\nWorld");
console.log(html);
```

### Options

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `gfm` | `boolean` | `true` | Enable GitHub Flavored Markdown extensions |
| `breaks` | `boolean` | `false` | Render soft breaks as `<br>` |
| `headerIds` | `boolean` | `true` | Add `id` attributes to headings |

## `watch(directory, options?)`

Watches a directory and rebuilds changed Markdown files.

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `directory` | `string` | Yes | Directory to watch |
| `options` | `WatchOptions` | No | Watch options |

**Returns:** `WatchHandle` with `.close()` to stop watching.

### Example

```js
import { watch } from "example-cli";

const handle = watch("./docs", { output: "./dist" });
```

### Options

| Property | Type | Default | Description |
| --- | --- | --- | --- |
| `output` | `string` | `dist/` | Output directory |
| `debounceMs` | `number` | `100` | Debounce interval in milliseconds |

## Errors

| Error | When |
| --- | --- |
| `SyntaxError` | Input is not valid UTF-8 |
| `ENOENT` | Input file does not exist |

## Related

- [Tutorial: build a custom plugin](./tutorial.md)
- [CLI specification](./specification.md)