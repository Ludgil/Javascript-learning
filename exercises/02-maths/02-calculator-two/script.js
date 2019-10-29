/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        // perform the operation

        let Op_1=document.getElementById("op-one").value;
        let Op_2=document.getElementById("op-two").value;

        switch (operation) {


  case "addition":
          // perform an addition

          let Addition= parseInt(Op_1)+parseInt(Op_2);
          alert(Addition);
    break;

  case "substraction":

          let Substraction= parseInt(Op_1)-parseInt(Op_2);
          alert(Substraction);

    break;
  case "multiplication":

          let Multiplication= parseInt(Op_1)*parseInt(Op_2);
          alert(Multiplication);

    break;
  case "division":

          let Division= parseInt(Op_1)/parseInt(Op_2);
          alert(Division);

    break;
}
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
