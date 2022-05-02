// console.log(hello);                                   
// var hello = 'world'

var hello = 'world'
console.log(hello);  

// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

var needle = 'haystack';
function test(){
    var needle = 'magnet';
    console.log(needle);
}
test();

// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
print();

// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone'

var food = 'chicken';
console.log(food);
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
    console.log(food);
}
eat();


// mean(); // is mean ment to be a variable or a function?
// console.log(food); // will not  print 
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

var food = "oranges";
function mean(){
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
mean();
console.log(food);

// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log


var genre = "disco";
rewind(); // WHY WILL THIS WORK ? 
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}

console.log(genre);

// dojo = "san jose";
// console.log(dojo);
// learn(); 
// function learn() { // HOISTING 
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank"; 
//     console.log(dojo);
// }
// console.log(dojo);

var dojo = "san jose";
console.log(dojo);
learn(); 
function learn() { // HOISTING 
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank"; 
    console.log(dojo);
}

console.log(dojo);

// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return



function makeDojo(name, students){
    const dojo = {}; // object - memory loc. 
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo.status = "closed for now";
    }
    return
    
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));