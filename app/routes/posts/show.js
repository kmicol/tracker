import Ember from 'ember';

export default Ember.Route.extend({

	return this.store.find('post', params.post_id);

});
