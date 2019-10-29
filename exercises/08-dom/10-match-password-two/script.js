/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
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

      let error_1 = document.getElementById("pass-one");
      let error_2 = document.getElementById("pass-two");
      error_1.classList.add("error");
      error_2.classList.add("error");

    }

  });
})();
