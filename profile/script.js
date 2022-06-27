var my_name = prompt("name");
var password = my_name;
var input;

while(password!=input){
    input = prompt("password");
}
alert("success");

function hello(){
    document.write("hello" + " " + my_name)
}
hello();

let title = "個人Profile檔案";
let h1 = document.querySelector("h1");
h1.innerHTML = `<b>${title}</b>`;

const imgurl = "https://images-tw.girlstyle.com/wp-content/uploads/2021/03/f1230ee8.gif?quality=90";
let img = document.getElementById("profile");
img.setAttribute("src",imgurl);

var person ={
    name : "NAME: Yu",
    email: "EMAIL: joseph19981220@gmail.com",
    school:"SCHOOL: Build School",
    hobby:"HOBBY: viajar"
}
document.querySelector(".name").innerHTML = `<b>${person.name}</b>`;
document.querySelector(".email").innerHTML = `<b>${person.email}</b>`;
document.querySelector(".school").innerHTML = `<b>${person.school}</b>`;
document.querySelector(".hobby").innerHTML = `<b>${person.hobby}</b>`;

const url_1 = "https://imgur.dcard.tw/jcCwlfq.gif";
const url_2 = "https://imgur.dcard.tw/oJnzUlW.gif";
const url_3 = "https://imgur.dcard.tw/JDX9kAU.gif";
let info_1 = document.querySelector(".file_1");
info_1.src= url_1;
let info_2 = document.querySelector(".file_2");
info_2.src= url_2;
let info_3 = document.querySelector(".file_3");
info_3.src= url_3;
