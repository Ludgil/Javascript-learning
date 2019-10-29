/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
        // your code here

      let Input =document.getElementById("number").value;

      Input=parseInt(Input,10);

      //fonction recursive pour la factorielle 
      function factorielle(Input) {
            return Input == 0 ? 1 :  Input * factorielle (Input-1);
}
      alert(factorielle(Input));
    });
})();
