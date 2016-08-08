export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  // server.createList('post', 10);
  server.create('post', {
    title: 'Oh my shit a Tractor',
    subtitle: 'He cannot believe there is a tractor. Can you?',
    author: 'Patrick Smatlock'
  });
  server.create('post', {
    title: 'The government made me fat, now they need to fix it.',
    subtitle: 'This overweight woman blames the government for her unhealthy eating habbits. Whos to blame?',
    author: 'Ms. Messer'
  });
  server.create('post', {
    title: 'This is the one trick Doctors dont want you to know about!',
    subtitle: 'This is a Clickbait link, go ahead and click!',
    author: 'Doctor steve Brule'
  });
}
