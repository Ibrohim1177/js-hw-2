var yosh = prompt('Yoshigizni kiriting!');


if (yosh <= 18){
    alert('Yoshsiz o`qishingiz kerak')
}else if(yosh > 18 && yosh <= 50){
    alert('Ishlashingiz kerak')
}else if(50 < yosh && yosh <= 60){
    alert('Yaqinda pensiyaga chiqasiz');
}else if(60 < yosh && yosh <= 120){
    alert('Pensionerga o`xshaysiz');
}else if(120 < yosh){
    alert('Aldamang!');
}else{
    alert("Nmadur noto`g`ri ketib qoldi")
};


var num1 = prompt('Birinchi sonni kiriting');
var num2 = prompt('Ikkinchi sonni kiriting');
var num3 = prompt('Uchinchi sonni kiriting');

if(num1 > num2 && num1 < num3 || num1 > num3 && num1 < num2){
    alert('O`rta qiymat ' + num1);
}else if(num2 > num1 && num2 < num3 || num2 > num3 && num2 < num1){
    alert('O`rta qiymat ' + num2);
}else if(num3 > num1 && num3 < num2 || num3 > num2 && num3 < num1){
    alert('O`rta qiymat ' + num3);
}else{
    alert('Raqam kiriting!')
};

var name = prompt('Ismingizni kiriting')
var name2 = "Ibrohim"

if(name !== name2){
    alert('Hello guest');
}else if(name2){
    alert('Hello boss');
}else{
    alert('Ism kiriting!');
}

