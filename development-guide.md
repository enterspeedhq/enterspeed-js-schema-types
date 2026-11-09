## New release

1. Update version number in the `package.json` file
2. Login to npm by running: `npm login`
3. Build locally using `npm run publish-locally`
4. Publish the package by running: `npm run publish`
   1. You might get an error 403 but the package update should be completed

## Bundling guide

```
npm run publish-locally
```

This bundles the types into `dist/index.d.ts` and runs `npm pack`, which writes `enterspeed-js-schema-types-<version>.tgz` to the repo root. To try it in another project, install the tarball there:

```
npm install /path/to/enterspeed-js-schema-types/enterspeed-js-schema-types-<version>.tgz
```

## Watcher

```
npm run watch
```

The watcher re-runs `publish-locally` on every change under `src`. Re-run the `npm install` above in the consuming project to pick up a new tarball.
