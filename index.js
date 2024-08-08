const prompt = require('prompt-sync')()

const students = ["Janiel", "Yariel", "Jazlynn", "Tofayl", "Zyaire", "Oscar", "Yineiri", "John", "Justice", "Alyma", "Annmary", "Salma", "Emilio", "Sandrea", "Christian", "John", "Denisse", "Angel", "Rihanna", "Laila", "Monica", "Corey", "Liana", "Mahamadou", "Francisco", "Prince", "Fatoumata", "Jason"]

// FUNCTION DEFINITION
// Write a function definition called getStudent that takes in an index. The code block should 
// print "Student at index is " with value at index of the students
// return the student at that index
function getStudent (index){
  let user = prompt("What Student do you want? (0-27): ")
  parseInt(user)
  console.log("Student index is", students[user])
    return students[index]
}


// FUNCTION CALL
// Call the getStudent function with the index that the user selected above

getStudent()

