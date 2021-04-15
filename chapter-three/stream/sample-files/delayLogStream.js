const stream = require('stream');

class DelayLogStream extends stream.Writable {
  constructor(options) {
    super({objectMode: true, ...options});
  }

  _write(chunk, encoding, callback) {
    console.log('_write()');
    const {message, delay} = chunk;
    setTimeout(() => {
      console.log(message);
      callback();
    }, delay);
  }
}

const delayLogStream = new DelayLogStream();

delayLogStream.write({message: 'Hi', delay: 0});
