//Create a simple promise app:
//Create a function
//Inside, create and return a promise which randomise a number
//If the number is even - resolve with this number
//BONUS: If odd - reject (read about this) with error message
//log both

//Supplement:
//randomise just returns a random number after 2 seconds
//decideIfHate will get this value and decide, after 2 secs, if the value is 'good'

const randomize = () => {
    return new Promise(resolve => {
        console.log('waiting for random number');
        setTimeout(() => {
            const number = parseInt(Math.random()*100);
            resolve(number);
        }, 2000);
    });
}

const decideIfHate = number => {
    return new Promise((resolve, reject) => {
        console.log(`got ${number}... waiting for decision`);
        setTimeout(() => {
            if(number%2===0){
                resolve(number);
            }else{
                reject(`Hate odd numbers: ${number}`);
            }
        }, 2000);
    });
}

randomize()
.then(number => decideIfHate(number))
.then(answer => console.log(answer))
.catch(error => console.log('Err:', error));
// /\
// ||
//catch all. If somewhere along the chain an error occurs

//es6 - same as lines 35-38
(async ()=> {
    try{
        const number = await randomize();// As of line 35
        const answer = await decideIfHate(number);
        console.log(answer);
    }catch(err) {
        console.log('Err:', err);
    }
})();



//then can handle 2 states: success or failure
// .then(
//     answer => console.log(`Got the answer: ${answer}`),
//     error => console.log('ERRRR', error)
// )


//1
// Create an array of 10 students.
// Student has id, name, course and address
// Address has street and city
const getStudents = () => {
    return new Promise(resolve => {
        const students = [
            {
              id: 1,
              name: "Dor",
              course: "JS",
              address: {
                street: "Mivtza",
                city: "Rishon",
              },
            },
            {
              id: 2,
              name: "Jacob",
              course: "JS",
              address: {
                street: "Lishanski",
                city: "Tel-Aviv",
              },
            },
            {
              id: 3,
              name: "Moizes",
              course: "JS",
              address: {
                street: "Ben-Gurion",
                city: "Haifa",
              },
            },
            {
              id: 4,
              name: "Dor",
              course: "JS",
              address: {
                street: "Mivtza",
                city: "Rehovot",
              },
            },
            {
              id: 5,
              name: "Dor",
              course: "JS",
              address: {
                street: "Mivtza",
                city: "Rishon",
              },
            },
          ];
          resolve(students);
    })
}
//2
// Create a function which gets a students array and
// returns (simulate a 2sec delay) how much students from each city
const citiesStudents = students => {
    return new Promise(resolve => {
        setTimeout(() => {
            const cities = {};
            for(const student of students) {
                cities[student.address.city] = cities[student.address.city] ? 
                                               cities[student.address.city] + 1 : 
                                               1;
            }
            resolve(cities);
        }, 2000);
    })
}
//3
// Create a function which gets the cities-students and prints them out
const print = groupedStudents => {
    for(const city in groupedStudents) {
        console.log(`${city} -> ${groupedStudents[city]}`);
    }
}

(async () => {
    const students = await getStudents();
    const groupedStudetns = await citiesStudents(students);
    print(groupedStudetns);
})();

