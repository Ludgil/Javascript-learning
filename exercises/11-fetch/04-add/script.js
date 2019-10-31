/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {


    document.getElementById("run").addEventListener("click", async ()=>{

        const xmen={
             name : document.getElementById("hero-name").value,
             alterEgo : document.getElementById("hero-alter-ego").value,
             abilities : document.getElementById("hero-powers").value.split(",")
        };

        try {
            const response= await fetch("http://localhost:3000/heroes", {
                    method: "POST",
                    headers: {
                                'Accept': 'application/json',
                                'Content-type': 'application/json',
                            },
                    body:  JSON.stringify(xmen)
            });
            const result = await response.json();
            console.log(result);
        }
        catch(error){
            console.log("error!!");
            console.error(error);
        }




    });
})();
