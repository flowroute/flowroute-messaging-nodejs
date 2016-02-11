/**
 * Created by Kartik Andalam on 9/8/15.
 * Copyright (c) 2015 APIMatic. All rights reserved.
 *
 */


/**
 * Creates a instance of HttpRequest
 *
 * @constructor
 */
function HttpRequest() {

    this.method = null;
    this.headers = {};
    this.queryUrl = null;
    this.formData = null;
    this.form = null;
    this.username = null;
    this.password = null;
    this.body = null;
}

module.exports = HttpRequest;