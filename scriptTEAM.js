//linking the JSON file

var employees = JSON.parse(teamMembers);
console.table(teamMembers);

for (var i = 0; i < employees.length; i++) {
document.getElementById("team-members").innerHTML += `<div class="flex-column, member"> <img class="team-img" src="${employees[i].image}"> <br> <p> Name:  ${employees[i].name}</p> <p>Email address:  ${employees[i].email}</p> </div>`;

}

// //creates and displays the JSON content into the html file
// for (var i = 0; i < carArr.length; i++) {
//     document.getElementById("main").innerHTML += `<div id='car${i}'> <img ${carArr[i].Img} id='img${i}'> <br> <p> ${carArr[i].Model} </p> <div id='moreInfo${i}'></div></div>`;
// }