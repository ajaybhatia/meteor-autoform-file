Package.describe({
  name: "ajaybhatia:autoform-file",
  summary: "File upload for AutoForm",
  description: "File upload for AutoForm",
  version: "0.1.1",
  git: "https://github.com/ajaybhatia/meteor-autoform-file.git"
});

Package.onUse(function(api) {
  api.versionsFrom('1.6');

  api.use([
    'check',
    'coffeescript@1.0.17',
    'underscore',
    'reactive-var',
    'templating@1.3.2',
    'less',
    'aldeed:autoform@6.2.0',
    'fortawesome:fontawesome@4.7.0',
    'cfs:ui@0.1.3',
    'mpowaga:jquery-fileupload@9.11.2'
  ]);

  api.addFiles('lib/client/autoform-file.html', 'client');
  api.addFiles('lib/client/autoform-file.less', 'client');
  api.addFiles('lib/client/autoform-file.coffee', 'client');
  api.addFiles('lib/server/publish.coffee', 'server');
});
