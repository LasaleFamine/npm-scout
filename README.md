# npm-scout [![Build Status](https://travis-ci.org/LasaleFamine/npm-scout.svg?branch=master)](https://travis-ci.org/LasaleFamine/npm-scout)

> Merge useful informations from `package.json` and the relative repository of a specific NPM package.


## Install

```
$ yarn add npm-scout
```

## Usage

```js
const npmScout = require('npm-scout');

npmScout('npm-scout', 'lasalefamine', 'GITHUB_ACCESS_TOKEN').then(json => {
	console.log(json);
	//=> {packageJson: {...}, repository: {...}}
});
```
## API

### npmScout(username, repository, [GITHUB_ACCESS_TOKEN])

The `GITHUB_ACCESS_TOKEN` is not required but you will have a limited rate to call the API if the `GITHUB_ACCESS_TOKEN` is not present.

## Related

- [github-scout](https://github.com/lasalefamine/github-scout)

## License

[MIT](https://github.com/LasaleFamine/npm-scout/blob/master/LICENSE.md) &copy; LasaleFamine
