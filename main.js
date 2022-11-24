// returns a promise
let countValue = new Promise(function (resolve, reject) {
  resolve('Promise resolve'); 
});

// executes when promise is resolved successfully
countValue.then((data) => {
  console.log(data)
}).catch((error) => {
  console.error('Opps! something went wrong!')
})