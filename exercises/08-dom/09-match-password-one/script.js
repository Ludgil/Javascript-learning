/* becode/javascript
 *
 * /08-dom/09-match-password-one/script.js - 8.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {



    document.getElementById("run").addEventListener("click", ()=>{

      let pass_1=document.getElementById("pass-one").value;
      let pass_2=document.getElementById("pass-two").value;

      if(pass_1!=pass_2){

        document.getElementsByTagName("input")[0].style.borderColor="red"
        document.getElementsByTagName("input")[1].style.borderColor="red"

      }

    });



})();
