let Button1 = document.getElementById('Button1');
let Button2 = document.getElementById('Button2');
let Button3 = document.getElementById('Button3');

let HideText1 = document.getElementById('HideText1')
let HideText2 = document.getElementById('HideText2')
let HideText3 = document.getElementById('HideText3')

let HideButton1 = document.getElementById('HideButton1')
let HideButton2 = document.getElementById('HideButton2')
let HideButton3 = document.getElementById('HideButton3')


//container 1
//Boton 1
Button1.addEventListener('click', function(){
    Button1.style.backgroundColor = "black";
    HideText1.style.display = "block";
    HideButton1.style.display = "block";
} )
//Texto y boton ocultos 1
HideButton1.addEventListener('click', function(){
    Button1.style.backgroundColor = "#1B2631";
    HideText1.style.display = "none";
    HideButton1.style.display = "none";
})

//Boton 2
Button2.addEventListener('click', function(){
    Button2.style.backgroundColor = "black";
    HideText2.style.display = "block";
    HideButton2.style.display = "block";
} )
//Texto y boton ocultos 2
HideButton2.addEventListener('click', function(){
    Button2.style.backgroundColor = "#1B2631";
    HideText2.style.display = "none";
    HideButton2.style.display = "none";
})

//Boton 3
Button3.addEventListener('click', function(){
    Button3.style.backgroundColor = "black";
    HideText3.style.display = "block";
    HideButton3.style.display = "block";
} )
//Texto y boton ocultos 3
HideButton3.addEventListener('click', function(){
    Button3.style.backgroundColor = "#1B2631";
    HideText3.style.display = "none";
    HideButton3.style.display = "none";
})