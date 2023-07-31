function billSplit(){
    let amount = document.getElementById("billAmount").value;
    let people = document.getElementById("persons").value;

    let result = amount/people;

    document.getElementById("resultAmountt").value = result.toFixed(2);

    document.getElementById("billAmount").value = " ";
    document.getElementById("persons").value = " ";

    if(amount == 0 || amount == " "){
        document.getElementById("alertmsg1").innerText = "Enter correct value";
        document.getElementById("billAmount").value = "";
        document.getElementById("persons").value = people;
        document.getElementById("resultAmountt").value = " ";
        document.getElementById("billAmount").style.borderColor="red";
    } 
    else if(people == 0 || people == " "){
        document.getElementById("alertmsg2").innerText = "Enter correct value";
        document.getElementById("persons").value = "";
        document.getElementById("billAmount").value = amount;
        document.getElementById("resultAmountt").value = " " ;
        document.getElementById("persons").style.borderColor="red";                  
    }
    else{
        document.getElementById("alertmsg1").innerText = " ";
        document.getElementById("alertmsg2").innerText = " ";
        document.getElementById("billAmount").style.borderColor="black";
        document.getElementById("persons").style.borderColor="black";
    }
}