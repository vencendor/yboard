<?php

// uncomment the following to define a path alias
// Yii::setPathOfAlias('local','path/to/local-folder');
// This is the main Web application configuration. Any writable
// CWebApplication properties can be configured here.
return array(
    'basePath' => dirname(__FILE__) . DIRECTORY_SEPARATOR . '..',
    'language' => 'ru',
    'name' => 'YBoard',
    'theme' => 'yboard',
    // preloading 'log' component
    'preload' => array('log'),
    // autoloading model and component classes
    'import' => array(
        'application.models.*',
        'application.components.*',
        'application.modules.admin.*',
        'application.modules.user.*',
        'application.modules.user.models.*',
        'application.modules.user.components.*',
        'application.extensions.*',
        'application.extensions.yii-mail.*',
        'application.extensions.gallerymanager.*',
        'application.extensions.gallerymanager.models.*',
        'application.extensions.nestedset.*',
    ),
    'modules' => array(
        // uncomment the following to enable the Gii tool
        'gii' => array(
            'class' => 'system.gii.GiiModule',
            'password' => 'qwerty',
        // If removed, Gii defaults to localhost only. Edit carefully to taste.
        //'ipFilters' => array('127.0.0.1', '::1', '192.168.1.3'),
        ),
        'admin',
        'cms',
    ),
    // application components
    'components' => array(
        'user' => array(
            // enable cookie-based authentication
            'class' => 'WebUser',
            'allowAutoLogin' => true,
            'loginUrl' => array('/user/login'),
        ),
        'cache' => array(
            'class' => 'system.caching.CFileCache',
        ),
        //'Board' => array('class' => 'Board'),
        'evenness' => array('class' => 'Evenness'),
        'bootstrap' => array(
            'class' => 'bootstrap.components.Bootstrap',
        ),
        'image' => array(
            'class' => 'application.extensions.image.CImageComponent',
            // GD or ImageMagick
            'driver' => 'GD',
        // ImageMagick setup path
        //'params'=>array('directory'=>'D:/Program Files/ImageMagick-6.4.8-Q16'),
        ),
        // Подключены два модуля для отправки емайлов 
        'mail' => array(
            'class' => 'ext.yii-mail.YiiMail',
            'transportType' => 'php',
            /*
              'transportType' => 'smtp',
              'transportOptions' => array(
              'host' => 'smtp.gmail.com',
              'username' => 'yboard@gmail.com',
              'password' => 'password',
              'port' => '465',
              'encryption'=>'ntls',
              ),
             */
            'viewPath' => 'themes.views.mail',
        //'logging' => true,
        //'dryRun' => false
        ),
        'email' => array(
            'class' => 'application.extensions.email.Email',
            'delivery' => 'php', //Will use the php mailing function.  
        //May also be set to 'debug' to instead dump the contents of the email into the view
        ),
        'config' => array(
            'class' => 'application.extensions.EConfig',
            'strictMode' => false,
        ),
        // uncomment the following to enable URLs in path-format
        'urlManager' => array(
            'urlFormat' => 'path',
            'showScriptName' => false,
            'rules' => array(
                '' => 'site/index',
                '<id:\d+>' => 'adverts/view/id/<id>',
                'category/<cat_id:\d+>' => 'adverts/category',
                'logout' => 'login/logout',
                'site/category/<cat_id:\d+>' => 'adverts/category/cat_id/<cat_id>',
                'cat_fields/<cat_id:\d+>' => 'adverts/getfields/cat_id/<cat_id>', //  !ошибка если ajax обращается к длинному запросу. не идет запрос 
                'category/<action:\w+>/' => 'admin/category/<action>',
                'user/<user_id:\d+>/' => 'user/view/id/<user_id>',
                // 'category/<action:\w+>/<param:\w+>/<id:\d+>' => 'admin/category/<action>/<param>/<id>',
                '<controller:\w+>/<id:\d+>' => '<controller>/view',
                '<controller:\w+>/<action:\w+>/<id:\d+>' => '<controller>/<action>',
                '<controller:\w+>/<action:\w+>' => '<controller>/<action>',
            ),
        ),
        // uncomment the following to use a MySQL database
        'db' => array(
            'connectionString' => 'mysql:host=localhost;dbname=yboard',
            'emulatePrepare' => true,
            'username' => 'root',
            'password' => '123456',
            'charset' => 'utf8',
            'tablePrefix' => '',
        ),
        'errorHandler' => array(
            // use 'site/error' action to display errors
            //'class'=>'application.modules.cms.components.CmsHandler',
            'errorAction' => 'site/error',
        ),
        'log'=>array(
                'class'=>'CLogRouter',
                'enabled'=>YII_DEBUG,
                'routes'=>array(

                        array(
                                'class'=>'CFileLogRoute',
                                'levels'=>'error, warning',
                        ),
                        array(
                                'class'=>'application.extensions.yii-debug-toolbar.YiiDebugToolbarRoute',
                                'ipFilters'=>array('*'),
                        ),
                ),
        ),
    ),
    // application-level parameters that can be accessed
    // using Yii::app()->params['paramName']
    'params' => array(
        // this is used in contact page
        'adminEmail' => 'webmaster@example.com',
        'installed' => 'yes',
    ),

);
