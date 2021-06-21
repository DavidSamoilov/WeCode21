const whatIsTheAnswerToAllQuestions = () => {
  //resolve === myCallback
  const promise = new Promise(function (resolve) {
    //This function immediatelly runs by the Promise ctor

    //This part is our code
    console.log('Wait a sec, I\'ll go fetch it');
    setTimeout(() => {
      resolve(`Found your answer: 42!`);
      console.log("Promise resolved!");
    }, 2000);

    //The Promise object is returned
  });
  return promise;
};

whatIsTheAnswerToAllQuestions()
.then(answer => console.log(answer));

//Promise is returned right away, allowing this code to continue
console.log("End");
//Later on, when the promise is resolved, our then callback will be fired
