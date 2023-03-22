function calculateSalary(salary, tax=0.25, bonus=0)
{
    const remaing = salary - salary*tax; 
    const total = remaing + bonus;
    return total; 
}

console.log(calculateSalary(2000,0.10, 200));
