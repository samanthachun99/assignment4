//animation for letter I
var letteri = document.getElementById("letteri");

letteri.addEventListener("click", AddAnimation);

//to reset, we must remove the animation class when mouse is done clicking

letteri.addEventListener("mouseup", RemoveAddClass);

function RemoveAddClass() {
    setTimeout(RemoveAnimation, 1000);
}

function RemoveAnimation() {
    letteri.classList.remove("animation");
}

function AddAnimation() {
    //adding animation class to sqr
    letteri.classList.add("animation");
    console.log(letteri, "elongate letter i")
}


//animation for letter D
var letterd = document.getElementById('d-circle');
letterd.addEventListener("mouseover", ChangeDBg)
letterd.addEventListener("mouseout", ChangeBackDBg)

function ChangeDBg() {
    letterd.style.backgroundColor = "orange";
}

function ChangeBackDBg() {
    letterd.style.backgroundColor = "yellow";
}

var letterd2 = document.getElementById('d-line');
letterd2.addEventListener("mouseover", ChangeD2Bg)
letterd2.addEventListener("mouseout", ChangeBackD2Bg)

function ChangeD2Bg() {
    letterd2.style.backgroundColor = "orange";
}

function ChangeBackD2Bg() {
    letterd2.style.backgroundColor = "yellow";
}


//animation for letter e
var lettere1 = document.getElementById("lettere1")
lettere1.addEventListener("click", AddE1Color)
lettere1.addEventListener("mouseup", ChangeBackE1Bg)

function ChangeBackE1Bg() {
    setTimeout(RemoveE1Bg, 2000);
}

function RemoveE1Bg() {
    lettere1.style.backgroundColor = "yellow";
}

function AddE1Color() {
    lettere1.style.backgroundColor = "green";
}

var lettere2 = document.getElementById("lettere2")
lettere2.addEventListener("click", AddE2Color)
lettere2.addEventListener("mouseup", ChangeBackE2Bg)

function ChangeBackE2Bg() {
    setTimeout(RemoveE2Bg, 2000);
}

function RemoveE2Bg() {
    lettere2.style.backgroundColor = "yellow";
}

function AddE2Color() {
    lettere2.style.backgroundColor = "blue";
}

var lettere3 = document.getElementById("lettere3")
lettere3.addEventListener("click", AddE3Color)
lettere3.addEventListener("mouseup", ChangeBackE3Bg)

function ChangeBackE3Bg() {
    setTimeout(RemoveE3Bg, 2000);
}

function RemoveE3Bg() {
    lettere3.style.backgroundColor = "yellow";
}

function AddE3Color() {
    lettere3.style.backgroundColor = "purple";
}

//animation for exclamation point
var excl = document.getElementById("exclamation");
excl.addEventListener("mouseover", ChangeExcl)
excl.addEventListener("mouseout", ChangeBackExcl)

function ChangeExcl() {
    excl.style.top = "0px";
    excl.style.height = "470px"
}

function ChangeBackExcl() {
    excl.style.top = "200px";
    excl.style.height = "270px";
}
