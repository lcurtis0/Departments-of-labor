


// This area is for functions 


function viewAllEployees(answers.viewAllEployees){
    db.query('SELECT employee.id FROM employee JOIN department ON role.id = department.id', function (err, results) {
        console.log(results);
      });
      
}

//Add Employees

//Update employees role

//View all roles

//Add role

//View all departments 

//add department