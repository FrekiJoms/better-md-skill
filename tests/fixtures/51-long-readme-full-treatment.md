# Delta CLI

Delta CLI is a command-line tool for diffing database schemas, generating migrations, and applying them across environments. It is fast, dependency-free, and works offline.

## Features

- Schema diffing with three-way merge support
- Migration generation in plain SQL
- Apply and rollback with per-environment configuration
- Dry-run mode with full change preview
- Workspace support for monorepos
- Custom naming conventions for tables and constraints
- Team workflow commands: review, approve, and share migration plans
- Extensions for PostgreSQL, MySQL, SQLite, and SQL Server
- Streaming output for large schemas
- JSON output for CI pipelines and scripting
- Delta file format versioning with automatic upgrade
- Checksum verification against drifted schemas
- Built-in backup and restore helpers
- Proxy support for restricted networks
- Color themes for dark and light terminals
- Auto-completion for bash, zsh, and fish
- Telemetry toggle and anonymous crash reporting
- Plugin system for custom validators
- Exit-code contract for automation
- Docker image with entrypoint wrapper

## Install

```bash
npm install -g delta-cli
```

## Quick Start

```bash
delta diff --from prod --to staging
delta apply --env staging --dry-run
delta apply --env staging
```

## CLI Reference

### Global options

| Option | Description |
| --- | --- |
| `--env, -e` | Environment to operate on (from `delta.config.json`) |
| `--verbose, -v` | Print every statement executed |
| `--quiet, -q` | Print only errors and the final summary |
| `--json` | Emit machine-readable JSON instead of text |
| `--no-color` | Disable ANSI colors |
| `--config` | Path to a custom config file |
| `--telemetry` | Override the telemetry setting |

### Commands

| Command | Description |
| --- | --- |
| `delta diff` | Compare two schemas and print the delta |
| `delta plan` | Generate a migration plan from a diff |
| `delta apply` | Apply a plan to an environment |
| `delta rollback` | Roll back the last applied plan |
| `delta verify` | Check a plan against the live schema |
| `delta review` | Print a plan in review format for team sharing |
| `delta init` | Bootstrap a `delta.config.json` |
| `delta doctor` | Diagnose config, driver, and connectivity issues |
| `delta plugin` | List, install, and remove plugins |
| `delta completion` | Generate shell completion scripts |

## Configuration

`delta.config.json` at the project root:

| Key | Type | Default | Description |
| --- | --- | --- | --- |
| `environments` | object | required | Map of environment names to connection settings |
| `environments.*.driver` | string | required | One of `postgres`, `mysql`, `sqlite`, `sqlserver` |
| `environments.*.host` | string | `localhost` | Database host |
| `environments.*.port` | number | driver default | Database port |
| `environments.*.database` | string | required | Database name |
| `environments.*.user` | string | — | Login user |
| `environments.*.password` | string | — | Login password (prefer `DELTA_PASSWORD` env var) |
| `environments.*.ssl` | boolean | `false` | Enable TLS |
| `migrations.path` | string | `./migrations` | Directory for generated plans |
| `migrations.autoupgrade` | boolean | `true` | Upgrade old delta files automatically |
| `migrations.checksum` | boolean | `true` | Verify checksums before applying |
| `naming.table_prefix` | string | `` | Prefix for generated table names |
| `naming.column_prefix` | string | `` | Prefix for generated column names |
| `naming.snake_case` | boolean | `true` | Convert identifiers to snake_case |
| `diff.ignore_whitespace` | boolean | `false` | Ignore whitespace in definitions |
| `diff.ignore_index_order` | boolean | `true` | Ignore index column order |
| `diff.max_preview_rows` | number | `50` | Row previews in dry-run output |
| `apply.batch_size` | number | `1000` | Statements per transaction batch |
| `apply.timeout` | number | `300` | Statement timeout in seconds |
| `apply.auto_backup` | boolean | `false` | Back up before applying |
| `proxy.url` | string | — | HTTP(S) proxy for remote calls |
| `telemetry.enabled` | boolean | `true` | Anonymous usage reporting |
| `theme` | string | `auto` | `auto`, `dark`, or `light` |
| `plugins` | array | `[]` | Plugin names to load |

## API

Delta CLI is a CLI, but every command has a JSON mode for scripting. The JSON envelope is stable:

| Field | Type | Description |
| --- | --- | --- |
| `version` | string | Delta format version used |
| `exitCode` | number | Command exit code |
| `warnings` | array | Non-fatal warnings |
| `errors` | array | Fatal errors |
| `summary` | object | Per-command summary (statements, tables, rows) |
| `plan` | object | The generated or applied plan |

