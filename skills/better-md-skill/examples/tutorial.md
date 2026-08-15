# Tutorial: Build a custom plugin for Example CLI

A model tutorial. Each step ends with a verifiable result, and every code block runs as written.

## Prerequisites

- Node.js 20 or later
- Example CLI 2.x installed: `npm install -g example-cli`

## Step 1: Create the plugin file

Create a file named `uppercase.plugin.js`:

```js
export default {
  name: "uppercase",
  transform: (html) => html.toUpperCase(),
};
```

## Step 2: Enable the plugin

Create a `example-cli.config.json` in the same directory:

```json
{
  "plugins": ["./uppercase.plugin.js"]
}
```

## Step 3: Run the converter

Run the converter on a test file:

```bash
example-cli test.md
```

You should see output similar to:

```text
Built dist/test.html
```

## Step 4: Verify the output

Open `dist/test.html`. All text should be uppercase. If it is not, confirm the config file is in the same directory as the command.

## Step 5: Ship it

Commit both files and share the plugin directory with your team:

```bash
git add uppercase.plugin.js example-cli.config.json
git commit -m "Add uppercase plugin"
```

## Next steps

- Read the [API reference](./API.md) to explore hooks beyond `transform`
- See the [CLI specification](./specification.md) for full plugin lifecycle details