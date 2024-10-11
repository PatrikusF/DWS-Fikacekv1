/*Úkol č. 1 */
let first = document.getElementById('first');
first.addEventListener('click',function()
       {alert("Vyskočil mi alert")}
)

/*Úkol č. 2*/
const second = document.getElementById('second')
second.addEventListener('click',function(){
       second.textContent = "Změna textu";}   
)

/*Úkol č.  3*/
function changeText() {
      document.getElementById("text").innerHTML = "Text byl úspěšně změněn!";
}

/*Úkol č. 4*/
function writeText() {
    document.getElementById("output").innerHTML = "Text byl úspěšně zobrazen!";
}

/*Úkol č. 5*/
function hellouser(){
       let user = document.getElementById('user').value;
       alert('Vítám tě na webové stránce' + user);
}

/*Úkol č. 8*/
document.getElementById('time').addEventListener('click', function() {
       const currentTime = new Date().toLocaleTimeString();
       document.getElementById('finaltime').innerText = currentTime;
   });

/*Úkol č. 9*/
document.getElementById('date').addEventListener('click', function() {
       const currentDate = new Date().toLocaleDateString();
       document.getElementById('finaldate').innerText = currentDate;
   });  
