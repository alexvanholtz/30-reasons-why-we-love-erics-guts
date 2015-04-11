<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(

    '*' => array(

    ),

    'localhost' => array(

	    'devMode' => true,
        'siteUrl' => array(
            'en' => 'http://localhost:8888/eric.craft.dev/',
        ),

        'combineMinifyAssets' => false,

        'environmentVariables' => array(
            'baseUrl' => 'http://localhost:8888/eric.craft.dev/',       
            'basePath' => '/Applications/MAMP/htdocs/eric.craft.dev/',       
        ),          
  
    ),

    'craft.dev' => array(

        'devMode' => true,
        'siteUrl' => array(
            'en' => 'http://eric.craft.dev:8888',
        ),

        'combineMinifyAssets' => false,

        'environmentVariables' => array(
            'baseUrl' => 'http://eric.craft.dev:8888/',       
            'basePath' => '/Applications/MAMP/htdocs/eric.craft.dev/',       
        ),          
  
    ),    

    'prod' => array(

        'devMode' => false,
        'siteUrl' => array(
            'en' => 'http://eric.craft.dev:8888',
        ),

        'combineMinifyAssets' => true,

        'environmentVariables' => array(
            'baseUrl' => 'http://eric.craft.dev:8888/',       
            'basePath' => '/Applications/MAMP/htdocs/eric.craft.dev/',       
        ),          
  
    ),     

);
