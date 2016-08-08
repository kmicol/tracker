import Ember from 'ember';

 model() {
  	return this.store.createRecord('post');
  },

export default Ember.Route.extend({

