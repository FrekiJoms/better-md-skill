---
title: My App
description: Open-source productivity app for task management, project tracking, and team collaboration — with offline mode and sync across all your devices
author: My App Team
ms.date: 2026-08-15
ms.topic: overview
keywords:
  - productivity
  - task-management
  - project-tracking
  - collaboration
  - offline
estimated_reading_time: 3
---

# My App

<p align="center">
  <img src="./assets/banner.svg" alt="My App banner" width="100%">
</p>

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/myapp/my-app/pulls)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org)

My App is an open-source productivity app for task management, project tracking, and team collaboration. It is designed to be powerful yet simple: even beginners can get started without reading documentation, and it works offline, syncing everything when you are back online.

Use it when you need to manage tasks and projects across all your devices. It provides:

* Task management with due dates and priorities
* Project tracking with progress bars and milestones
* Team collaboration with comments and file sharing
* Offline mode with automatic sync
* Custom themes and dark mode

> [!CAUTION]
> My App is a community-maintained open-source project. It is not a commercial product: there is no SLA, and features evolve through contributions. Evaluate it against your own requirements before depending on it in critical workflows.

## Where to Start

1. Install My App (see [Install](#install)).
2. Launch the app and log in.
3. Create your first task (see [Quick Start](#quick-start)).

> [!TIP]
> New here? Follow the [Quick Start](#quick-start) — it takes under a minute, and the [Tutorial](docs/tutorial.md) covers everything else.

## Choose Your Path

* New to My App: Start with [Quick Start](#quick-start) to finish your first workflow.
* Setting up an account: Use [Install](#install) to get the app running.
* Contributing to the project: Follow the [Contributing Guide](#contributing).

## Navigate This Repository

| Goal | Go here |
| --- | --- |
| See what the app does | [Features](#features) |
| Check the stack | [Tech Stack](#tech-stack) |
| Install the app | [Install](#install) |
| Complete your first task | [Quick Start](#quick-start) |
| Browse endpoints | [API](#api) |
| See the app in action | [Screenshots](#screenshots) |
| Read the docs | [Documentation](#documentation) |
| Reach the team | [Contact](#contact) |
| Contribute | [Contributing](#contributing) |

## Tech Stack

Built with:

<p align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="40" alt="React">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" width="40" alt="TypeScript">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" width="40" alt="Node.js">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" width="40" alt="PostgreSQL">
</p>

## Features

- Task management with due dates and priorities
- Project tracking with progress bars and milestones
- Team collaboration with comments and file sharing
- Sync across all your devices
- Offline mode so you can work without internet
- Custom themes and dark mode

## Install

1. Download the installer from [our website](https://www.myapp.example.com).
2. Run the installer.
3. Follow the setup wizard.

Or install from the command line:

```bash
npm install -g my-app
```

## Quick Start

1. Download the installer from [our website](https://www.myapp.example.com).
2. Run the installer.
3. Follow the setup wizard.
4. Log in with your account.
5. Create your first task.

## API

| Endpoint | Description |
| --- | --- |
| `/api/login` | Logs you in |
| `/api/tasks` | Gets your tasks |
| `/api/tasks` (POST) | Creates a new task |

See the [API documentation](docs/API.md) for details.

## Screenshots

<!-- VISUAL SUGGESTION [SCREENSHOT]:
Recommended file: `assets/screenshots/app-overview.png`

Add a screenshot of the main app screen here.
Show the task list, project progress bars, and the theme switcher.
Purpose: Give readers a visual preview of the app's interface.
-->

## Documentation

| Guide | Description |
| --- | --- |
| [API documentation](docs/API.md) | Every endpoint, request, and response |
| [Tutorial](docs/tutorial.md) | First task, projects, and collaboration |
| [Changelog](CHANGELOG.md) | Version history and migration notes |

## Contact

Email us at support@myapp.example.com.

## About us

We are a small team of developers who have been building My App for three years. Our mission is to make productivity fun and accessible for everyone.

## Contributing

1. Fork the repository and create a feature branch.
2. Add or improve a test for any behavior you change.
3. Open a pull request — see the [contributing guide](docs/tutorial.md) for details.

## License

[MIT](./LICENSE)