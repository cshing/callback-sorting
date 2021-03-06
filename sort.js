/* 
var array = [10, 2, 5, 1, 9];
array.sort(function(a,b) {
    return a - b
});

console.log(array)

*/

var students = [
    { id: 1, name: "bruce",    age: 40 },
    { id: 2, name: "zoidberg", age: 22 },
    { id: 3, name: "alex",     age: 22 },
    { id: 4, name: "alex",     age: 30 }
  ];

  students.sort(function(a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return b.age - a.age
});

console.log(students)


// students.sort(function(a, b) {
//     return b.age - a.age;
// });

// students.sort(function(a, b) {
//     var nameA = a.name;
//     var nameB = b.name;
//     if (nameA < nameB) {
//         return -1;
//     }
//     if (nameA > nameB) {
//         return 1;
//     }
//     return 0
// });




// want result [
//     { id: 4, name: "alex",     age: 30 },
//     { id: 3, name: "alex",     age: 22 },
//     { id: 1, name: "bruce",    age: 40 },
//     { id: 2, name: "zoidberg", age: 22 }
// ]