//obtain the data from the forms

//to simplify our code, we create a var answer to replace document....
var result = document.getElementById("result");


function calculateInsurance() {
    var yourName = document.getElementById("yname").value;
    var displayName = yourName[0].toUpperCase() + yourName.substring(1);
    var age = document.getElementById("age").value;
    var country = document.getElementById("country").value;
    var hpOfCar = document.getElementById("hpOfCar").value;
    var huf = 363.37; //conversion rate 25.09 placeholder

    //using Math.round to round up the highest int if the number has decimal places
    if (country == "Austria" && age >= 18) { //Austria : insurance = horse_power x 100 / age   + 50;
        var calcA = (Math.round(hpOfCar * 100 / (age)) + 50); //seperating the calculation from the display for easier access
        result.innerHTML = "<br>" + displayName + ", our insurance rate offer will be " + calcA.toLocaleString() +" €";
        // console.log(result);
    } else if (country == "Hungary" && age >= 18) {//Hungary: insurance = horse_power x 120 / age  + 100;
        var calcH = ((Math.round(hpOfCar * 120 / (age) + 100))*huf);
        result.innerHTML = "<br>" + displayName + ", our insurance rate offer will be " + calcH.toLocaleString() + " Ft";
        // console.log(result);
    } else if (country == "Greece" && age >= 18) {    //Greece: insurance = horse_power x 150 / (age+3)  + 50;
        var calcG = (Math.round(hpOfCar * 150 / (age+3) + 50));
        result.innerHTML = "<br>" +displayName + ", our insurance rate offer will be " + calcG.toLocaleString() +" €";
        // console.log(result);
    } else {
        result.innerHTML = `<br>We only offer insurance for individuals who are 18 or older.`
    }

}
document.getElementById("button").addEventListener("click",calculateInsurance,false);

//linking the JSON file
var employees = JSON.parse(teamMembers);
console.table(teamMembers);