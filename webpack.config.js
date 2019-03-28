var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .addEntry('app', './assets/js/app.ts')
    .splitEntryChunks()
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .enableSassLoader()
    .enableTypeScriptLoader()
    .autoProvidejQuery()
    .enableVueLoader()
    .addEntry('semantic_styles', './node_modules/semantic-ui/dist/semantic.min.css')
    .addEntry('semantic_javascripts', './node_modules/semantic-ui/dist/semantic.min.js')
    .addEntry('jquery_javascripts', './node_modules/jquery/dist/jquery.min.js')
;

module.exports = Encore.getWebpackConfig();
