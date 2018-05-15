let mix = require('laravel-mix');
require('laravel-mix-tailwind');

mix.sass('assets/scss/main.scss', 'public/css')
    .tailwind();
