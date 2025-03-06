// employees details
const employees = [
    {id: 1, name:'Sehrish', dept: 'IT', salary: 50000},
    {id: 2, name:'Noreen', dept: 'HR', salary: 40000},
    {id: 3, name:'Maria', dept: 'Finance', salary: 45000},
    {id: 4, name:'Ayesha', dept: 'IT', salary: 50000},
    {id: 5, name:'Muqadas', dept: 'HR', salary: 45000},
    {id: 6, name:'Misbah', dept: 'HR', salary: 48000}
];

// diplaying the required information
// functions
// display all employess
function displayEmployees(){
    const employeesInfo = employees.map((employee) => `<p><b>${employee.id}</b>. ${employee.name}, ${employee.dept}, ${employee.salary}<br></p>`).join('');

    // display employees' info on screen
    document.getElementById('details').innerHTML = employeesInfo;
}

// calculate total saleries
function calculateTotalSalaries(){
    const totalSalary = employees.reduce((total, employee) => total+employee.salary, 0);
    document.getElementById('details').innerHTML = `Total salary of all employees: <b>${totalSalary}</b>`;
}

// display a specific dept employees
function displayHREmployees(){
    // filter HR employees
    const hrEmployees = employees.filter(employee => employee.dept==='HR');
    // display HR emloyees
    const displayHREmployees = hrEmployees.map((employee) => `<p><b>${employee.id}</b>. ${employee.name}, ${employee.dept}, ${employee.salary}<br></p>`);
        
    document.getElementById('details').innerHTML = displayHREmployees;
}

// find employee by id
function findEmployeeById(id){
    // find employee using their id
    const foundEmployee = employees.find((employee) => employee.id === id);

    // display found employee
    if(foundEmployee){
        document.getElementById('details').innerHTML = `<p><b>${foundEmployee.id}</b>. ${foundEmployee.name}, ${foundEmployee.dept}, ${foundEmployee.salary}<br></p>`;
    } else{
        document.getElementById('details').innerHTML = `<p>No employees with this id!</p>`
    }
}