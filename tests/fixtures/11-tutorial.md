# Tutorial: Create your first widget

Learn how to build and mount your first widget.

## Prerequisites

- Node.js 18 or later
- Widget Toolkit 3.x

## Step 1: Install the toolkit

```bash
npm install widget-toolkit
```

## Step 2: Create the widget

Create `counter.js`:

```js
import { createWidget } from "widget-toolkit";

export const counter = createWidget({
  tag: "button",
  hooks: {
    mount: (self) => {
      self.el.textContent = "0";
      self.el.addEventListener("click", () => {
        const n = Number(self.el.textContent) + 1;
        self.el.textContent = String(n);
      });
    },
  },
});
```

## Step 3: Mount it

```js
import { counter } from "./counter.js";

document.body.appendChild(counter.render());
```

You should see a button labeled `0`. Clicking it increments the label.

## Step 4: Style it

Add a theme token:

```js
const theme = createTheme("demo");
theme.setToken("color.bg", "#fafafa");
```

Reload the page. The button should now sit on the themed background.

## Next steps

- Read the [API reference](./API.md)
- Try the [theming guide](./theming.md)