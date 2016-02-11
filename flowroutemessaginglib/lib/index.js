/**
  * @module FlowrouteMessagingLib
  *  
  * Flowroute SMS Beta SDK
  */

var configuration = require('./configuration'),
    MessagesController = require('./Controllers/MessagesController'),
    Message = require('./Models/Message');


function initializer(){}

//Main functional components of FlowrouteMessagingLib
initializer.configuration = configuration;
initializer.MessagesController = MessagesController;

//Main Models of FlowrouteMessagingLib
initializer.Message = Message;

module.exports = initializer;