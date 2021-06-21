//You have students
//Student has id, name, course, grade and address which has street,city and zip
//Print how much lives in each city:
//Example of such output can be:
//Tel Aviv -> 3 students
//Haifa -> 5 students
//Eilat -> 2 students

const students = [
    {
        id:'0',
        name: 'yakov',
        course:'JavaScripts',
        grade: 100,
        address:{
            street:'a',
            city:'eilat',
            zip:'100'
        }
    },
    {
        id:'1',
        name: 'marta',
        course:'JavaScripts',
        grade: 100,
        address:{
            street:'a',
            city:'tel aviv',
            zip:'200'
        }
    },
    {
        id:'3',
        name: 'lee',
        course:'JavaScripts',
        grade: 100,
        address:{
            street:'a',
            city:'haifa',
            zip:'300'
        }
    }
    ,
    {
        id:'3',
        name: 'sari',
        course:'JavaScripts',
        grade: 100,
        address:{
            street:'a',
            city:'tel aviv',
            zip:'300'
        }
    }
]

const studentCities = students => {
    const cities = {};

    students.forEach(student => {
        if(!(student.address.city in cities)){
            cities[student.address.city] = 0;
        }
        cities[student.address.city]++;
    });

    return cities;
}

const result = studentCities(students);

// console.log(result);

for(const propName in result) {
    console.log(`${propName} -> ${result[propName]}`);
}

// console.log(Object.keys(result));

//Tel Aviv -> 3 students
//Haifa -> 5 students
//Eilat -> 2 students
