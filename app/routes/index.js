import Ember from 'ember';


let posts = [{
  id: 1,
  title: 'Oh my shit a Tractor',
  subtitle: 'He cannot believe there is a tractor. Can you?',
  author: 'Patrick Smatlock',
  
}, {
  id: 2,
  title: 'The government made me fat, now they need to fix it.',
  subtitle: 'This overweight woman blames the government for her unhealthy eating habbits. Whos to blame?',
  author: 'Ms. Messer',
  
}, {
  id: 3,
  title: 'This is the one trick Doctors dont want you to know about!',
  subtitle: 'This is a blickbait link, go ahead and click!',
  author: 'Doctor steve Brule',
  
}];

export default Ember.Route.extend({
  model() {
    return posts;
  }

});
