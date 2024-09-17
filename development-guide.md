## New release

1. Update version number in the `package.json` file
2. Login to npm by running: `npm login`
3. Build locally using `npm run publish-locally`
4. Publish the package by running: `npm run publish`
   1. You might get an error 403 but the package update should be complated

## Bundling guide

```
npm run publish-locally
```

```
local-package-publisher -p
npm link @enterspeed/js-schema-types
npm publish --access public
```

## Watcher

```
npm run watch
```
