// employees details
const employees = [
    {id: 1, name: 'Sehrish', dept: 'IT', salary: 50000},
    {id: 2, name: 'Noreen', dept: 'HR', salary: 40000},
    {id: 3, name: 'Maria', dept: 'Finance', salary: 45000},
    {id: 4, name: 'Ayesha', dept: 'IT', salary: 50000},
    {id: 5, name: 'Muqadas', dept: 'HR', salary: 45000},
    {id: 6, name: 'Misbah', dept: 'HR', salary: 48000},
    {id: 7, name: 'Ali', dept: 'IT', salary: 52000},
    {id: 8, name: 'Fatima', dept: 'Finance', salary: 47000},
    {id: 9, name: 'Hassan', dept: 'HR', salary: 42000},
    {id: 10, name: 'Zainab', dept: 'IT', salary: 51000},
    {id: 11, name: 'Omar', dept: 'Finance', salary: 46000},
    {id: 12, name: 'Amina', dept: 'HR', salary: 43000},
    {id: 13, name: 'Yusuf', dept: 'IT', salary: 53000},
    {id: 14, name: 'Sana', dept: 'Finance', salary: 48000},
    {id: 15, name: 'Bilal', dept: 'HR', salary: 44000},
    {id: 16, name: 'Khadija', dept: 'IT', salary: 54000},
    {id: 17, name: 'Ahmed', dept: 'Finance', salary: 49000},
    {id: 18, name: 'Sara', dept: 'HR', salary: 45000},
    {id: 19, name: 'Imran', dept: 'IT', salary: 55000},
    {id: 20, name: 'Layla', dept: 'Finance', salary: 50000},
    {id: 21, name: 'Usman', dept: 'HR', salary: 46000},
    {id: 22, name: 'Hira', dept: 'IT', salary: 56000},
    {id: 23, name: 'Farhan', dept: 'Finance', salary: 51000},
    {id: 24, name: 'Zara', dept: 'HR', salary: 47000},
    {id: 25, name: 'Kamran', dept: 'IT', salary: 57000},
    {id: 26, name: 'Nadia', dept: 'Finance', salary: 52000},
    {id: 27, name: 'Tariq', dept: 'HR', salary: 48000},
    {id: 28, name: 'Rukhsar', dept: 'IT', salary: 58000},
    {id: 29, name: 'Asad', dept: 'Finance', salary: 53000},
    {id: 30, name: 'Sadia', dept: 'HR', salary: 49000},
    {id: 31, name: 'Faisal', dept: 'IT', salary: 59000},
    {id: 32, name: 'Nazia', dept: 'Finance', salary: 54000},
    {id: 33, name: 'Waqar', dept: 'HR', salary: 50000},
    {id: 34, name: 'Mehak', dept: 'IT', salary: 60000},
    {id: 35, name: 'Saad', dept: 'Finance', salary: 55000},
    {id: 36, name: 'Anum', dept: 'HR', salary: 51000},
    {id: 37, name: 'Haris', dept: 'IT', salary: 61000},
    {id: 38, name: 'Zoya', dept: 'Finance', salary: 56000},
    {id: 39, name: 'Junaid', dept: 'HR', salary: 52000},
    {id: 40, name: 'Areeba', dept: 'IT', salary: 62000},
    {id: 41, name: 'Rizwan', dept: 'Finance', salary: 57000},
    {id: 42, name: 'Saima', dept: 'HR', salary: 53000},
    {id: 43, name: 'Nabeel', dept: 'IT', salary: 63000},
    {id: 44, name: 'Saba', dept: 'Finance', salary: 58000},
    {id: 45, name: 'Asim', dept: 'HR', salary: 54000},
    {id: 46, name: 'Rabia', dept: 'IT', salary: 64000},
    {id: 47, name: 'Shahid', dept: 'Finance', salary: 59000},
    {id: 48, name: 'Nida', dept: 'HR', salary: 55000},
    {id: 49, name: 'Adnan', dept: 'IT', salary: 65000},
    {id: 50, name: 'Sobia', dept: 'Finance', salary: 60000}
];
//////////////////////////////////////////////////////////////////////////


// diplaying the required information
// functions
// display all employess
function displayEmployees(){
    const employeesInfo = employees.map((employee) => `<p><b>${employee.id}</b>. ${employee.name}, ${employee.dept}, ${employee.salary}<br></p>`).join('');

    // display employees' info on screen
    document.getElementById('details').innerHTML = employeesInfo;
}
//////////////////////////////////////////////////////////////////////////




// calculate total saleries
function calculateTotalSalaries(){
    const totalSalary = employees.reduce((total, employee) => total+employee.salary, 0);
    document.getElementById('details').innerHTML = `Total salary of all employees: <b>${totalSalary}</b>`;
}
///////////////////////////////////////////////////////////////////////////




// display a specific dept employees
// HR employees
function displayHREmployees(){
    // filter HR employees
    const hrEmployees = employees.filter(employee => employee.dept === 'HR');
    // display HR emloyees
    const displayHREmployees = hrEmployees.map((employee) => `<p><b>${employee.id}</b>. ${employee.name}, ${employee.dept}, ${employee.salary}<br></p>`);
        
    document.getElementById('details').innerHTML = displayHREmployees;
}
// IT employees
function displayITEmployees(){
    // find IT employees
    const itEmployees = employees.filter(employee => employee.dept === 'IT');
    // display IT employees
    const displayITEmployees = itEmployees.map((employee) => `<p><b>${employee.id}</b>. ${employee.name}, ${employee.dept}, ${employee.salary}<br></p>`);

    document.getElementById('details').innerHTML = displayITEmployees;
}
// Finance employees
function displayFinanceEmployees(){
    // find IT employees
    const finEmployees = employees.filter(employee => employee.dept === 'Finance');
    // display IT employees
    const displayFinEmployees = finEmployees.map((employee) => `<p><b>${employee.id}</b>. ${employee.name}, ${employee.dept}, ${employee.salary}<br></p>`);

    document.getElementById('details').innerHTML = displayFinEmployees;
}
//////////////////////////////////////////////////////////////////////////////




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
/////////////////////////////////////////////////////////////////////////////
