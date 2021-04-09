console.log('child-a 1');
await new Promise(res => setTimeout(res, 1000));
console.log('child-a 2');
