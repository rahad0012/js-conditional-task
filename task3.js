// problem
/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
let marks = 60;
if (marks <= 100 && marks >= 90) {
    console.log('your great is: A')
}
else if (marks >= 80) {
    console.log('your great is: B')
}
else if (marks >= 70) {
    console.log('your great is: C')
}
else if (marks >= 60) {
    console.log('your great is: D')
}
else if (marks >= 0) {
    console.log('your great is: F')
}
else {
    console.log('Envalid Number')
}

//  ternary operator 
let results = 
marks <= 100 && marks >= 90 ? 'your great is: A' : 
marks >= 80 ? 'your great is: B' : 
marks >= 70 ? 'your great is: C' : 
marks >= 60 ? 'your great is: D' : 
marks >= 0 ? 'your great is: F' : 
'Envalid Number';
console.log(results);