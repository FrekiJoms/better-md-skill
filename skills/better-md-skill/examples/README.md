# Example CLI

A model GitHub README. Replace the project name, description, badges, and screenshots with your project's real ones — the structure is the point.

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Example CLI is a command-line tool that converts Markdown files to HTML with zero configuration. It is fast, dependency-free, and works on Node.js 20 and later.

## Features

- Converts CommonMark and GitHub Flavored Markdown to clean HTML
- Zero-configuration defaults with optional configuration file
- Watch mode for live previews
- Works offline, no network access required

## Installation

```bash
npm install -g example-cli
```

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

<!-- Replace this path with a real screenshot asset from your repository. -->
![Screenshot of the example-cli terminal output. The command converts a Markdown file and prints the resulting HTML path.](./docs/images/terminal-output.png)

## Tech Stack

This project uses the following technologies:

<p align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" width="40" alt="Node.js">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" width="40" alt="TypeScript">
</p>

## Documentation

- [API reference](./docs/API.md)
- [Tutorial: build a custom plugin](./docs/tutorial.md)
- [CLI specification](./docs/specification.md)

## Contributing

Contributions are welcome. Read [CONTRIBUTING.md](./CONTRIBUTING.md) to get started.

## License

[MIT](./LICENSE)