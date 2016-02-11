
/**
 * FlowrouteMessagingLib
 *
 * This file was automatically generated for flowroute by APIMATIC BETA v2.0 on 02/11/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of Message
 *
 * @constructor
 */
function Message() {
    this.to = null;     
    this.from = null;     
    this.content = null;     
}

Message.prototype = new BaseModel();
Message.prototype.constructor = BaseModel;

/**
 * Phone number in E.164 format to send a message to.
 *
 * @return {string}
 */
Message.prototype.getTo = function() {
    return this.to;
};

/**
 * Setter for To
 * 
 * @param {string} value 
 */
Message.prototype.setTo = function(value) {
    this.to = value;
};

/**
 * Phone number in E.164 format where the message is sent from.
 *
 * @return {string}
 */
Message.prototype.getFrom = function() {
    return this.from;
};

/**
 * Setter for From
 * 
 * @param {string} value 
 */
Message.prototype.setFrom = function(value) {
    this.from = value;
};

/**
 * The content of the message.
 *
 * @return {string}
 */
Message.prototype.getContent = function() {
    return this.content;
};

/**
 * Setter for Content
 * 
 * @param {string} value 
 */
Message.prototype.setContent = function(value) {
    this.content = value;
};

module.exports = Message;