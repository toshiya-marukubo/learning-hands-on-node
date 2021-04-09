function doSomethingAsync() {
   /**
    * NG
    */
   asyncFunc1(input)
     .then(result1 => asyncFunc2(result1))
     .then(result2 => asyncFunc3(result1, result2));

   /**
    * OK
    * need to do nested
    */
   asyncFunc1(input)
     .then(result1 => asyncFunc2(result1)
       .then(result2 => asyncFunc3(result1, result2))
     )
}

async function doSomethingAsync(input) {
  const result1 = await asyncFunc1(input);
  const result2 = await asyncFunc2(result1);
  const result3 = await asyncFunc3(result1, result2);
}

async function doSomethingAsyncConcurrently() {
  const result = await Promise.all({
    asyncFunc1(),
    asyncFunc2(),
    asyncFunc3()
  });
}
