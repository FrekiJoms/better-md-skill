---
title: Example CLI
description: Zero-configuration Markdown to HTML converter for the command line
ms.date: 2026-08-15
ms.topic: overview
---

# Example CLI

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Example CLI is a command-line tool that converts Markdown files to HTML with zero configuration. It is fast, dependency-free, and works on Node.js 20 and later.

Use it when you need Markdown to HTML conversion without a build step or config file. It provides:

* CommonMark and GitHub Flavored Markdown support
* Watch mode for live previews
* Offline operation — no network access required

> [!NOTE]
> Example CLI is a single-purpose converter. It does not include a preview server, templating engine, or plugin system.

## Where to Start

1. Install: `npm install -g example-cli`.
2. Convert a file: `example-cli input.md`.
3. Open the generated `dist/input.html`.

> [!TIP]
> For live previews while editing:

```bash
example-cli --watch docs/
```

## Choose Your Path

* New to Example CLI: Start with the [Getting Started guide](docs/tutorial.md).
* Building a custom plugin: Read the [API reference](docs/API.md).
* Extending the CLI: See the [specification](docs/specification.md).

## Navigate This Repository

| Goal | Go here |
| --- | --- |
| Convert a file | [Usage](#usage) |
| Watch for changes | [Watch mode](#usage) |
| See every option | [Options](#options) |
| Build a plugin | [API reference](./docs/API.md) |
| Follow a tutorial | [Tutorial](./docs/tutorial.md) |
| Understand behavior | [Specification](./docs/specification.md) |
| Contribute | [Contributing](#contributing) |

## Usage

Convert a single file:

```bash
example-cli input.md
```

Convert a directory and watch for changes:

```bash
example-cli --watch docs/
```

### Options

| Option | Description | Default |
| --- | --- | --- |
| `--output, -o` | Output directory or file | `dist/` |
| `--watch, -w` | Rebuild on file changes | `false` |
| `--help, -h` | Show help | — |

## Screenshots

![Screenshot of the example-cli terminal output. The command converts a Markdown file and prints the resulting HTML path.](./docs/images/terminal-output.png)

## Tech Stack

This project uses the following technologies:

<p align="left">
  <img src="https://cdn.simpleicons.org/node.js/5FA04E" width="32" height="32" alt="Node.js">
  <img src="https://cdn.simpleicons.org/typescript/3178C6" width="32" height="32" alt="TypeScript">
</p>

## Documentation

| Guide | Description |
| --- | --- |
| [API reference](./docs/API.md) | Function signatures and options |
| [Tutorial](./docs/tutorial.md) | Build a custom plugin |
| [Specification](./docs/specification.md) | Exact CLI behavior |

## Contributing

1. Read [CONTRIBUTING.md](./CONTRIBUTING.md) to get started.
2. Check out [open issues](https://github.com/example/example-cli/issues).

## License

[MIT](./LICENSE)