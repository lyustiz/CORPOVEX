const mix = require('laravel-mix');



console.log(mix.webpackConfig());

mix.webpackConfig({
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': __dirname + '/resources/assets/js'
      },
    },
  })
/*
mix.webpackConfig({
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src')
        }
    }
});




mix.webpackConfig({
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src')
        }
    }
});
*/
//mix.browserSync('my-domain.test');

mix.js('resources/js/app.js', 'public/js')
.sass('resources/sass/app.scss', 'public/css');
