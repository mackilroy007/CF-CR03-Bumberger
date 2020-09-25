//obtain the data from the forms

//to simplify our code, we create a var answer to replace document....
var result = document.getElementById("result");


function calculateInsurance() {
    var yourName = document.getElementById("yname").value;
    var displayName = yourName[0].toUpperCase() + yourName.substring(1) 
    var age = document.getElementById("age").value;
    var country = document.getElementById("country").value;
    var hpOfCar = document.getElementById("hpOfCar").value;
    var huf = 363.37; //conversion rate 25.09 placeholder
    // console.log(firstName);
    // console.log(age);
    // console.log(country);
    // console.log(hpOfCar);
    //using Math.round to round up the highest int if the number has decimal places
    if (country == "Austria") { //Austria : insurance = horse_power x 100 / age   + 50;
        var calc1 = (Math.round(hpOfCar * 100 / (age)) + 50);
        result.innerHTML = displayName + ", our insurance rate offer will be " + calc1.toLocaleString() +" €";
        // console.log(result);
    } else if (country == "Hungary") {//Hungary: insurance = horse_power x 120 / age  + 100;
        var calc2 = ((Math.round(hpOfCar * 120 / (age) + 100))*huf);
        result.innerHTML = displayName + ", our insurance rate offer will be " + calc2.toLocaleString() + " Ft";
        // console.log(result);
    } else {    //Greece: insurance = horse_power x 150 / (age+3)  + 50;
        var calc3 = (Math.round(hpOfCar * 150 / (age+3) + 50));
        result.innerHTML = displayName + ", our insurance rate offer will be " + calc3.toLocaleString() +" €";
        // console.log(result);
    }

}
document.getElementById("button").addEventListener("click",calculateInsurance,false);