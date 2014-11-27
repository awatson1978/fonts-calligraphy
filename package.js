Package.describe({
    summary: 'Meteorite package for adding various calligraphy fonts to Meteor apps (including cursive fonts).',
    version: '1.0.2',
    name: 'awatson1978:fonts-calligraphy',
    git: 'http://github.com/awatson1978/fonts-calligraphy.git'
});

Package.on_use(function (api) {
    api.addFiles('fonts/AlexBrush-Regular.ttf', 'client');
    api.addFiles('fonts-calligraphy.css', 'client');
});
