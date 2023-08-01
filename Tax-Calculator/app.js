function taxconverter(name,salary){
    name =  document.getElementById("ename").value;
    salary = document.getElementById("esalary").value;

    if(salary <= 300000){
        document.getElementById("ded1").value = "0";
        document.getElementById("ded2").value = "0";
        document.getElementById("totalded").value = "0";
        document.getElementById("result").value = `${name} ! You are Tax free`;
    }
    else if(salary <= 600000){
        ded1 = 30000;
        ded2 = (salary-300000)*0.1;
        document.getElementById("ded1").value = ded1;
        totalTax = ded1 + ded2;
        document.getElementById("ded2").value = ded2;
        document.getElementById("totalded").value = totalTax;
        document.getElementById("result").value = `${name} ! Your Tax amount = ${totalTax}`;   
    }
    else if(salary > 600000){
        ded1 = 60000;
        ded2 = (salary-600000)*0.2;
        document.getElementById("ded1").value = ded1;
        totalTax = ded1 + ded2;
        document.getElementById("ded2").value = ded2;
        document.getElementById("totalded").value = totalTax;
        document.getElementById("result").value = `${name} ! Your Tax amount is: ${totalTax}`;
    }
}