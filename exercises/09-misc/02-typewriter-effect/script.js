/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {


  let message=document.getElementById("target").textContent;
  document.getElementById("target").innerHTML="";
  function random_number(min, max){ // genere un nombre aléatoire pour l'intervalle
    random_nb=Math.floor(Math.random() * (max - min) + min);
    return random_nb
  }

  function typing(target, message, speed_min, speed_max){
    let i = 0;
    let interval = setInterval(function(){
        document.getElementById(target).innerHTML += message.charAt(i);
        i++;
        if (i > message.length){
            clearInterval(interval);
        }
    }, random_number(speed_min, speed_max));
}

typing("target", message, 500, 2000);




})();
