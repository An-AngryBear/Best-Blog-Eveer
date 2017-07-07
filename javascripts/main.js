'use strict';

var $ = require('jquery');
let Handlebars = require('hbsfy/runtime');
let blogTemplate = require('../templates/blog.hbs', './grabblogposts.js');
let blog = require('./grabblogposts.js');


blog.getPosts()
	.then(function(blogPostData) {
		$('.output').append(blogTemplate(blogPostData));
	});
