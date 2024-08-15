# eslint-config-broadside 🏴‍☠️

Ahoy, matey! Welcome aboard the most swashbuckling ESLint configuration this side of the seven seas! 🦜

## What's this treasure chest all about?

`eslint-config-broadside` is a powerful ESLint configuration that'll make your code shine brighter than a freshly polished doubloon. It's designed to work with a variety of projects, from simple JavaScript scripts to complex TypeScript applications, using the new ESLint flat config format.

## Features

- 🏴‍☠️ Comprehensive rule set to catch even the sneakiest of code smells
- 🦜 TypeScript support that'll make your types sing like a parrot
- 🗺️ Customizable options for when you need to chart your own course
- 🔧 Built-in prettier configuration to make your code look shipshape
- 🆕 Support for the new ESLint flat config format

## Installation

First, hoist the colors and run:

```bash
npm install --save-dev eslint-config-broadside
```

## Usage

### Basic Configuration

Create an `eslint.config.js` file in your project root and import the configuration:

```javascript
import { config } from "eslint-config-broadside";

export default config();
```

### Advanced Configuration

For more control over your linting rules, you can use the `tsEslintConfig` function:

```javascript
import { tsEslintConfig } from "eslint-config-broadside";

export default tsEslintConfig({
  parserOptions: {
    // Your custom parser options
  },
  globals: {
    // Your global variables
  },
  expertMode: true, // Enable expert mode for less strict rules
});
```

### Running ESLint

Once configured, run your regular ESLint commands:

```bash
npx eslint .
```

## Configuration Options

The `tsEslintConfig` function accepts an options object with the following properties:

- `parserOptions`: Custom parser options for TypeScript
- `globals`: Global variables to be defined for all files
- `expertMode`: Enable less strict rules for experienced developers (default: false)

## Migrating from .eslintrc

If you're moving from the old `.eslintrc` format, here are some key differences:

1. Use `eslint.config.js` instead of `.eslintrc.js`
2. The new format uses a flat array of config objects instead of nested extends
3. Plugin and parser configurations are now included in the config objects

For a detailed migration guide, check out the [ESLint Configuration Migration Guide](https://eslint.org/docs/latest/use/configure/configuration-files-new).

## Customizing Rules

To override or extend rules, create your custom config object and spread it after the base config:

```javascript
import { config } from "eslint-config-broadside";

export default [
  ...config(),
  {
    rules: {
      // Your custom rules here
    },
  },
];
```

## Contributing

We welcome all hands on deck! Check out our [CONTRIBUTING.md](/.github/CONTRIBUTING.md) file to learn how to join our crew.

## Code of Conduct

We run a tight ship here. Read our [Code of Conduct](/.github/CODE_OF_CONDUCT.md) to make sure you play nice with the other pirates.

## Security

Found a leak in our hull? Don't let us sink! Check out our [SECURITY.md](/.github/SECURITY.md) for information on reporting vulnerabilities.

## License

This treasure is protected by the [GNU Affero General Public License v3.0](LICENSE). Share and share alike, but keep it open source, ye scurvy dogs!

## Final Words

Remember, a clean codebase is like a well-maintained ship - it'll take you far and wide across the digital seas. Now hoist the mainsail, and may your code be ever bug-free and your linting errors few!

Fair winds and following seas, me hearties! 🏴‍☠️
