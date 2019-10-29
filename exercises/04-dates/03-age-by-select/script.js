/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {



        function getAge(date) {
        var diff = Date.now() - date.getTime();
        var age = new Date(diff);
        return Math.abs(age.getUTCFullYear() - 1970);
      }

      document.getElementById("run").addEventListener("click", ()=>{
        let Day=document.getElementById("dob-day").value;
        let Month=document.getElementById("dob-month").value;
        let Year=document.getElementById("dob-year").value;
        parseInt(Day,10);
        parseInt(Month,10);
        parseInt(Year,10);

       alert(getAge(new Date(Year,Month ,Day))+" "+"ans"); //Date(année, mois, jour)

      });

})();
