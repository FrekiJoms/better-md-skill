# Tutorial: Building a Plugin

This tutorial shows how to build a plugin for the Delta ecosystem.

## Prerequisites

- Node.js 20 or later
- A Delta installation

## Step 1: Scaffold

```bash
npx delta plugin init my-plugin
```

## Step 2: Implement the hook

```js
export const plugin = {
  name: "my-plugin",
  hooks: { beforeRun: (ctx) => ctx.log("starting") },
};
```

## Step 3: Test

```bash
npx delta test my-plugin
```

## Next steps

See the plugin API reference for the full hook list.