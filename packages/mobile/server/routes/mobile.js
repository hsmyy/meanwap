'use strict';

var personService = require('../controllers/person');

function jsonRes(err, res, data){
    if(err){
        console.log(err);
        res.json({'res':'err'});
    }else{
        if(data){
            res.status(200).json(data);
        }else{
            res.json({'res':'ok'});
        }
    }
}

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

    app.get('/person/:userid', function(req, res){
        personService.get(parseInt(req.param('userid')), function(err, data){
            jsonRes(err, res, data);
        });
    });

////create friend
    app.post('/person/:userid/friends/:friend', function(req,res){
        //personModel.();
        personService.createFriend(parseInt(req.param('userid')), req.param('friend'), function(err){
            jsonRes(err,res);
        });
    });
//
////create item
    app.post('/person/:userid/friends/:friend/:key/:value', function(req, res){
        personService.createItem(parseInt(req.param('userid')), req.param('friend'), req.param('key'), req.param('value'), function(err){
            jsonRes(err, res);
        });
    });
//
////remove item
    app.delete('/person/:userid/friends/:friend/:key', function(req, res){
        personService.deleteItem(parseInt(req.param('userid')), req.param('friend'), req.param('key'), function(err){
            jsonRes(err, res);
        });
    });
//
////create user
    app.put('/person/:userid/:username', function(req, res, next){
        personService.createUser(parseInt(req.param('userid')), req.param('username'), function(err){
            jsonRes(err,res);
        });
    });
};


