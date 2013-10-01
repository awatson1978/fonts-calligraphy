Package.describe({
    summary: "Meteorite package for adding various calligraphy fonts to Meteor apps (including cursive fonts)."
});

Package.on_use(function (api) {
    api.add_files('fonts/AlexBrush-Regular.ttf', "client");
    api.add_files('fonts-calligraphy.css', "client");
});
