/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {


    document.getElementById("pass-one").addEventListener("input",()=>{

        let input_number = document.getElementById("pass-one").value;
        let match_number=document.getElementById("pass-one").value;
        let count_number=match_number.match(/(\d+)/);

        if (input_number.length >= 8 && count_number[0].length >=2){
        document.getElementById("validity").innerHTML = "Ok";
        }
        else {
            document.getElementById("validity").innerHTML = "Pas ok";
        }


  });
})();
