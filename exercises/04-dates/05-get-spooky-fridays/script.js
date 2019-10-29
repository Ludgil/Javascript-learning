/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

  document.getElementById("run").addEventListener("click", ()=> {

        let Year=document.getElementById("year").value; // recupere l'année d'input
        let Options = {weekday: "long", year: "numeric", month: "long", day: "numeric"}; // controle l'affichage de la date
        let Option_day={weekday: "long"}; // affiche que le jour de la semaine

        for(i=0;i<=11;i++){ // boucle sur les 12 mois de l'année 0= janvier et 11 = décembre
          let Friday=new Date(Year,i,13).toLocaleString("fr-BE", Options);// recupere les données de la date a afficher
          let Friday_compare=new Date(Year,i,13).toLocaleString("fr-BE", Option_day) // recupere uniquement le jour de la semaine
          if(Friday_compare=="vendredi"){ // compare le jour de la semaine avec le mot vendredi
            alert("Voici les vendredi 13 de l'année"+" "+Year+" sont : le "+Friday); // affiche que les correspondances "vendredi"
          }
        }
});




})();
