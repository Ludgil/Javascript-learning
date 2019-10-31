/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
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
        create_template(xmen);
    }

    function create_template(data){

        let template = document.getElementById("tpl-hero"); // copie du template

        for(let i=0;i<data.length;i++){
            const clone = document.importNode(template.content, true); // importer la copie du template dans une variable
            let name =clone.querySelector(".name"); // recuperer la zone ou inscrire les noms
            let alter_ego=clone.querySelector(".alter-ego"); // recuperer la zone ou inscrire les alter ego
            let power=clone.querySelector(".powers");// recuperer la zone ou inscrire les pouvoirs
            name.textContent = data[i].name; // inscrire les data concernant les noms dans la zone "name"
            alter_ego.textContent= data[i].alterEgo; // inscrire les data concernant les alter ego dans la zone "alterego"
            power.textContent=data[i].abilities; // inscrire les data concernant les pouvoirs dans la zone "power"
            document.getElementById("target").appendChild(clone); // push le clone dans la page HTML
        }

    }



    document.getElementById("run").addEventListener("click", ()=>{

        catch_xmen().catch(error =>{
            console.log("oups");
            console.error(error);
        });

    });
})();
