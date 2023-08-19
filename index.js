


// This area is for functions 


function likeToDo(answers.likeToDo){
    if (answers.likeToDo === 'add a department'){
        {
            type: "input", 
            name: "AddDepartment",
            message: "what is the name of the new department?",
        },
        db.query(`INSERT INTO depertments(id, name) VALUES (${answers.}`, function (results) {
    })
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