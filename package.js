Package.describe({
	name: "martindan:typeahead",
	summary: "Autocomplete package for meteor powered by twitter typeahead.js",
	git: "https://github.com/martindan/meteor-typeahead.git",
	version: "0.11.1_9"
});

Package.onUse(function(api) {
	api.versionsFrom('METEOR@1.2');
	api.use(['jquery', 'blaze@1.0.0 || 2.0.0', 'ui'], 'client');
	api.use('twbs:bootstrap@3.0.0', 'client', {weak: true});
	api.addFiles('typeahead.bundle.js', 'client');
	api.addFiles('index.js', 'client');
});
