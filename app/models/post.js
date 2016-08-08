import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  title: attr('string'),
  subtitle: attr('string'),
  author: attr('string'),
 
  model() {
  	return this.store.createRecord('post');
  }
});






