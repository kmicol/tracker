export default function() {
  this.get('/posts');
  this.get('/posts/:id');
  this.put('/posts/:id');
  this.del('/posts/:id');
}
