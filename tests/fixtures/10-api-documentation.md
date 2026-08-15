# Widget Toolkit API reference

This document is deliberately long to exercise large-document handling. Every signature below must remain byte-identical through any edit.

## `createWidget(options)`

Creates a widget instance.

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `options.tag` | `string` | Yes | HTML tag name for the widget root |
| `options.attrs` | `Record<string, string>` | No | Attributes applied to the root |
| `options.hooks` | `WidgetHooks` | No | Lifecycle hooks |

**Returns:** `Widget`

```js
const widget = createWidget({ tag: "div", attrs: { role: "button" } });
```

## `Widget`

The widget instance returned by `createWidget`.

### `widget.render()`

Renders the widget into a detached DOM node.

**Returns:** `HTMLElement`

### `widget.destroy()`

Removes the widget from the DOM and releases listeners.

**Returns:** `void`

### `widget.setProps(props)`

Merges new props into the widget.

**Returns:** `Widget` — the widget itself, for chaining.

```js
widget.setProps({ label: "Cancel" }).render();
```

## `createTheme(name)`

Registers a theme by name.

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | Yes | Theme name, kebab-case |

**Returns:** `ThemeHandle`

### `ThemeHandle.setToken(token, value)`

Sets a design token on the theme.

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `token` | `string` | Yes | Token name, e.g. `color.bg` |
| `value` | `string` | Yes | Token value |

**Returns:** `void`

## `attach(container, widgets)`

Attaches widgets to a container element.

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `container` | `HTMLElement` | Yes | Container element |
| `widgets` | `Widget[]` | Yes | Widgets to attach |

**Returns:** `DetachHandle` with `.detach()`.

## Errors

| Error | When |
| --- | --- |
| `TypeError` | `options` is not an object |
| `RangeError` | Widget count exceeds the platform limit |
| `NotFoundError` | Container is not attached to the document |

## Event model

Widgets emit events through a small emitter:

- `mount` — after `render()` is attached
- `update` — after `setProps()` with changed values
- `destroy` — during `destroy()`

```js
widget.on("mount", () => console.log("mounted"));
```

## Examples

### Counter widget

```js
import { createWidget } from "widget-toolkit";

const counter = createWidget({
  tag: "button",
  hooks: {
    mount: (self) => {
      let count = 0;
      self.el.addEventListener("click", () => {
        count += 1;
        self.el.textContent = `Count: ${count}`;
      });
    },
  },
});

document.body.appendChild(counter.render());
```

### Themed application

```js
import { attach, createTheme, createWidget } from "widget-toolkit";

const theme = createTheme("ocean");
theme.setToken("color.bg", "#0b3d6e");
theme.setToken("color.fg", "#e8f0fe");

attach(document.body, [createWidget({ tag: "div" })]);
```

## Related

- [Getting started](./guide/getting-started.md)
- [Theming guide](./guide/theming.md)
- [Tutorial: custom widgets](./tutorial.md)