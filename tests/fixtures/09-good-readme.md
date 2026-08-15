# Widget Toolkit

A library for building accessible UI widgets with no dependencies.

## Features

- Framework agnostic
- Keyboard navigation built in
- Theme support via CSS variables

## Installation

```bash
npm install widget-toolkit
```

## Usage

```js
import { Button } from "widget-toolkit";

const button = new Button({ label: "Save" });
document.body.appendChild(button.render());
```

## API

See the [API reference](./docs/API.md).

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

[MIT](./LICENSE)