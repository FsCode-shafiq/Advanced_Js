function employee (name , age , baseSalary) 
   {
        this.name = name;
        this.age = age;
        this.baseSalary = baseSalary;
        let monthlyBonus = 1000;
    
    let calcFinalSalary = function(){
        
        let final = baseSalary + monthlyBonus;
        console.log(`Final Salary is : ${final}`);
    }
    this.getEmployeeDetail = function(){
        console.log(`Name: ${this.name} | Age: ${this.age} | Base-Salary: ${this.baseSalary}`);
        calcFinalSalary()
    }}

    let emp1 = new employee('shafiq', 21 , 6000);
    emp1.getEmployeeDetail();