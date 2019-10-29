/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    document.getElementById("run").addEventListener("click", ()=>{

      Fruits_2=Array.from(new Set(fruits)); // methode avec Set


      const Fruits_3 = fruits.reduce(function (acc, valCourante) { //methode avec reduce
        if(acc.indexOf(valCourante) === -1) {
            acc.push(valCourante);
        }
          return acc
        }, []);

      console.log(Fruits_2);
      console.log(Fruits_3);
    })
})();
