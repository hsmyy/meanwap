'use strict';

// The Package is past automatically as first parameter
module.exports = function(Mobile, app, auth, database) {

  app.get('/mobile/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/mobile/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/mobile/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/mobile/example/render', function(req, res, next) {
    Mobile.render('index', {
      package: 'mobile'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
