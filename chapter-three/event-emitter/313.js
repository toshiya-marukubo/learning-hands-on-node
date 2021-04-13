const events = require('events');

try {
  new events.EventEmitter()
    .emit('error', new Error('error'));
} catch (err) {
  console.log('catch');
}
