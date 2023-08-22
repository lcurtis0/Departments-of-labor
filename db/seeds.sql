INSERT INTO department(name)
VALUES ("accounting"),
        ("register"),
        ("cleaning"),
        ("labor"),
        ("services");

INSERT INTO role(title, salary, department_id)
VALUES ("accountant", 80.000, 1),
        ("cashier", 30.000, 2),
        ("janitor", 50.000, 3),
        ("stocker", 25.000, 4),
        ("refund-manager", 60.000, 5);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("john", "smith", 1, 101),
        ("mike", "thopson", 2, 102),
        ("bob", "jones", 3, 103),
        ("jack", "pinkman", 4, 104),
        ("tom", "thopson", 5, 105);

