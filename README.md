# Departments-of-labor


Plan of attack

Create functions for each question
 - each is triggered by answers given to the previous question i.e. department --> which department 
pseudocode:

express
function
if (answer.depart = education){
    db.query('SELECT ${education} FROM departments', function (err, results) {
  console.log(results);
})
}
