


// This area is for functions 


function likeToDo(answers.likeToDo){

    
    if (answers.likeToDo === 'add a department'){
        inquirer
        .prompt =  {
            type: "input", 
            name: "AddDepartment",
            message: "what is the name of the new department?",
        }
        .then(
        db.query(`INSERT INTO depertments(id, name) VALUES (${answers.AddDepartment})`),
        console.log('Added ${answers.AddDepartment} to database'));
    }
}


function viewAllEployees(answers.viewAllEployees){

    if (answers.viewAllEployees === ''){

    }
    db.query('SELECT employee.id FROM employee JOIN department ON role.id = department.id', function (results) {
        console.log("These are the current employees");
        console.log(results);
        if (){

        }
      });
      
}

//Add Employees



//Update employees role

//View all roles

//Add role

//View all departments 

//add department