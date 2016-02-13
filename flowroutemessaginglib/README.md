# flowroute-messaging-nodejs

## What is it?

Flowroute-messaging-nodejs is a NodeJS SDK that provides methods for sending outbound SMSs with [Flowroute's](https://www.flowroute.com) API v2. These methods can be used to accomplish the following:

* Send outbound SMS
* Retrieve MDRs (message detail records)

## Documentation 
The full documentation for Flowroute's v2 API is available at [flowroute.readme.io](https://flowroute.readme.io/).

## How To Install 

The SDK relies on node package manager (npm) being available to resolve dependencies.
Once published you will need to copy the folder 'flowroutemessaginglib' into your 'node_modules' folder.

  
## How To Get Setup

The following shows how to import the SDK and setup a basic callback function for processing API responses.

1) Import the SDK module:

        var flowroute = require('flowroutemessaginglib');
        
> Depending on where in your file system flowroutemessaginglib is, you may need to specify the full file path to flowroutemessaginglib.   
   
2) Configure your API Username and Password from [Flowroute Manager](https://manage.flowroute.com/accounts/preferences/beta/).
 > If you do not have an API Key contact support@flowroute.com:

        flowroute.configuration.username = "AccessKey";
		flowroute.configuration.password = "SecretKey";
		
3) Setup a function to handle both error and success Responses:

	var cb =  function(err, response){
		if(err){
		console.log(err);
		}
		console.log(response);
	};

> In this example we are just outputting the responses to the console. However, this is where you would place your application logic for handling the API responses

## List of Methods and Example Uses

### MessagesController

The messages controller contains the methods neccesary to both send outbuond SMSs and to retrieve MDRs.

#### createMessage : function(message, callback)

The createMessage method is used to send outbound messages from SMS enabled Flowroute numbers.

| Parameter | Required | Usage                                                                                |
|-----------|----------|--------------------------------------------------------------------------------------|
| message   | True     | The message parameter that includes your To Number, From Number, and Message Content |

##### Example Usage

	var msg = {"to": "12066418000", "from": "12064205780", "content": "That rug really tied the room together"};
	flowroute.MessagesController.createMessage(msg, cb);
	
#### getMessageLookup : function(recordId, callback)

The getMessageLookup method is used to retrieve a MDR (message detail record).

| Parameter | Required | Usage                                                 |
|-----------|----------|-------------------------------------------------------|
| recordId  | True     | The ID for the record that you would like to retrieve |

##### Example Usage

	flowroute.MessagesController.getMessageLookup("MDRid", cb)