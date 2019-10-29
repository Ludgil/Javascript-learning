/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {


    Confirm=false;

    while(Confirm==false){
      Question_1=prompt("How old are you?");
      Question_2=prompt("Are you a girl ? or a boy ?");
      Question_3=prompt("Where do you live ?");
      Confirm=confirm(Question_1+ " " + Question_2+ " " + Question_3+ " " + "are they correct ?");
    }

})();
