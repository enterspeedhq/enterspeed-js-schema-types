# Intro
JavaScript schemas are currently in preview.

With JavaScript schemas, you can build your schemas in a standard language most developers are already familiar with. This means that you have all the power and flexibility from JavaScript available when you are creating your schemas.

This types package goal is to improve developers experience while working with Enterspeed schemas, by providing types to be used by intellisense.

https://docs.enterspeed.com/reference/js/Intro

## How to use this package for local schemas development?

1. Install package
```
npm i @enterspeed/js-schemas-types
```

2. Configure `jsconfig.json`
```json
{
    "compilerOptions": {
        "strict": true,
        "allowJs": true,
        "checkJs": true,
        "moduleResolution": "node",
        "noEmit": true,
        "target": "ESNext",
        "types": [
            "@enterspeed/js-schemas-types"
        ]
    },
}
```

3. Decorate your export object with corresponding schema type
```js
/** @type {Enterspeed.FullSchema} */
export default {
  triggers: function(context) {
    context.triggers('umbraco', ['page', 'article']);
  },
  actions: function(sourceEntity, context) {
    context.reprocess('anotherSchema').bySchema();
    context.destination('algolia');
  },
  routes: (sourceEntity, context) => context.url(sourceEntity.url),
  properties: function (sourceEntity, context) {
    const p = sourceEntity.properties;
    return {
      title: p.title,
      blocks: context.partial("blocks", p.blocks),
      aboutUsPage: context.reference("page").children('type eq `product`').orderBy({direction: 'asc', propertyName: 'asd' }).limit(2),
    }
  }
}
```


## New release
1. Update version number in the `package.json` file
2. Login to npm by running: `npm login`
3. Publish the package by running: `npm run publish`
   1. You might get an error 403 but the package update should be complated


## Bundling guide
```
npm run publish-locally
```

```
local-package-publisher -p
npm link @enterspeed/js-schemas-types
npm publish --access public
```

## Watcher
```
npm run watch
```