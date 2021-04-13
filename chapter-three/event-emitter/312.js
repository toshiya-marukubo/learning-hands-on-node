const events = require('events');
const barEventEmitter = new events.EventEmitter();
barEventEmitter.setMaxListeners(100);
for (let i = 0; i < 100; i++) {
  barEventEmitter.on('baz', () => {
    console.log('baz');
  });
}
