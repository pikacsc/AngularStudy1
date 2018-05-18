console.log('start');

function some() {
  var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      var old = Date.now();
      while (Date.now() < old + 5000) {}
      // return 100;
      resolve(100);
    }, 0);
  });

  return promise;
}

// var result = some();
// console.log('result = '+result);

var promise = some();
promise.then(function (result) {
  console.log('result = '+result);
  return result+10;
}).then(function (result) {
  console.log('result = '+result);
});

console.log('end');

console.log('긴급히 처리해야 하는 로직');
