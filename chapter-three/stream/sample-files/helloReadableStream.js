const stream = require('stream');

class HelloReadableStream extends stream.Readable {
  constructor(options) {
    super(options);
    this.languages = ['JavaScript', 'Python', 'Java', 'C#'];
  }

  _read(size) {
    console.log('_read()');
    let language;
    while ((language = this.languages.shift())) {
      if (!this.push('Hello,' + language + '!\n')) {
        console.log('break loading');
        return;
      }
    }
    console.log('complete loading');
    this.push(null);
  }
}

const helloReadableStream = new HelloReadableStream();

helloReadableStream
  .on('readable', () => {
    console.log('readable');
    let chunk;
    while ((chunk = helloReadableStream.read()) !== null) {
      console.log('chink:' + chunk.toString());
    }
  })
  .on('end', () => {
    console.log('end');
  });
