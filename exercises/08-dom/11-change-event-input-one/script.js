/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementsByTagName("input")[0].setAttribute("maxlength",10)

    document.getElementById("pass-one").addEventListener("input",()=> {
        let input_number = document.getElementById("pass-one").value;
        document.getElementById("counter").innerHTML = input_number.length+"/10";
  });


})();
