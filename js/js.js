function test() {
    document.getElementById('colorandfont').style.backgroundColor = 'yellow';
    document.getElementById('colorandfont').style.fontSize = '30px';

}
function changepic() {
    document.getElementById('image1').src = 'image/img.PNG'
}

function change() {
    document.getElementById('image1').src = 'image/1.PNG'
}

function swap() {
    var content = document.getElementById('div2').innerHTML
    document.getElementById('div2').innerHTML = document.getElementById('div1').innerHTML
    document.getElementById('div1').innerHTML = content

}

// function swappic()
// {
//     var a= document.getElementById('img1')
//     var b= document.getElementById('img2')
//     var temp= a.src
//     a.src= b.src
//     b.src=temp

// }

function swappic() {
    var temp = document.getElementById('img1').src
    document.getElementById('img1').src = document.getElementById('img2').src
    document.getElementById('img2').src = temp
}


//show and hide images
function hide() {
    document.getElementById('img11').style.display = "none"
}
function show() {
    document.getElementById('img11').style.display = "inline"
}


function hideandshow() {
    if (document.getElementById('btn1').innerHTML == 'hide') {
        document.getElementById('img22').style.display = "none"
        document.getElementById('btn1').innerHTML = "show"
    }
    else {
        document.getElementById('img22').style.display = "inline"
        document.getElementById('btn1').innerHTML = "hide"
    }
}


//reverse of an array
function array() {
    var cars = ["bmw", "benz", "volvo", "jaguar"]
    for (var i = cars.length - 1; i >= 0; i--) {
        console.log(cars[i])
    }
}

// JS string search 
//    IndexOf
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
document.getElementById("demo").innerHTML = index;

//    lastIndexOf
let text1 = "Please locate where 'locate' occurs!";
let index1 = text1.lastIndexOf("locate");
document.getElementById("demo1").innerHTML = index1;


// JavaScript Arrays
// The length Property
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
document.getElementById("demo2").innerHTML = size;

// toString()
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo3").innerHTML = fruits1.toString();

// join()
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo4").innerHTML = fruits3.join(" * ");


// pop()
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo5").innerHTML = fruits4;
fruits4.pop();
document.getElementById("demo6").innerHTML = fruits4;

// push()
const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo7").innerHTML = fruits5;
fruits5.push("kiwi");
document.getElementById("demo8").innerHTML = fruits5;

// splice (2,0)
const fruits6 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo9").innerHTML = fruits6;
fruits6.splice(2, 0, "Lemon", "Kiwi");
document.getElementById("demo10").innerHTML = fruits6;

// splice (2,2)
const fruits7 = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo11").innerHTML = "Original Array:<br> " + fruits7;
let removed = fruits7.splice(2, 2, "Lemon", "Kiwi"); 
document.getElementById("demo12").innerHTML = "New Array:<br>" + fruits7;
document.getElementById("demo13").innerHTML = "Removed Items:<br> " + removed; 


//slice
const fruits8 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const cut = fruits8.slice(1);
document.getElementById("demo14").innerHTML = fruits8 + "<br><br>" + cut;



// this
// create n object
const person1 = {
    firstName: "john",
    lastName: "doe",
    id: 5566,
    fullName : function(){
        return this.firstName + " " +this.lastName;

    }
};
// Display data from the object
document.getElementById('demo15').innerHTML=person1.fullName();