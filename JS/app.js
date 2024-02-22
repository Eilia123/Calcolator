let show_anser = document.getElementById("show_anser");
function number_one(){
     document.getElementById("show_anser").value += 1
}

function number_two(){
     document.getElementById("show_anser").value += 2
}

function number_three(){
     document.getElementById("show_anser").value += 3
}

function number_four(){

     document.getElementById("show_anser").value += 4
}

function number_five(){
     document.getElementById("show_anser").value += 5
}

function number_six(){
     document.getElementById("show_anser").value += 6
}

function number_seven(){
     document.getElementById("show_anser").value += 7
}

function number_eight(){
     document.getElementById("show_anser").value += 8
}

function number_nine(){
     document.getElementById("show_anser").value += 9
}

function number_zero(){
     document.getElementById("show_anser").value += 0
}

function doble_zero(){
     document.getElementById("show_anser").value += "00"
}

function plas(){
     document.getElementById("show_anser").value += "+"
}

function maines(){
     document.getElementById("show_anser").value += "-"
}

function numberdot(){
     document.getElementById("show_anser").value += "."
}

function C(){
     document.getElementById("show_anser").value = ""
}

function slash(){
     document.getElementById("show_anser").value += "/"
}

function numbermulti(){
     document.getElementById("show_anser").value += "*"
}

function number_pi(){
     document.getElementById("show_anser").value = ""
     document.getElementById("show_anser").value = Math.PI
}

function equally(){
let equal = document.getElementById("show_anser");

let pater = /^[0-9\W]+$/

if(equal.value == ""){
     alert("input is NaN")
}
else{
     if(pater.test(equal.value) == true){
          equal.value = eval(equal.value)
     }
     else{
          alert("input isnt string! you just use number")
     }
}

}