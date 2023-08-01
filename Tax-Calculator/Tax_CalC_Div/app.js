
function taxCalculator(name,salary){
    name = document.getElementById("emplyName").value;
    salary = document.getElementById("esalary").value;

    if(salary <= 300000){
        document.getElementById("ded1").value = "0";
        document.getElementById("ded2").value = "0";
        document.getElementById("totalded").value = "0";
        document.getElementById("result").value = `${name} ! you are Tax-Free`
    }
    else if(salary <= 600000){
        let ded1 = 0;
        let ded2 = (salary-300000)*0.1;
        let totalDeduction = ded1 + ded2;
        document.getElementById("ded1").value = ded1;
        document.getElementById("ded2").value = ded2;
        document.getElementById("totalded").value = totalDeduction;
        document.getElementById("result").value = `${name} ! your Tax amount is : ${totalDeduction}`;
    }
    else if(salary > 600000){
        let ded1 = 30000;
        let ded2 = (salary-600000)*0.2;
        let totalDeduction = ded1 + ded2;
        document.getElementById("ded1").value = ded1;
        document.getElementById("ded2").value = ded2;
        document.getElementById("totalded").value = totalDeduction;
        document.getElementById("result").value = `${name} ! Your tax amount is : ${totalDeduction}`;
    }

}

