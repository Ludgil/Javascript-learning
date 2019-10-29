/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here

    let Current_Hours=new Date().getHours(); // recupere l'heure
    let Current_Minutes=new Date().getMinutes(); // recupere les minutes

    if(Current_Minutes<10){  // si les minutes sont inferieur a 10 il faut rajouter 0+la minute
      Current_Minutes="0"+Current_Minutes;
    }

    let Current_Time= Current_Hours.toString()+Current_Minutes.toString(); // raccrocher les heures et le minutes
    parseInt(Current_Time,10); //convertir le string en int

    if(Current_Time < 1730 ){ 
    document.getElementById("target").innerHTML="Bonjour"
    }
    else {
      document.getElementById("target").innerHTML="Bonsoir"
    }


})();
