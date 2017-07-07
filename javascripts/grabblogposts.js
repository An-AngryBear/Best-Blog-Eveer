'use strict';

var $ = require('jquery');
const blogPosts = {};

blogPosts.getPosts = function() {
	return new Promise(function(resolve, reject) {
		$.ajax({
			url: "../data/blog_posts.json"
		})
		.done(function(data) {
			resolve(data);
		})
		.fail(function(error) {
			console.log("error", error.statusText);
		});
	});
};

module.exports = blogPosts;