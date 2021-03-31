function task1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("resiltado de la task1"), 1000);
  });
}
function task1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("resiltado de la task2"), 1000);
  });
}
const promise = task1;
promise
  .then((data1) => {
    console.log("data1", data1);
    return task2();
  })
  .then((data2) => {
    console.log("data2", data2);
    return "Hola promesa";
  })
  .then((data3) => {
    console.log("data3", data3);
  });


// 
// 
// 

  Ejercicio: que imprime esta promesa
function task(state) {
  return new Promise(function(resolve, reject) {
      if (state) {
          resolve('success');
      } else {
          reject('error');
      }
  });
}
let promise = task(true);
promise
.then(function(data) {
  console.log(data);
  return task(true);
})
.then(function(data) {
  if (data !== 'victory') {
      throw 'Defeat';
  }
  return task(true);
})
.then(function(data) {
  console.log(data);
})
.catch(function(error) {
  console.log(error);
  return task(false);
})
.then(function(data) {
  console.log(data);
  return task(true);
})
.catch(function(error) {
  console.log(error);
  return 'Error caught';
})
.then(function(data) {
  console.log(data);
  return new Error('test');
})
.then(function(data) {
  console.log('Success:', data.message);
})
.catch(function(data) {
  console.log('Error:', data.message);
});