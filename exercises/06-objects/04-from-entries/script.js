/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];


    document.getElementById("run").addEventListener("click", ()=>{

    const obj = new Map(); // crée une map

    for(i=0;i<keys.length;i++){ // utiliser la taille d'un tableau pour faire un for

      obj.set(keys[i],values[i]); // set la map avec les elements keys et values
    }
   const entries=Object.fromEntries(obj); // from entries crée un objet avec la map

   console.log(entries);


    });
})();
