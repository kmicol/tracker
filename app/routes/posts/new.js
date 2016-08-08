import Ember from 'ember';

export default Ember.Route.extend({
	{{#link-to "posts.new"}}New Post{{/link-to}}
});
