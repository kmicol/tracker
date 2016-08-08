import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('sample');

  this.route('posts', function() {
    this.route('new');
    this.route('show/:post_id');
  });
});

export default Router;
