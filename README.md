# eslint-config-broadside 🏴‍☠️

Ahoy, matey! Welcome aboard the most swashbuckling ESLint configuration this side of the seven seas! 🦜

## What's this treasure chest all about?

`eslint-config-broadside` is a powerful ESLint configuration that'll make your code shine brighter than a freshly polished doubloon. It's designed to work with a variety of projects, from simple JavaScript scripts to complex TypeScript applications, using the new ESLint flat config format.

## Features

- 🦜 TypeScript support
- 🏴‍☠️ Comprehensive rule set to catch even the sneakiest of code smells
- 🗺️ High quality, opinionated rules to keep your codebase clean and consistent
- 🔧 Built-in prettier configuration to make your code look shipshape
- 🆕 First class support for the new ESLint flat config format
- 🧩 Optional plugins for even more linting power

## Installation

First, hoist the colors and run:

```bash
npm install --save-dev eslint-config-broadside eslint
```

## Usage



### Basic Configuration

Create an `eslint.config.js` file in your project root and import the configuration:

```javascript
import { config } from "eslint-config-broadside";

export default await config();
```




### Advanced Configuration (JavaScript Projects)

For more control over your linting rules, use the `config` function:

```javascript
import { config } from "eslint-config-broadside";

export default (async () => {
  const baseConfig = await config({
    globals: {
      // Your global variables
    },
    parserOptions: {
      // Your custom parser options
    },
  });
  return [
    ...baseConfig,
    {
      rules: {
        // Your custom rules here
        "no-console": "warn", // Example: Warn about console.log usage
      },
    },
  ];
})();
```

### Advanced Configuration (TypeScript Projects)

For more control over your linting rules and TypeScript support, use the `tsEslintConfig` function:

```javascript
import { tsEslintConfig } from "eslint-config-broadside";
import tsEslint from 'typescript-eslint';

export default (async () => {
  const baseConfig = await tsEslintConfig({
    parserOptions: {
      project: './tsconfig.json', // Point to your TypeScript config
    },
    globals: {
      // Your global variables
    },
  });

  return tsEslint.config(
    ...baseConfig,
    {
      rules: {
        // Your custom rules here
        "@typescript-eslint/no-explicit-any": "error", // Example: Disallow 'any' type
      },
    }
  );
})();
```

### Running ESLint

Once configured, run your regular ESLint commands:

```bash
npx eslint .
```

## Configuration Options

The `tsEslintConfig` function accepts an options object with the following properties:

- `parserOptions`: Custom parser options for TypeScript (e.g., specifying your `tsconfig.json`)
- `globals`: Global variables to be defined for all files


## Optional Plugins: Your Secret Weapons

`eslint-config-broadside` supports integration with several third-party ESLint plugins. These plugins are optional and provide additional linting capabilities:

1. `eslint-plugin-jsdoc`: Keeps your documentation shipshape and Bristol fashion.
2. `eslint-plugin-unicorn`: Adds a treasure trove of additional ESLint rules to make your code truly legendary.
3. `eslint-plugin-security`: Protects your code from common security vulnerabilities, keeping your ship safe from digital pirates.

To use these plugins, you need to install them separately in your project. You can do this by running:

```bash
npm install --save-dev eslint-plugin-jsdoc eslint-plugin-unicorn eslint-plugin-security
```

Or for a specific plugin:

```bash
npm install --save-dev eslint-plugin-jsdoc
```

Once installed, `eslint-config-broadside` will automatically detect and configure these third-party plugins. If they're not installed, your configuration will still work, just without the additional rules these plugins provide.

For more information about these plugins, visit their respective GitHub repositories:
- [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc)
- [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)
- [eslint-plugin-security](https://github.com/eslint-community/eslint-plugin-security)


## Troubleshooting

If ye be encountering any issues, check these common solutions:

1. Make sure all peer dependencies are installed and up to date
2. Check that your `eslint.config.js` is in the correct location
3. Ensure your TypeScript version is compatible (we require ^5.5.4)
4. If using optional plugins, verify they're installed correctly
5. Double-check your configuration syntax

If ye still be having troubles, open an issue on our [GitHub repository](https://github.com/Eden7600/eslint-config-broadside). We'll help ye navigate these treacherous waters!

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
