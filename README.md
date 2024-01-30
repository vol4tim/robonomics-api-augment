## Description

TypeScript type definitions for Robonomics chain to decorate the <a href="https://www.npmjs.com/package/@polkadot/api" target="_blank">@polkadot/api</a>.

## Installation

```bash
npm i robonomics-api-augment --save
```

> :warning: `@polkadot/api` should be installed in your project!

## Usage

Add to your codebase entry point before any imports from the API itself.

- `import 'robonomics-api-augment'` - applies Robonomics types and endpoint augmentation

## Docs

<a href="https://polkadot.js.org/docs/api/start/typescript" target="_blank">TypeScript interfaces</a>

## Publish

Generate new types.

```bash
npm run generate
```

Build the package.

```bash
npm run build
```
