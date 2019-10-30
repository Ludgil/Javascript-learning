/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function random_number_generator(){
        return Math.floor(Math.random() * (100 - 1) + 1);
    }

    let random=random_number_generator();
    let user_number=prompt("Tu ne devenira jamais !");
    let count =0;
    while(user_number!=random){

        if(user_number<random){
            alert("plus grand :)");
            user_number=prompt("essaie encore");
        }
        else {
            alert("plus petit :)");
            user_number=prompt("essaie encore");
        }
        count++;
    }
    alert("bravo :) le nombre est "+random+" et tu as mis "+count+" essais");

})();
