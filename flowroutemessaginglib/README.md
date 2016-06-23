# flowroute-messaging-nodejs

**flowroute-messaging-nodejs** is a Node.js SDK that provides methods to send an outbound SMS from a Flowroute phone number and also to retrieve a Message Detail Records (MDR). These methods use **v2** (version 2) of the [Flowroute](https://www.flowroute.com) API.

These methods can be used to accomplish the following:

*	Send an outbound SMS
*	Retrieve a message detail record (MDR)

**Note:** This SDK does not cover searching for a set of MDRs based on a date range. For searching on a date range, see [Look up a Set of Messages](https://developer.flowroute.com/docs/lookup-a-set-of-messages) on the Flowroute Developer Portal.

## Documentation 
The full documentation for v2 of the Flowroute API is available [here](https://developer.flowroute.com/v2.0/docs).

##Before you begin

The following are required before you can deploy the SDK.

### Have your API credentials

You will need your Flowroute API credentials (Access Key and Secret Key). These can be found on the **Preferences > API Control** page of the [Flowroute](https://manage.flowroute.com/accounts/preferences/api/) portal. If you do not have API credentials, contact <mailto:support@flowroute.com>.

### Know your Flowroute phone number

To create and send a message, you will need your Flowroute phone number, which should be enabled for SMS. If you do not know your phone number, or if you need to verify whether or not it is enabled for SMS, you can find it on the [DIDs](https://manage.flowroute.com/accounts/dids/) page of the Flowroute portal.

### Get a code text editor

Steps in this SDK describe creating one or more script files that allow you to execute the methods. Script files can be created either using a terminal window shell or through using a code text editor. For example, *Sublime Text*. 

###Download Node.js

The flowroute-messaging-nodejs SDK requires Node.js. The installation file can be downloaded [here](https://nodejs.org/en/download/). Choose the installer that matches your operating system. Download the file, but do not install it.

##Install the libraries

> **Note:** You must be connected to the Internet in order to install the required libraries.

1. Open a terminal session. 

2. If needed, create a parent directory folder where you want to install the SDK.
 
3. Go to the newly created folder, and run the following:

 	`git clone https://github.com/flowroute/flowroute-messaging-nodejs.git`
 	
 	The `git clone` command clones the **flowroute-messaging-nodejs** repository as a sub directory within the parent folder.
 	
4.	Change directories to the newly created **flowroute-messaging-nodejs** directory.

##Install Node.js

1.	Install the downloaded Node.js file.

	After installing Node.js, a dependency is required for the **request** module. 

2.	To add the **request** module dependency, in a terminal window go to your **flowroute-messaging-nodejs** directory.

3.	Run the following:

		npm install request
	
	The **request** module is installed.
	
8.	After creating the libraries and installing Node.js, create a file that contains the flowroute-messaging-nodejs methods. This file can then be run from a command line.
  
## Create a Node.js file to set up the MessagesController

Importing the SDK allows you to instantiate the [MessagesController](#msgcontroller), which contains the methods used to perform tasks with the SDK. In order to do this, create and run a Node.js file. 

When creating your own file for running the methods you will need to create one or more files that instantiate the Controllers and the methods. The following shows these lines. Depending on your approach, not all lines will be required.

1.	Using a code text editor — for example, *Sublime Text* — create a new file.

2.	Add the following lines at the top of the file to require the **flowroutemessaginglib**.

        //Import the Messaging SDK
		var flowroute = require('./flowroutemessaginglib');

	>**Important:** The location where you save your Node.js file determines how the path to **flowroutemessaginglib** should be declared. If the Node.js file is saved in the same directory as the **flowroutemessaginglib** directory, then declare the path as `./flowroutemessaginglib`. If the file will be saved in a different directory, you must explicitly call the path to **flowroutemessaginglib**. For example, `/users/<user>/<directory path>/flowroute-numbers-nodejs/flowroutemessaginglib/`. This SDK assumes the Node.js file is in the same location as the `flowroutemessaginglib` directory.        

3.	Add the following lines to set up up your API Access Key and Secret Key:
 
		flowroute.configuration.username = "Access Key";
		flowroute.configuration.password = "Secret Key";
		
4.	Replace `Access Key` and `Secret Key` with your Flowroute credentials.

5.	Add a callback (`cb`) function that returns both error and success messages:

		var cb =  function(err, response){
			if(err){
			console.log(err);
			}
			console.log(response);
		};

	>**Note:** The callback variable name in this example, `cb`, can be any name of your own choosing, but whatever name you choose must be used consistently throughout the file.

6.	Save the file with a **.js** extension. For example, **sendmsg.js**.

7.	Add the Controllers and methods to the file. See [MessagesController](#msgcontroller)

8.	After adding the MessageController methods, run the file to invoke the added methods:

		node sendmsg.js

###Example Node.js file

The following shows an example Node.js file before Controller methods have been added:

	//Import the Messaging SDK
	var flowroute = require('./flowroutemessaginglib');
	
	//Set your API credentials
	flowroute.configuration.username = "1111111";
	flowroute.configuration.password = "m8axLA45yds7kmi2225OQ7BshaADg6vr";
	
	//Set your callback function
	var cb =  function(err, response){
		if(err){
			console.log(err);
		}
		console.log(response);
	};

## MessagesController<a name=msgcontroller></a>

The MessagesController contains the functions required to send outbound SMS texts and to retrieve MDRs. 
The following sections describe the use of the APIController and the two methods it contains:

*	[`createMessage `](#createmsg)

* 	[`get_message_lookup`](#getmsg) 

### `createMessage(message, callback)`<a name=createmsg></a>

The `createMessage` method is used to send outbound messages from SMS-enabled Flowroute numbers.

####Usage

Add the following two lines to the end of your Node.js file:

	#Create and send a message
	var msg = {"to": "To Number", "from": "From Number", "content": "Message Content"};
	flowroute.MessagesController.createMessage(message variable name, callback variable name);

It is composed of the following variables:

| Parameter | Required | Type |Usage   |                                                                             
|-----------|----------|-------|--------------------------------------------------------|
| `msg`*   | True     | string| The message variable name. The variable can have any name, and there is no limit on the length. The variable name created here must also be passed in `create_message()`.<br>For this method, `msg` is used.                                                                        |
| `To Number `     | True     | string |Target phone number for the message. Must use an 11-digit _1NPANXXXXXX_ E.164 format. | 
|`From Number`|True|string| Source phone number. It must be a number registered with Flowroute, must be SMS-enabled, and must use an 11-digit _1NPANXXXXXX_ E.164 format.|
| `Message Content`| True   |string | The message itself. An unlimited number of characters can be used, but message length rules and encoding apply. See [Message Length & Concatenation](https://developer.flowroute.com/docs/message-length-concatenation) for more information. | 
|`createMessage()`| True | string | This field contains the message variable name (`msg`) and the callback variable name (`cb`), formatted as `createMessage(message variable name, callback function)`. |

##### Example Usage

	#Create and send a message
	var msg = {"to": "12066418000", "from": "12064205780", "content": "That rug really tied the room together."};
	flowroute.MessagesController.createMessage(msg, cb);
	
#####Example response

A successfully sent message returns a response that includes a message record identifier. Note this number if you want to later retrieve details about the message. The following shows an example response:

	{"data": {"id": "mdr1-d858379c1bee4dd3bfe5c556f7cef70f"}}

##### Error response

| Error code | Message | Description                                                 |
|-------|----------|-------------------------------------------------------|
|`401`   |UNAUTHORIZED|Authentication failed. The API credentials are incorrect.|
|`403`  | FORBIDDEN  | The `from` number is not authorized.|
|`500`| HTTP Response Not OK | Typically this occurs when the `to` phone number is not a complete 11-digit E.164-formatted number.|

#### `getMessageLookup (recordId, callback)`<a name=getmsg></a>

The `getMessageLookup` method is used to retrieve an MDR from the message record identifier returned using `createMessage`.

####Usage
Add the following line to the end of your Node.js file. If your file also contains the `createMessage` method, comment out those lines before running the `getMessageLookup` method. If the`getMessageLookup` lines are not commented out, a new message is sent. Alternately, you can create two separate files, one for creating messages and one for looking up an MDR.

	#Get the MDR
	flowroute.MessagesController.getMessageLookup("recordID", callback)
	
| Parameter | Required | Type  | Description                                        |
|-----------|----------|--------|-----------------------------------------------|
| `recordID`      | True     | string  |The identifier of an existing record to retrieve. The value should include the`mdr1-`prefix. |
| `callback`   | True  | string | Variable name of the callback function. The variable name should match the name assigned to the function when the callback function was added to the Node.js file. For this example, `cb` is the assigned variable name.|

##### Example Usage

	#Get the MDR
	flowroute.MessagesController.getMessageLookup("d858379c1bee4dd3bfe5c556f7cef70f", cb);

#####Example response

>**Note:** The following example is formatted for clarity only. It is not intended to display the format of your own output.

	{
  	"data": {
   	 "attributes": {
   	   "body": "That rug really tied the room together.",
   	   "direction": "outbound",
   	   "timestamp": "2016-06-13T20:34:29.095045+00:00",
   	   "amount_nanodollars": 4000000,
   	   "from": "12064205780",
   	   "message_encoding": 0,
   	   "has_mms": false,
   	   "to": "12066418000",
   	   "amount_display": "$0.0040",
   	   "callback_url": null,
   	   "message_type": "long-code"
   	 				},
   	 "type": "message",
   	 "id": "mdr1-d858379c1bee4dd3bfe5c556f7cef70f"
  			}
  	}

######Response message field descriptions
 Parameter | Description                                                 |
|-----------|----------|-------------------------------------------------------|
| `data`  | Object composed of `attributes`, `type`, and `id`. |
|`attributes`    |Object composed of the following:
|  | <ul><li>`body`: The content of the message.<li>`direction`:  The direction of the message. For a sent message, this is `outbound`. For a received message this is`inbound`.<li>`timestamp`: Date and time, to the second, on which the message was sent. This field displays UTC time using an ISO 8601 format. <li>`amount_nanodollars`: The cost of the message in nanodollars. Because Flowroute uses eight decimal points of precision, the amount in nanodollars is the USD`amount_display` value multiplied by 100,000,000 (one hundred million) for a corresponding whole number.<li>`from`: The Flowroute SMS-enabled number from which the message was sent. <li>`message_encoding`: Indicates the encoding type, which will be either `0` (UTF-8) or `8` (UCS-2). See [Message Length & Concatenation](https://developer.flowroute.com/docs/message-length-concatenation) for more information. <li>`has_mms`: Boolean indicating whether or not the message includes a multimedia file. `true` indicates yes, while `false` indicates no. Currently, MMS is not supported; therefore, the default value for this field will always be `false`. <li>`to`: The phone number to which the message was sent.<li>`amount_display`: The total cost of the message in USD. If a message was broken into multiple pieces due to concatenation, this amount will be the total amount for all message pieces. This field does _not_ display out to eight decimal points. See _Message cost_ in [Message Length & Concatenation](https://developer.flowroute.com/docs/message-length-concatenation) for more information. <li>`callback_URL`The callback URL defined for the Flowroute number on the [Preferences > API Control](https://manage.flowroute.com/accounts/preferences/api/) page, the URL appears in this field; otherwise, the value is `null`. <li>`message_type`: Indicates the type of message, either `long-code` or `toll-free`. If the message was sent to or received from another phone number, this field displays `long-code`; if sent to or received from a toll-free number, this field displays `toll-free`. </li></ul>| 
|`type`| Defines what the object is. Because SMS is the only supported object type, this field will always display `message`.|
|`id` | The unique record identifier of a sent message, generated from a successful `createMessage`.|
                        

#####Error response

| Error code | Message | Description                                                 |
|-------|----------|-------------------------------------------------------|
|No code number  |Response Not OK|This error is most commonly returned when the `id` passed in the method is incorrect.|
	