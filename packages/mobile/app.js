'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Mobile = new Module('mobile');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Mobile.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Mobile.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Mobile.menus.add([{
          title: '首页',
          link: 'home',
          roles: ['authenticated'],
          menu: 'main'
      },
      {
          title: '朋友列表',
          link: 'list',
          roles: ['authenticated'],
          menu: 'main'
      },
      {
          title: '新建朋友',
          link: 'create',
          roles: ['authenticated'],
          menu: 'main'
      },
      {
          title: '设置',
          link: 'set',
          roles: ['authenticated'],
          menu: 'main'
      }]);
  Mobile.angularDependencies(['mobile-angular-ui']);
  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Mobile.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Mobile.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Mobile.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Mobile;
});
