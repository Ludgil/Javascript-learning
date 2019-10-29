/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    const adj =Array.from(new Set(adjectives));

    document.getElementById("run").addEventListener("click", ()=>{

      function randombirds(content){ // genere un nombre aléatoire pour l'index

        random_nb=Math.floor(Math.random()*content);

        return random_nb
      }
      let content_birds=birds.length; // recupere le nombre de contenu dans le tableau
      let content_adj=adj.length; // recupere le nombre de contenu dans le tableau
      let nb_birds=randombirds(content_birds);// genere un nombre aléatoire de l'index
      let nb_adj=randombirds(content_adj);// genere un nombre aléatoire de l'index


      if(birds[nb_birds].fem== true){ // verifie si le nom de l'oiseau choisi est feminin ou non
        document.getElementById("target").innerHTML= "la"+" "+birds[nb_birds].name+" "+adj[nb_adj]+"e"
      }
      else {
        document.getElementById("target").innerHTML= "le"+" "+birds[nb_birds].name+" "+adj[nb_adj]
      }



    })
})();
