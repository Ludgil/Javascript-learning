/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    async function catch_xmen(){
        const response= await fetch("http://localhost:3000/heroes");
        const xmen = await response.json();
        display_id(xmen);
    }

    function display_id(data){

        let template = document.getElementById("tpl-hero"); // copie du template

        let input_id = document.getElementById("hero-id").value;
        if (input_id < 0 || input_id >4){
            alert("Inserer l'id d'un XMEN compris entre 0 et 4, tu as compris ?!");
        }

        const clone = document.importNode(template.content, true); // importer la copie du template dans une variable
        let name =clone.querySelector(".name"); // recuperer la zone ou inscrire les noms
        let alter_ego=clone.querySelector(".alter-ego"); // recuperer la zone ou inscrire les alter ego
        let power=clone.querySelector(".powers");// recuperer la zone ou inscrire les pouvoirs
        name.textContent = data[input_id].name; // inscrire les data concernant les noms dans la zone "name"
        alter_ego.textContent= data[input_id].alterEgo; // inscrire les data concernant les alter ego dans la zone "alterego"
        power.textContent=data[input_id].abilities; // inscrire les data concernant les pouvoirs dans la zone "power"
        document.getElementById("target").appendChild(clone); // push le clone dans la page HTML

    }



    document.getElementById("run").addEventListener("click", ()=>{

        catch_xmen().catch(error =>{
            console.log("oups");
            console.error(error);
        });

    });
})();
