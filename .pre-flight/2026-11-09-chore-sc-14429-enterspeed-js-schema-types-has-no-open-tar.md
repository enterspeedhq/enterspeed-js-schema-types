# chore/sc-14429/enterspeed-js-schema-types-has-no-open-tar — 2026-11-09

## Changed files

development-guide.md
package.json

## Observations

The minimatch override forces 11.x onto nodemon, and 11 needs Node 20 or >= 22. Does anyone still run the watcher on Node 18?

With npm link gone, consumers reinstall the tarball after each rebuild. Is that good enough for the people who use the watcher?
