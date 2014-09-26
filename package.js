Package.describe({
  summary: "Adds comments to your collection(s) of choice",
  version: "0.0.3",
  git: "http://github.com/yogiben/meteor-comments.git"
});

both = ['client','server']

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.2.2');

  api.use(
  	[
  		'coffeescript',
  		'less',
      'templating',

      'aldeed:collection2@0.4.6',
	    'aldeed:autoform@0.17.1'

  	],
  	both);

  api.addFiles(
  	[
  		'lib/both/schemas.coffee',
  		'lib/both/collections.coffee'
  	],
  	both)

   api.addFiles(
  	[
  		'lib/client/templates.html',
      'lib/client/templates.coffee',
      'lib/client/helpers.coffee',
  		'lib/client/autoform.coffee'
  	],
  	'client')

   api.addFiles(
  	[
  		'lib/server/allow.coffee',
  		'lib/server/publish.coffee'
  	],
  	'server')



});
