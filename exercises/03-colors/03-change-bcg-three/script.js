/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {


  function getRandom(min, max) {
      return Math.random() * (max - min) + min;
}

    document.getElementById("run").addEventListener("click", () => {

      let r=getRandom(0,255);
      let g=getRandom(0,255);
      let b=getRandom(0,255);
      Math.ceil(r);
      Math.ceil(g);
      Math.ceil(b);
      let Color="rgb("+r+","+g+","+b+")"
      document.body.style.background=Color

    });

})();
