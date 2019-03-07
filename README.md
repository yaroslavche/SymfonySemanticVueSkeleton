# Installation from skeleton
```bash
$ git clone git@github.com:yaroslavche/SymfonySemanticVueSkeleton.git myProject
$ cd myProject
$ yarn install
$ yarn run encore dev
$ bin/console server:start 
```
Go to [http://localhost:8000](http://localhost:8000)

# Manual installation

Create symfony/skeleton project:
```bash
$ cd projects/
$ composer create-project symfony/skeleton symfony-semantic-vue-skeleton
```

Enter the `symfony-semantic-vue-skeleton` dir and install `encore` and 
```bash
$ cd symfony-semantic-vue-skeleton
$ composer require encore
```

Add Semantic-UI and Vue packages:
```bash
$ yarn add vue vue-loader vue-template-compiler semantic-ui
```

And install:
```bash
$ yarn install
```

Create file named `semantic.json` with following content:
```json
{
  "base": "node_modules/semantic-ui/",
  "paths": {
    "source": {
      "config": "src/theme.config",
      "definitions": "src/definitions/",
      "site": "src/site/",
      "themes": "src/themes/"
    },
    "output": {
      "packaged": "dist/",
      "uncompressed": "dist/components/",
      "compressed": "dist/components/",
      "themes": "dist/themes/"
    },
    "clean": "dist/"
  },
  "permission": false,
  "autoInstall": false,
  "rtl": false,
  "version": "2.4.2"
}
```

and add to `webpack.config.js` next lines before exports:
```js
    // enable Vue
    .enableVueLoader()

    // add semantic-ui entries
    .addEntry('semantic_styles', './node_modules/semantic-ui/dist/semantic.min.css')
    .addEntry('semantic_javascripts', './node_modules/semantic-ui/dist/semantic.min.js')
```