## FAQ

**Does Delta work offline?** Yes. Diffing and plan generation never require network access.

**Can I use it with a database I do not own?** Yes — Delta only reads and writes what the plan says.

**Is the telemetry anonymous?** Yes, and it can be disabled with `delta config set telemetry.enabled false`.

**Do I need a Delta account?** No accounts, no SaaS, no license server.

**What happens if a migration fails halfway?** Apply runs inside a transaction; a failure rolls back the batch.

**Can I review a plan before it runs?** Always run `delta plan` and `delta review` before applying.

**Does it handle indexes and constraints?** Yes, including partial indexes and check constraints.

**Can Delta generate a plan from two live databases?** Yes — `delta diff --from a --to b` works on live connections.

**What is the delta file format?** A versioned, checksummed representation of the plan.

**Can I convert existing migrations?** `delta import` consumes common formats; see the migration guide.

## Troubleshooting

| Symptom | Cause | Fix |
| --- | --- | --- |
| `driver not found` | Driver not installed | Install the matching driver package |
| `checksum mismatch` | Plan edited by hand | Re-generate the plan with `delta plan` |
| `timeout exceeded` | Statement too slow | Raise `apply.timeout` |
| `config parse error` | Invalid JSON | Run `delta doctor` |
| `no environments` | Config missing | Run `delta init` |
| `proxy refused` | Proxy unreachable | Check `proxy.url` and network rules |

## Advanced usage

### Multiple environments

```bash
delta diff --from prod --to staging --json > plan.json
delta apply --env staging --dry-run
```

### Custom naming

```json
{
  "naming": { "table_prefix": "app_", "snake_case": true }
}
```

### Monorepo workspaces

Workspace files let one config drive many projects:

```bash
delta workspace add ./packages/api
delta diff --workspace api
```

### Plugins

```bash
delta plugin install delta-validator-enforce-soft-delete
delta plugin list
```

### JSON output in CI

```bash
delta plan --json | jq '.summary'
```

## Delta file format

A delta file is a versioned, checksummed JSON document with four sections:

| Section | Purpose |
| --- | --- |
| `meta` | Format version, generator, creation timestamp |
| `checksum` | SHA-256 of the plan body |
| `plan` | Ordered statements with per-statement metadata |
| `summary` | Table, row, and statement counts |

The checksum makes hand-editing visible: `delta verify` fails with a clear message instead of applying a tampered plan. Generate plans, never edit them by hand.

## Comparison with other tools

| Capability | Delta | Common alternatives |
| --- | --- | --- |
| Offline operation | Yes | Varies |
| Three-way diff | Yes | Rarely |
| Team review format | Built in | External tools |
| No SaaS dependency | Yes | Often required |
| JSON contract | Stable, versioned | Ad hoc |

## Support

| Channel | Where |
| --- | --- |
| Documentation | [Configuration reference](docs/configuration.md) |
| Community | GitHub Discussions |
| Bugs | Issue tracker with the `bug` label |
| Security | See the security policy in the repository |

## Related projects

- Schema linting for drift detection: see the plugin registry.
- Backup automation: see the backup section of the configuration reference.

## Changelog highlights

| Version | Highlights |
| --- | --- |
| 2.4 | Workspace support, JSON envelope v3 |
| 2.3 | Plugin system, telemetry toggle |
| 2.2 | Three-way diff, checksum verification |
| 2.1 | SQL Server driver, exit-code contract |
| 2.0 | Delta file format v2, `delta review` |

## Migration Guide

Delta 2.x is compatible with 1.x plan files; `migrations.autoupgrade` converts them on first use. Breaking changes are limited to the JSON envelope: `summary.statementCount` was renamed to `summary.statements`. See the changelog for the full list.

## Documentation

| Guide | Description |
| --- | --- |
| [Configuration reference](docs/configuration.md) | Every key, type, and default |
| [Migration guide](docs/migration.md) | Upgrading between major versions |
| [Plugin API](docs/plugin-api.md) | Write custom validators |
| [Changelog](CHANGELOG.md) | Version history and breaking changes |

## Contributing

1. Read [CONTRIBUTING.md](CONTRIBUTING.md) to get started.
2. Check out [open issues](https://github.com/delta-cli/delta/issues).
3. Join the [discussions](https://github.com/delta-cli/delta/discussions).

## License

[MIT](LICENSE)