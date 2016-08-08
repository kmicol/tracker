import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    post() {
      let post = this.get('model');

      post.save().then((post) => {
        this.transitionToRoute('posts.show', post);
      });
    }
  }
});
