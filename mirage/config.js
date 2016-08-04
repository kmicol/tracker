export default function() {
  this.get('/posts', function() {
    return {
      data: [{
        type: 'posts',
        id: 1,
        attributes: {
          title: 'Oh my shit a Tractor',
          subtitle: 'He cannot believe there is a tractor. Can you?',
          author: 'Patrick Smatlock',
        }
      }, {
        type: 'posts',
        id: 2,
        attributes: {
          title: 'The government made me fat, now they need to fix it.',
          subtitle: 'This overweight woman blames the government for her unhealthy eating habbits. Whos to blame?',
          author: 'Ms. Messer',
        }
      }, {
        type: 'posts',
        id: 3,
        attributes: {
          title: 'This is the one trick Doctors dont want you to know about!',
          subtitle: 'This is a Clickbait link, go ahead and click!',
          author: 'Doctor steve Brule',
        } 
      }]
    };
  });
}
