/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", () => {
        // perform an addition
        let Op_1=document.getElementById("op-one").value;
        let Op_2=document.getElementById("op-two").value;
        let Addition= parseInt(Op_1)+parseInt(Op_2);
        alert(Addition);

    });

    document.getElementById("substraction").addEventListener("click", () => {
        // perform an substraction
        let Op_1=document.getElementById("op-one").value;
        let Op_2=document.getElementById("op-two").value;
        let Substraction = parseInt(Op_1)-parseInt(Op_2);
        alert(Substraction);
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        // perform an multiplication
        let Op_1=document.getElementById("op-one").value;
        let Op_2=document.getElementById("op-two").value;
        let Multiplication= parseInt(Op_1)*parseInt(Op_2);
        alert(Multiplication);
    });

    document.getElementById("division").addEventListener("click", () => {
        // perform an division
        let Op_1=document.getElementById("op-one").value;
        let Op_2=document.getElementById("op-two").value;
        let Division= parseInt(Op_1)/parseInt(Op_2);
        alert(Division);
    });
})();
