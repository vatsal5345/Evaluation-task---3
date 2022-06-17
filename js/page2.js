let name = localStorage.getItem('name');
let age = localStorage.getItem('age');
let email = localStorage.getItem('email');
let phone = localStorage.getItem('phone');
let gender = localStorage.getItem('gender');
let sunday = localStorage.getItem('sunday');
let monday = localStorage.getItem('monday');
let tuesday = localStorage.getItem('tuesday');
let wednesday = localStorage.getItem('wednesday');
let thrusday = localStorage.getItem('thrusday');
let friday = localStorage.getItem('friday');
let saturday = localStorage.getItem('saturday');

if (sunday == undefined){
    sunday = "";
}

if (monday == undefined){
    monday = "";
}

if (tuesday == undefined){
    tuesday = "";
}

if (wednesday == undefined){
    wednesday = "";
}

if (friday == undefined){
    friday = "";
}

if (thrusday == undefined){
    thrusday = "";
}

if (saturday == undefined){
    saturday = "";
}


$('#displayArea').
        append(
            "<tr><td>" + name + 
            "</td><td>" + age +
            "</td><td>" + email +
            "</td><td>" + phone +
            "</td><td>" + gender +
            "</td><td>" + sunday +
            "</td><td>" + monday +
            "</td><td>" + tuesday +
            "</td><td>" + wednesday +
            "</td><td>" + thrusday +
            "</td><td>" + friday +
            "</td><td>" + saturday +
            "</td></tr>" 
        )