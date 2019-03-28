# Symfony 4 + Vue + Semantic UI

# Installation from skeleton
```bash
$ git clone git@github.com:yaroslavche/SymfonySemanticVueSkeleton.git myProject
$ cd myProject
$ composer install
$ yarn install
$ yarn run encore dev
$ bin/console server:run 
```
Go to [http://localhost:8000](http://localhost:8000)

# Manual installation

Create symfony/skeleton project:
```bash
$ cd projects/
$ composer create-project symfony/skeleton symfony-semantic-vue-skeleton
```

Enter the `symfony-semantic-vue-skeleton` dir and install `encore` 
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
    // enable JQuery for Semantic UI
    .autoProvidejQuery()
    
    // enable Vue
    .enableVueLoader()

    // add semantic-ui entries
    .addEntry('semantic_styles', './node_modules/semantic-ui/dist/semantic.min.css')
    .addEntry('semantic_javascripts', './node_modules/semantic-ui/dist/semantic.min.js')
```

Install and check:
```bash
$ yarn install
$ yarn run encore dev
```
Browse `public/build` folder for ensure that all is builded.

## Controller and View

Install `annotations` and `symfony/twig-bundle`:
```bash
$ composer require annotations
$ composer require symfony/twig-bundle
```

Create controller `src/Controller/SemanticVueExampleController.php`:
```php
<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SemanticVueExampleController extends AbstractController
{
    /**
     * @Route("/", name="semantic_vue_example")
     */
    public function semanticVueExample(): Response
    {
        return $this->render('semantic_vue_example.html.twig');
    }
}
```

and twig template `templates/semantic_vue_example.html.twig`:
```twig
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>SymfonySemanticVueSkeleton</title>
    {% block stylesheets %}
        {{ encore_entry_link_tags('app') }}
        {{ encore_entry_link_tags('semantic_styles') }}
    {% endblock %}
</head>
<body>
<div id="symfony-semantic-vue-example">
    <div>SymfonySemanticVueExample</div>
</div>
{% block javascripts %}
    {{ encore_entry_script_tags('semantic_styles') }}
    {{ encore_entry_script_tags('semantic_javascripts') }}
    {{ encore_entry_script_tags('app') }}
{% endblock %}
</body>
</html>
```

Then you can create your Vue instance in `assets/app.js` file. For example:
```js
require('../css/app.css');

const $ = require('jquery');
global.$ = global.jQuery = $;

import Vue from 'vue';

window.onload = function () {
    const vm = new Vue({
        el: '#symfony-semantic-vue-example'
    });
};

```

When all is done - don't forget rebuild:
```bash
$ yarn run encore dev
```
