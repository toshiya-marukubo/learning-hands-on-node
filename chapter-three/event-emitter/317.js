const events = require('events');
const eventBEmitter = new events.EventEmitter();
const eventBPromise = events.once(eventBEmitter, 'eventB');
eventBPromise.then((arg) => {
  console.log('eventB', arg);
});
eventBEmitter.emit('eventB', 'one more');
